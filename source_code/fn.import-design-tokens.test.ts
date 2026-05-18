import { strictEqual } from 'node:assert';
import { test } from 'node:test';
import { importDesignTokens, token } from './index.ts';

test("Import `dark-color-scheme.tokens` and check the back and front colors", async (_t: test.TestContext) => {
	await importDesignTokens('dark-color-scheme')
	strictEqual(token('color.background'), token('color.black'))
	strictEqual(token('color.foreground'), token('color.gray.50'))
})

test("Import `light-color-scheme.tokens` and check the back and front colors", async (_t: test.TestContext) => {
	await importDesignTokens('light-color-scheme')
	strictEqual(token('color.background'), token('color.white'))
	strictEqual(token('color.foreground'), token('color.gray.900'))
})

test("Check tokens from `shadow.tokens`", async (t: test.TestContext) => {
	await importDesignTokens('shadow')
	t.assert.snapshot(token('shadow.1dp'))
	t.assert.snapshot(token('shadow.2dp'))
	t.assert.snapshot(token('shadow.3dp'))
	t.assert.snapshot(token('shadow.4dp'))
	t.assert.snapshot(token('shadow.6dp'))
	t.assert.snapshot(token('shadow.8dp'))
	t.assert.snapshot(token('shadow.16dp'))
	t.assert.snapshot(token('shadow.24dp'))
})