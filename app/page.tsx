'use client'

import Link from 'next/link'

import Ratings from '@/components/ratings'

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
			<h2>Ratings</h2>
			<div>
				<Ratings
					styles='text-xl'
					badge='text-warning'
					rating={3}
				/>
			</div>

			<div>
				<Ratings
					styles='text-2xl'
					badge='text-info'
					rating={2}
					icon='thumb'
				/>
			</div>

			<div>
				<Ratings
					styles='text-3xl'
					badge='text-warning'
					rating={4}
					icon='smiley'
				/>
			</div>

			<div>
				<Ratings
					styles='text-4xl'
					badge='text-danger'
					rating={4}
					icon='heart'
				/>
			</div>

			<div>
				<Ratings
					styles='text-6xl'
					badge='text-danger'
					rating={4}
					icon='heart'
				/>
			</div>
		</>
	)
}

/* export async function getServerSiseProps() {
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
 */
