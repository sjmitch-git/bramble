'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import ky from 'ky-universal'
import { Post } from '@/types/post'
// import { usePosts } from '@/hooks/usePosts'

async function fetchPosts(limit: number) {
	const parsed: Post[] = await ky('https://jsonplaceholder.typicode.com/posts').json()
	return parsed.filter((x: { id: number }) => x.id <= limit) as Post[]
}

export default function ClientPosts() {
	const [limit, setLimit] = React.useState(10)

	// const { data, isLoading, error } = usePosts(limit)

	const { data, isLoading, error } = useQuery({
		queryKey: ['posts', limit],
		queryFn: () => fetchPosts(limit),
	})

	console.log(data)
	return (
		<>
			{
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
			}
		</>
	)
}
