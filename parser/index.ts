import { ParserFunc, ParserValue } from "./types";

export class Parser {

    func: ParserFunc<string>;

    constructor(parserFunction: ParserFunc<string>) {
        this.func = parserFunction;
    }

    run(input: string): ParserValue {
        return this.func(input);
    }

    any(...parsers: [ParserFunc<string>]): ParserFunc<string> {
        return parsers.reduce(either);
    }
}

// TODO -move inside Parser class
const either = (p1: ParserFunc<string>, p2: ParserFunc<string>) => (input: string): ParserValue =>
    p1(input) || p2(input);
