import { importDesignTokens } from "./fn.import-design-tokens.ts";
import { token } from "./fn.token.ts";

import type { Node, PluginCreator } from "postcss";

const DEFAULT_IMPORT_AT_RULE_NAME = 'import-design-tokens';
const DEFAULT_VALUE_FUNCTION_NAME = 'token';
const PLUGIN_NAME = 'postcss-protosite-design-tokens';

const PostCSSPlugin: PluginCreator<PostCSSPluginOptions> = (opts: PostCSSPluginOptions = {}) => {
	const options = {
		importAtRuleName: DEFAULT_IMPORT_AT_RULE_NAME,
		valueFunctionName: DEFAULT_VALUE_FUNCTION_NAME,
		...opts
	};

	const tokenNameRegExp = new RegExp(
		options.valueFunctionName + "\\(\\W?((?:\\w+)(?:.\\w+)+)\\W?\\)",
		'g'
	)

	return {
		postcssPlugin: PLUGIN_NAME,
		async Once(root, postcssHelpers): Promise<void> {
			const importAtRules: Map<string, {
				filePath: string,
				node: Node
			}> = new Map();

			root.walkAtRules((atRule) => {
				if (atRule.name.toLowerCase() !== options.importAtRuleName) {
					return;
				}

				let specifier = atRule.params
					.replace(/[^\s\w-]+/g, '')
					.replace(/[\s]+/g, ' ')
					.trim().split(' ').at(0);

				importAtRules.set(
					specifier,
					{
						filePath: atRule.source.input.file,
						node: atRule,
					}
				)

				atRule.remove()
			});

			for (const [specifier, atRule] of importAtRules.entries()) {
				try {
					await importDesignTokens(specifier as TokensGroupName);
				} catch (err) {
					atRule.node.warn(
						postcssHelpers.result,
						`Failed to import design tokens from "${specifier}" with error:\n\t`
						+ ((err instanceof Error) ? err.message : err)
					);
					continue;
				}

				postcssHelpers.result.messages.push({
					type: 'dependency',
					plugin: PLUGIN_NAME,
					file: specifier,
					parent: atRule.filePath,
				});
			}
		},
		Declaration(decl, { result }): void {
			if (!decl.value.toLowerCase().startsWith(options.valueFunctionName)) {
				return;
			}

			try {
				let tokenName = decl.value.matchAll(tokenNameRegExp).toArray().at(0).at(1);
				decl.value = token(tokenName as TokenName).toString();
			} catch (err) {
				decl.warn(
					result,
					`Failed to parse and transform "${decl.value}" with error:\n\t`
					+ ((err instanceof Error) ? err.message : err)
				);
			}
		},
	};
};

PostCSSPlugin.postcss = true;

export {
	PostCSSPlugin
};

