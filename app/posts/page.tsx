// import ky from 'ky-universal'

import getQueryClient from '@/utils/getQueryClient'
import Hydrate from '@/utils/hydrate.client'
import { dehydrate } from '@tanstack/query-core'
import Client from './client'
import { Post } from '@/types/post'

/* async function fetchPosts(limit: number) {
	const parsed: any[] = await ky('https://jsonplaceholder.typicode.com/posts').json()
	return parsed.filter((x: { id: number }) => x.id <= limit)
} */

async function fetchPosts() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const users = (await res.json()) as Post[]
	return users
}

export default async function Hydration() {
	const queryClient = getQueryClient()
	// await queryClient.prefetchQuery(['posts', 10], () => fetchPosts(10))
	await queryClient.prefetchQuery(['posts', 10], fetchPosts)
	const dehydratedState = dehydrate(queryClient)

	return (
		<Hydrate state={dehydratedState}>
			<Client />
		</Hydrate>
	)
}
