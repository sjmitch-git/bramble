import { useState } from 'react'

export default function useArray(defaultValue: any[]) {
	const [array, setArray] = useState(defaultValue)

	function push(element: any) {
		setArray((a) => [...a, element])
	}

	function filter(callback: any) {
		setArray((a) => a.filter(callback))
	}

	function update(index: number, newElement: any) {
		setArray((a) => [...a.slice(0, index), newElement, ...a.slice(index + 1, a.length - 1)])
	}

	function remove(index: number) {
		setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length - 1)])
	}

	function clear() {
		setArray([])
	}

	return { array, set: setArray, push, filter, update, remove, clear }
}

/*
const {array, set, push, filter, update, remove, clear} = useArray([
    1, 2, 3, 4, 5, 6,
])

push(7) add 7 to end of array
update(1, 9) change second element to 9
remove(1) remove second element
filter(a => a < 3) numbers less than 4
set([1,2]) set to [1, 2]
clear

*/
