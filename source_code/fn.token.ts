import { getToken } from "./store.ts"
import { isColorToken } from "./util.token-validator.ts"

export const token = (name: TokenName): Token | string => {
	let token = getToken(name)
	if (isColorToken(token)) {
		return `${token.$value.colorSpace}(${token.$value.components.join(' ')} / ${token.$value.alpha || 1})`
	}
	return token
}