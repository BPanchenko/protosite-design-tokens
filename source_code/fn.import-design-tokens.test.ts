import { strictEqual } from 'node:assert';
import { test } from 'node:test';
import { importDesignTokens, token } from './index.ts';

test("Import tokens `dark-color-scheme` and check the back and front colors", async (_t: test.TestContext) => {
	await importDesignTokens('dark-color-scheme')
	strictEqual(token('color.background'), token('color.black'))
	strictEqual(token('color.foreground'), token('color.gray.50'))
})

test("Import tokens `light-color-scheme` and check the back and front colors", async (_t: test.TestContext) => {
	await importDesignTokens('light-color-scheme')
	strictEqual(token('color.background'), token('color.white'))
	strictEqual(token('color.foreground'), token('color.gray.900'))
})