import { SpaceDict } from "chromatic-chandelier/manual"
import { makeCSSColor, round } from "chromatic-chandelier/toolkit"
import { getToken } from "./store.ts"
import { isColorToken, isShadowToken } from "./util.token-validator.ts"

export const token = (name: TokenName, ...args: string[]): Token | string => {
	let token = getToken(name)

	if (isColorToken(token)) {
		let { colorSpace, components, alpha } = token.$value
		if (SpaceDict.has(colorSpace)) {
			let space = SpaceDict.get(colorSpace)!
			let dims = space.CAM ?? space.CSYS
			components = components.map((cp, idx): string =>
				(dims[idx].precision ? round(cp, dims[idx].precision) : cp)
				+ (dims[idx].unit ?? '')
			)
		}
		return makeCSSColor(colorSpace, components, alpha)
	}

	if (isShadowToken(token)) {
		let list = Array.isArray(token.$value) ? token.$value : [token.$value]
		return list.map(item => {
			let inset = args.includes('inner') || item.inset
			let { offset: [h, v], blur, spread = 0, color } = item
			return [
				h ? h + 'rem' : '0',
				v ? v + 'rem' : '0',
				blur ? blur + 'rem' : '0',
				spread ? spread + 'rem' : '',
				color,
				inset ? 'inset' : ''
			].join(' ')
		}).join(', ').replace(/\s{2,}/g, ' ')
	}

	return token
}