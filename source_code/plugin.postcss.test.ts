import { describe, test } from 'node:test';
import postcss, { type Result } from 'postcss';

import { PostCSSPlugin } from './plugin.postcss.ts';

describe(
	"PostCSS plugin correctly transforms a CSS code that uses design tokens",
	() => {
		const testCases = [
			[
				"different quotes encloses the light theme settings",
				`
					@import-design-tokens 'light-color-scheme';
					body {
						background-color: token('color.background');
						color: token("color.foreground");
					}
				`,
			],
			[
				"the dark theme settings passed without quotes",
				`
					@import-design-tokens dark-color-scheme;
					body {
						background-color: token(color.background);
						color: token( color.foreground );
					}
				`,
			],
		]

		for (let [name, source] of testCases)
			test(name,
				async (t: test.TestContext): Promise<void> => {
					let result = await postcss([PostCSSPlugin()])
						.process(source, {
							from: 'main.css',
							to: 'main.css',
						})
						.then((result: Result) => {
							let warnings = result.messages
								.filter(msg => msg.type === 'warning')
								.map((msg, idx, { length }) =>
									"\n"
									+ (idx < length - 1 ? (idx > 0 ? '\u254A' : '\u2532') : '\u253A')
									+ '\u257E '
									+ msg.text
									+ "\n")

							if (warnings.length > 0) {
								t.assert.fail("\n" + warnings.join('') + "\n")
							}

							return result.css.replace(/[\s]+/g, ' ').trim()
						})

					t.assert.snapshot(result)
				}
			)
	}
)

