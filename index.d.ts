/// <reference path="./types.d.ts" />
export const importDesignTokens: (specifier: TokensGroupName) => Promise<void | never>
export const token: (identifier: TokenName) => Token | string