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

declare interface ShadowToken extends Token {
	$type: 'shadow'
	$value: ShadowTokenValue | ShadowTokenValue[]
}

declare type ShadowTokenName =
	| 'shadow.16dp'
	| 'shadow.1dp'
	| 'shadow.24dp'
	| 'shadow.2dp'
	| 'shadow.3dp'
	| 'shadow.4dp'
	| 'shadow.6dp'
	| 'shadow.8dp'
	| 'shadow.diffuse'
	| 'shadow.dreamy'
	| 'shadow.longer'
	| 'shadow.sharp'
	| 'shadow.shorter'

declare type ShadowTokenValue = {
	offset: [number, number],
	blur: number,
	spread?: number,
	color: string | ColorTokenValue,
	inset?: boolean,
}

declare interface Token {
	$description?: string
	$metadata?: string
	$type: 'color' | 'shadow' | 'size'
	$value: string | object
}

declare type TokenName =
	| ColorTokenName
	| PaletteTokenName
	| ShadowTokenName

declare type TokensGroupName =
	| 'light-color-scheme'
	| 'dark-color-scheme'
	| 'shadow'