// створюються так само як ES6 класи
// можна вказувати поля

class Typesctipt {
	version: string

	constructor(version: string) {
		this.version = version // записали в приватну змінну version
	}

	info(name: string) {
		return `[${name}]: Typescript version is ${this.version}`
	}
}

// найкраща послідовність поля, конструктор, методи
// ====== 1 варіант запису - більший
// class Car {
// 	readonly model: string
// 	readonly numberOfWheels: number = 4

// 	constructor(theModel: string) {
// 		this.model = theModel
// 	}
// }
// ======= 2 варіант запису - лаконічний
class Car {
	readonly numberOfWheels: number = 4
	constructor(readonly model: string) {}
}

// ======================= modifiers, protected, private, public
// якщо не пишемо модифікатор, то по замовчуванню він public
// protected може бути в класі Animal і в класах, що наслідуються subclasses
// private - тільки в класі, де оголошені

class Animal {
	protected voice: string = ''
	public color: string = 'black'

	constructor() {
		this.go()
	}

	private go() {
		console.log('Go')
	}
}

class Cat extends Animal {
	public setVoice(voice: string): void {
		this.voice = voice
		// this.go() - error, go is private
	}
}

const cat = new Cat()
cat.setVoice('test')
console.log(cat.color)
// cat.voice - error, voice is protected and cat isn't subclasses Animal

// ============ abstract classes - вони ні в що не компілюються, але потрібні, щоб від них наслідуватися

abstract class Component {
	abstract render(): void // void нічого не повертає
	abstract info(): string // string повертає рядок
}

class AppComponent extends Component {
	render(): void {
		console.log('Component on render')
	}
	info(): string {
		return 'This is info'
	}
}
