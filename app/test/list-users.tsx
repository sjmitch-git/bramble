'use client'

import { User } from '@/types/user'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

async function getUsers() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const users = (await res.json()) as User[]
	return users
}

export default function ListUsers() {
	const [count, setCount] = React.useState(0)

	const { data, isLoading, isFetching, error } = useQuery({
		queryKey: ['hydrate-users'],
		queryFn: () => getUsers(),
	})

	return (
		<div>
			{isLoading ? (
				<div>LOADING!</div>
			) : error ? (
				<div>ERROR!</div>
			) : (
				data && (
					<div className='grid grid-cols-4 gap-4'>
						{data.map((user) => (
							<div
								key={user.id}
								className='flex flex-col justify-center border'
							>
								<img
									src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
									alt={user.name}
								/>
								<h3 className='mx-4 text-sm'>{user.name}</h3>
							</div>
						))}
					</div>
				)
			)}
		</div>
	)
}
