import merge from "deepmerge";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { setToken } from "./store.ts";
import { deref, isInternalReference } from "./util.reference-resolver.ts";
import { isObject, isToken } from "./util.token-validator.ts";

const props = ['$description', '$metadata', '$type', '$value']
type SourceContent = Record<string, number | object | string>

const parseSourceContent = async (input: SourceContent): Promise<SourceContent> => {
	let keys = Object.keys(input).sort()
	let result: SourceContent = {}
	for (let key of keys) {
		if (key === '$ref') {
			let data = await deref(input['$ref'])
			data = await parseSourceContent(JSON.parse(data))
			Object.assign(result, data)
		} else if (props.includes(key)) {
			result[key] = input[key]
		} else {
			let data = isObject(input[key]) ? await parseSourceContent(input[key]) : input[key]
			if (isObject(result[key]) && isObject(data)) {
				result[key] = merge(result[key], data)
			} else {
				result[key] = data
			}
		}
	}
	return Object.seal(result)
}

const retrieveDesignTokens = (source: SourceContent, parents: string[] = []): void | never => {
	let keys = Object.keys(source)
	for (let key of keys) {
		let path = [...parents, key]
		let value = source[key]
		if (isInternalReference(value) || isToken(value)) setToken(path.join('.'), value)
		if (isObject(value)) retrieveDesignTokens(value, path)
	}
}

export const importDesignTokens = async (specifier: TokensGroupName): Promise<void | never> => {
	let filepath = resolve(import.meta.dirname, '../assets', specifier + '.tokens')
	let content = readFileSync(filepath, {
		encoding: "utf8"
	})
	let source = await parseSourceContent(JSON.parse(content))
	retrieveDesignTokens(source)
}