interface Person {
	name: string
	age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'

type User = {
	_id: number
	name: string
	email: string
	createdAt: Date
}

//  коли хочемо новий тип, який не буде включати всі поля попереднього
// 1 варіант запису Exclude - пишемо поля які треба прибрати
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'

// 2 варіант запису Pick навпаки вказуємо які поля ми хочемо, щоб залишилися
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'

let u1: UserKeysNoMeta1 = 'name'
// u1 = '_id' // error, бо ми виключили з UserKeysNoMeta 1 2 '_id' 'createdAt'
