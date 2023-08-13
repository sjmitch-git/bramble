import { useState } from 'react'

export default function useToggle(defaultValue: boolean) {
	const [value, setValue] = useState(defaultValue)

	function toggleValue(value: any) {
		setValue((currentValue) => (typeof value === 'boolean' ? value : !currentValue))
	}

	return [value, toggleValue]
}

/*
usage in component

const [value, toggleValue] = useToggle(false)

<button onClick=(toggleValue)>Toggle</button>

*/
