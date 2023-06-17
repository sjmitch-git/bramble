'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Accordian from '@/components/accordian'

import Users from '@/data/users.json'

export default function Home() {
	const [open, setOpen] = useState('accordion-01')
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
			<h2>Accordian</h2>

			<Accordian data={Users} />
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
