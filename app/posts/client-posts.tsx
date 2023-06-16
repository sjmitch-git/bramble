'use client'

import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
// import ky from 'ky-universal'
import { Post } from '@/types/post'
// import { usePosts } from '@/hooks/usePosts'

/* async function fetchPosts(limit: number) {
	const parsed: Post[] = await ky('https://jsonplaceholder.typicode.com/posts').json()
	return parsed.filter((x: { id: number }) => x.id <= limit) as Post[]
} */

async function fetchPosts() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const users = (await res.json()) as Post[]
	return users
}

export default function ClientPosts() {
	const [limit, setLimit] = useState(10)

	// const { data, isLoading, error } = usePosts(limit)

	const { data, isLoading, error } = useQuery({
		queryKey: ['posts'],
		queryFn: () => fetchPosts(),
	})

	console.log(data)
	return (
		<>
			<h1>Posts</h1>
			<div>
				{isLoading ? (
					<div>LOADING!</div>
				) : error ? (
					<div>ERROR!</div>
				) : (
					data && (
						<div className='grid grid-cols-4 gap-4'>
							{data?.map((post, index) => (
								<div key={post.id}>
									<span>{index + 1}. </span>
									<a href='#'>{post.title}</a>
								</div>
							))}
						</div>
					)
				)}
			</div>
		</>
	)
}
