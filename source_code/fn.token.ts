import { makeCSSColor } from "chromatic-chandelier/toolkit"
import { getToken } from "./store.ts"
import { isColorToken } from "./util.token-validator.ts"

export const token = (name: TokenName): Token | string => {
	let token = getToken(name)
	if (isColorToken(token)) {
		let { colorSpace, components, alpha = 1 } = token.$value
		return makeCSSColor(colorSpace, components, alpha)
	}
	return token
}