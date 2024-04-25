// Generic - загальний

const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfStrings: Array<string> = ['Hello', 'Vitalii']
// Array - object
// <number> - з чого складається

// масив може бути із чисел, рядків і змішані - тапос
// дані  буде функція, яка працює з різними типами даних

function reverse<T>(array: T[]): T[] {
	return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)
