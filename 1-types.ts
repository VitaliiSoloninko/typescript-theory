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
function sayMyName(name: string): void {
	console.log(name)
}
sayMyName('Schwerin')

// Never
// використовується коли функція вибиває помилку і ніколи не закінчується 1 варіант

function throwError(message: string): never {
	throw new Error(message)
}
// infinite нескінченний
// або коли функція завжди щось використовує 2 варіант
function infinite(): never {
	while (true) {}
}

// Type, own types, elias
type Login = string
const login: Login = 'admin'
// const login2: Login = 2

// можна вказати різні дані для одного типу
// наприклад логінможе бути строка або цифра
type ID = string | number
const id1: ID = 12345
const id2: ID = '12345'
// const id3: ID = true

// Null and Undefined використовуються нечасно
type SomeType = string | null | undefined
