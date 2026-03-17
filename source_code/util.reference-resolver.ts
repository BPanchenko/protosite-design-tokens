import { readFile } from "node:fs/promises";
import { isAbsolute } from "node:path";
import { fileURLToPath } from "node:url";

const INTERNAL_REF = /^{(?:\w+)(?:.\w+)+}$/;

export const deref = async (reference: any): Promise<any | never> => {
	if (isSpecifierOrPath(reference)) {
		if (reference.startsWith('.')) {
			reference = import.meta.resolve('../assets/' + reference)
		} else {
			reference = import.meta.resolve(reference)
		}
		if (isURL(reference)) {
			reference = fileURLToPath(reference)
		}
		if (isAbsolute(reference)) {
			return await readFile(reference, { encoding: 'utf8' })
		}
	}

	if (isURL(reference)) {
		return await fetch(reference).then(response => response.json())
	}

	throw new Error('Wrong Reference: ' + reference.toString())
}

export const isInternalReference = (input: unknown): boolean => typeof input === 'string' && INTERNAL_REF.test(input)

const isSpecifierOrPath = (input: string): boolean =>
	(false === (input.startsWith('file:') || input.startsWith('node:') || input.endsWith('://')));

const isURL = (input: string): boolean => {
	try {
		let { protocol } = new URL(input);
		return protocol.startsWith('file:') || protocol.startsWith('node:') || protocol.endsWith('://');
	} catch (error) {
		return false;
	}
}