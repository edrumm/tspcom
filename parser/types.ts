export type ParserValue = {
    result: string,
    remainder: string
} | null;

export type ParserFunc<T> = (input: T) => ParserValue;