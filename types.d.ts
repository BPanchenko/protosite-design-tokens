/// <reference types="protosite-palette/design-tokens" />

declare interface ColorToken extends Token {
	$type: 'color'
	$value: ColorTokenValue
	[Symbol.toPrimitive](hint: 'string' | 'number' | 'default'): string | number
}
declare type ColorTokenName =
	| 'color.background'
	| 'color.foreground'

declare type ColorTokenValue = {
	alpha?: number,
	colorSpace:
	| 'a98-rgb'
	| 'display-p3'
	| 'hsl'
	| 'hwb'
	| 'lab'
	| 'lch'
	| 'oklab'
	| 'oklch'
	| 'prophoto-rgb'
	| 'rec2020'
	| 'srgb'
	| 'srgb-linear'
	| 'xyz-d50'
	| 'xyz-d65',
	components: [number, number, number],
	hex: string,
}

declare type PostCSSPluginOptions = {
	importAtRuleName?: string,
	valueFunctionName?: string,
}

declare interface Token {
	$description?: string
	$metadata?: string
	$type: 'color' | 'shadow' | 'size'
	$value: string | object
}

declare type TokenName = PaletteTokenName | ColorTokenName

declare type TokensGroupName = 'light-color-scheme' | 'dark-color-scheme'