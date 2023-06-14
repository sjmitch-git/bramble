import { useState, useEffect, useRef } from 'react'

export type FetchProps = {
	status: Number
	statusText: String
	data: any
	error: any
	loading: Boolean
}

export const useFetch = (url: string): FetchProps => {
	const [status, setStatus] = useState<Number>(0)
	const [statusText, setStatusText] = useState<String>('')
	const [data, setData] = useState<any>()
	const [error, setError] = useState<any>()
	const [loading, setLoading] = useState<boolean>(false)

	const options = {
		method: 'GET',
	}

	const cache = useRef<any[]>()

	useEffect(() => {
		const fetchData = async () => {
			if (!url) return
			setLoading(true)
			try {
				const response = await fetch(url, options)
				const json = await response.json()
				//cache.current[url] = data
				setStatus(response.status)
				setStatusText(response.statusText)
				if (response.status === 404) setError('Error 404: Not found!')
				if (response.status === 200) console.log('200', response)
				console.log('response', response)
				setData(json)
			} catch (error) {
				console.log('error', error)
				setError(error)
			}
			setLoading(false)
		}
		fetchData()
	}, [url])

	return { status, statusText, data, error, loading }
}
