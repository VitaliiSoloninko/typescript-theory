// Interfaces
// поля які мають бути в обєкті може бути вкладеність обектів
//  readonly - для читання, ? не обовязкове поле

interface Rect {
	readonly id: string
	color?: string
	size: {
		width: number
		height: number
	}
}

const rect1: Rect = {
	id: '1234',
	size: {
		width: 20,
		height: 30,
	},
	color: '#ccc',
}

const rect2: Rect = {
	id: '12345',
	size: {
		width: 10,
		height: 5,
	},
}

rect2.color = 'black'

// вказувати до якого типу буде відноситися обєект
// 1 варіант, новий запис
const rect3 = {} as Rect
// 2 варіант, старий запис
const rect3 = <Rect>{}

// ==================================
