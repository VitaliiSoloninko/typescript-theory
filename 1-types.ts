const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello Typescript'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
// generic type generic - загальний
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['Hello', 'Typescript']

// Tuple - тапл масив з різних типів даних, кортеж
const contact: [string, number] = ['Vitalii', 123456789]

// Any - будь який, переназначення типів
let variable: any = 42
// ..
variable = []

// ===========
function sayMyName() {}
