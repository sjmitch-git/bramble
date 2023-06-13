'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

import { useFetch, FetchProps } from '@/hooks/usefetch'

interface DataProps {
	title: string
	id: string
}

export default function Home() {
	const [data, setData] = useState<any>()
	const [error, setError] = useState<any>()
	const [loading, setLoading] = useState<boolean>(false)

	const response: FetchProps = useFetch('https://jsonplaceholder.typicode.com/todos')

	useEffect(() => {
		if (response.loading) {
			setLoading(true)
			console.log('loading')
		} else if (response.error) {
			setLoading(false)
			setError(response.error)
			console.log('error', response)
		} else {
			setLoading(false)
			setError(null)
			setData(response.data)
			console.log('DATA', response.data)
		}
	})

	// if (!response.loading) console.log(response.data)

	return (
		<>
			<nav className='mb-8'>
				<ul>
					<li>
						<Link href='/components'>Components</Link>
					</li>
				</ul>
			</nav>

			{loading ? (
				<p>Loading!</p>
			) : error ? (
				<p className='text-error'>{response.error}</p>
			) : (
				data.map((item: DataProps) => {
					return <p key={item.id}>{item.title}</p>
				})
			)}
		</>
	)
}
