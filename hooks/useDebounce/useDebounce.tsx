import { useEffect } from 'react'
import useTimeout from '@/hooks/useTimeout'

export default function useDebounce(callback: any, delay: number, dependencies: any) {
	const [clear, reset] = useTimeout(callback, delay)

	useEffect(() => {
		reset
	}, [...dependencies, reset])

	useEffect(() => {
		clear
	}, [])
}

/* 
usage

const [count, setCount] = useState(0)
useDebounce(() => alert(count), 1000, [count])

<button onClick=({} => SetCount(c => c + 1))>Increment</button>

*/
