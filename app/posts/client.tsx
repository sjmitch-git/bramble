'use client'

import React from 'react'

import { usePosts } from '@/hooks/usePosts'

export default function Client() {
	const [limit, setLimit] = React.useState(10)

	const { data, isLoading, error } = usePosts(limit)

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
