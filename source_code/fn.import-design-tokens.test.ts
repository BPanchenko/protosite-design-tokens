import { strictEqual } from 'node:assert';
import { test } from 'node:test';
import { importDesignTokens, token } from './index.ts';

test("Import tokens `dark-color-scheme` and check the back and front colors", async (_t: test.TestContext) => {
	await importDesignTokens('dark-color-scheme')
	strictEqual(token('bgcolor'), 'hwb(222.6 0.088365 0.89748 / 1)')
	strictEqual(token('fgcolor'), 'hwb(120 1 0 / 1)')
})

test("Import tokens `light-color-scheme` and check the back and front colors", async (_t: test.TestContext) => {
	await importDesignTokens('light-color-scheme')
	strictEqual(token('bgcolor'), 'hwb(120 1 0 / 1)')
	strictEqual(token('fgcolor'), 'hwb(222.6 0.088365 0.89748 / 1)')
})