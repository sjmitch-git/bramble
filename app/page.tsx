'use client'

import Link from 'next/link'

import { dehydrate, QueryClient } from '@tanstack/react-query'
import PostList from '@/components/postlist'
import { fetchPosts } from '@/hooks/usePosts'

export default function Home() {
	return (
		<>
			<nav className='mb-8'>
				<ul>
					<li>
						<Link href='/components'>Components</Link>
					</li>
					<li>
						<Link href='/posts'>Posts</Link>
					</li>
					<li>
						<p>
							<Link href='/hydration'>Prefetching Using Hydration</Link>
						</p>
					</li>
				</ul>
			</nav>

			<div>
				<PostList />
			</div>
		</>
	)
}

export async function getServerSiseProps() {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery({
		queryKey: ['posts', 10],
		queryFn: () => fetchPosts(10),
	})

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	}
}
