export const isColorToken = (input: unknown): input is ColorToken => isToken(input) && isObject(input.$value) && input.$type === 'color'
export const isObject = (value: unknown): value is object & Record<number | string, any> => null !== value && 'object' === typeof value;
export const isToken = (input: unknown): input is Token => isObject(input) && '$type' in input && '$value' in input