/// <reference path="../types.d.ts" />

import type { PluginCreator } from "postcss"

export const importDesignTokens: (specifier: TokensGroupName) => Promise<void | never>
export const token: (identifier: TokenName) => Token | string
export const PostCSSPlugin: PluginCreator<PostCSSPluginOptions>