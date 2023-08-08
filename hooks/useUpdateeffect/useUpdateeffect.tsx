import { useEffect, useRef } from 'react'

export default function useUpdateeffect(callback: any, dependencies: any) {
	const firstRenderRef = useRef(true)

	useEffect(() => {
		if (firstRenderRef.current) {
			firstRenderRef.current = false
			return
		}
		return callback()
	}, dependencies)
}

/* 
usage

const [count, setCount] = useState(0)
useUpdateeffect(() => alert(count), [count])

<button onClick=({} => SetCount(c => c + 1))>Increment</button>

*/
