'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query'
// import { Post } from '@/types/post'
import { fetchPosts } from '@/hooks/usePosts'

/* async function getPosts() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const posts = (await res.json()) as Post[]
	return posts
} */

export default function Client() {
	const [limit, setLimit] = React.useState(10)

	const { data, isLoading, error } = useQuery({
		queryKey: ['posts', limit],
		queryFn: () => fetchPosts(),
	})

	///const { data, isLoading, error } = useQuery.fetchPosts(limit)

	return (
		<div>
			{isLoading ? (
				<div>LOADING!</div>
			) : error ? (
				<div>ERROR!</div>
			) : (
				data && (
					<div className='grid grid-cols-4 gap-4'>
						<ul>
							{data?.map((post, index) => (
								<li key={post.id}>
									<div>
										<span>{index + 1}. </span>
										<a href='#'>{post.title}</a>
									</div>
								</li>
							))}
						</ul>
					</div>
				)
			)}
		</div>
	)
}
