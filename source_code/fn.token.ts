import { SpaceDict } from "chromatic-chandelier/manual"
import { makeCSSColor, round } from "chromatic-chandelier/toolkit"
import { getToken } from "./store.ts"
import { isColorToken } from "./util.token-validator.ts"

export const token = (name: TokenName): Token | string => {
	let token = getToken(name)
	if (isColorToken(token)) {
		let { colorSpace, components, alpha } = token.$value
		if (SpaceDict.has(colorSpace)) {
			let space = SpaceDict.get(colorSpace)!
			let dims = space.CAM ?? space.CSYS
			components = components.map((cp, idx): string =>
				(dims[idx].precision ? round(cp, dims[idx].precision) : cp) + (dims[idx].unit ?? '')
			)
		}
		return makeCSSColor(colorSpace, components, alpha)
	}
	return token
}