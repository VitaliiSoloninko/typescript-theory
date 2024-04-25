// Guards - Охоронці
// допоміжні речі які дозволяють працювати з типами
// якщо х має різні значення, тоді різні операції

function strip(x: string | number) {
	if (typeof x === 'number') {
		return x.toFixed(2)
	}
	return x.trim()
}

// перевірка чи належить обект до якогось класу
// response відповідь
class MyResponse {
	header = 'response heder'
	result = 'response result'
}

class MyError {
	header = 'error heder'
	message = 'error message'
}

function handle(res: MyResponse | MyError) {
	if (res instanceof MyResponse) {
		return {
			info: res.header + res.result,
		}
	} else {
		return {
			info: res.header + res.message,
		}
	}
}

// =======================

// Alert - Попередження
type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
	//....
}

setAlertType('success')
setAlertType('danger')
setAlertType('warning')

// setAlertType('default') // not valid не працює , бо ми не вказати значення default
