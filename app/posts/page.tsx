// import ky from 'ky-universal'

import getQueryClient from '@/utils/getQueryClient'
import Hydrate from '@/utils/hydrate.client'
import { dehydrate } from '@tanstack/query-core'
import ClientPosts from './client-posts'
import { Post } from '@/types/post'

/* async function fetchPosts(limit: number) {
	const parsed: Post[] = await ky('https://jsonplaceholder.typicode.com/posts').json()
	return parsed.filter((x: { id: number }) => x.id <= limit) as Post[]
} */

async function fetchPosts() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const users = (await res.json()) as Post[]
	return users
}

export default async function Hydration() {
	const queryClient = getQueryClient()
	await queryClient.prefetchQuery(['posts'], fetchPosts)
	const dehydratedState = dehydrate(queryClient)

	return (
		<Hydrate state={dehydratedState}>
			<ClientPosts />
		</Hydrate>
	)
}
