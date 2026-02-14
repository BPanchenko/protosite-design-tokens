import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const INTERNAL_REF = /^{(?:\w+)(?:.\w+)+}$/;

const isInternalReference = (input: unknown): boolean => typeof input === 'string' && INTERNAL_REF.test(input)

const isSpecifierOrPath = (input: string): boolean => {
	if (input.startsWith('file:') || input.startsWith('node:') || input.includes('://')) {
		return false;
	}
	return true;
}

const isURL = (input: string): boolean => {
	try {
		const url = new URL(input);
		return url.protocol.includes(':');
	} catch (error) {
		return false;
	}
}

export { deref, isInternalReference };

async function deref(reference: any): Promise<any | never> {
	if (isSpecifierOrPath(reference)) {
		if (reference.startsWith('.')) {
			reference = fileURLToPath(import.meta.resolve('../assets/' + reference))
		} else {
			reference = fileURLToPath(import.meta.resolve(reference))
		}
		if (path.isAbsolute(reference)) {
			return await readFile(reference, { encoding: 'utf8' })
		}
	}

	if (isURL(reference)) {
		return await fetch(reference).then(response => response.json())
	}

	throw new Error('Wrong Reference: ' + reference.toString())
}