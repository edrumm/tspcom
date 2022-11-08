type JsonValue = null
    | number
    | string
    | boolean
    | JsonValue[]
    | {[key: string]: JsonValue};

function run(parser: Function, input: string): void {} // TODO: add return type

const parseChar = (): void => {}; // TODO: add return type

// something like this...
// run(parseChar, 'TypeScript') => ('ypeScript', 'T')