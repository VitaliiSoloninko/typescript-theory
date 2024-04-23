// після дужок ми вказуємо який тип данних має повертати функція
function add(a: number, b: number): number {
	return a + b
}

function toUpperCase(str: string): string {
	return str.trim().toUpperCase()
}

// функція з різними параметрами і різними значеннями
interface MyPosition {
	x: number | undefined
	y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
	default: string
}

function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition
