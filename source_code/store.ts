import { isInternalReference } from "./util.reference-resolver.ts"
import { isToken } from "./util.token-validator.ts"

const store = new Map<TokenName, Token>()

export const getToken = (name: TokenName | string): Token | never => {
	if (store.has(name)) {
		return store.get(name) as Token
	} else throw new Error("Token not found")
}

export const hasToken = (name: TokenName | string): boolean => store.has(name)

export const setToken = (name: TokenName | string, input: any): void | never => {
	if (isInternalReference(input)) {
		let token: Token = getToken(input.slice(1, -1))
		store.set(name, token)
		return
	}

	if (isToken(input)) {
		let token: Token = {
			$type: input.$type,
			$value: input.$value,
		}
		if ('$description' in input) token.$description = input.$description
		if ('$metadata' in input) token.$metadata = input.$metadata
		store.set(name, token)
		return
	}

	throw new Error(`Failed setting: token '${name}' is ${JSON.stringify(input)}. See https://tr.designtokens.org/format/`)
}