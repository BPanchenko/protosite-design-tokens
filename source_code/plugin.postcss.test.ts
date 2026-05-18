import { describe, test } from 'node:test';
import postcss, { type Result } from 'postcss';

import { PostCSSPlugin } from './plugin.postcss.ts';

describe(
	"PostCSS plugin correctly transforms a CSS code that uses design tokens",
	() => {
		const testCases = [
			[
				"light theme settings",
				`
					@import-design-tokens 'light-color-scheme';
					body {
						background-color: token('color.background');
						color: token("color.foreground");
					}
				`,
			],
			[
				"grayscale gradient",
				`
					@import-design-tokens dark-color-scheme;
					div {
						background: repeating-conic-gradient(
							token(color.white) 0%,
							token(color.gray.50) 5%,
							token(color.gray.100) 10%,
							token(color.gray.200) 20%,
							token(color.gray.300) 30%,
							token(color.gray.400) 40%,
							token(color.gray.500) 50%,
							token(color.gray.600) 60%,
							token(color.gray.700) 70%,
							token(color.gray.800) 80%,
							token(color.gray.900) 90%,
							token(color.black) 100%
						);
					}
				`,
			], [
				"shadow token and specifying the shadow as the inner",
				`
					@import-design-tokens 'shadow';
					div {
						box-shadow: token('shadow.4dp' inner);
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

