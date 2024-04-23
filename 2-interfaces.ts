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
// rect2.id = '456798' не можна поміняти значення, бо тільки readonly

// вказувати до якого типу буде відноситися обєект
// 1 варіант, новий запис
const rect3 = {} as Rect
// 2 варіант, старий запис
const rect3 = <Rect>{}

// ================================== inheritance - наслідування

interface RectWithArea extends Rect {
	getArea: () => number
}

const rect5: RectWithArea = {
	id: '123',
	size: {
		width: 20,
		height: 20,
	},
	getArea(): number {
		return this.size.width * this.size.height
	},
}

// ================================== звязок з класами connection with classes, classes implements
interface IClock {
	time: Date
	setTime(date: Date): void
}

class Clock implements IClock {
	time: Date = new Date()
	setTime(date: Date): void {
		this.time = date
	}
}

// інтерфейс для обєкта в якого буде багато динамічних ключів
// interface for an object with dynamic keys
interface Styles {
	[key: string]: string
}

const css: Styles = {
	border: '1px solid black',
	marginTop: '2px',
	borderRadius: '5px',
}
