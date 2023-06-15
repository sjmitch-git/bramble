import ky from 'ky-universal'

import getQueryClient from '@/utils/getQueryClient'
import Hydrate from '@/utils/hydrate.client'
import { dehydrate } from '@tanstack/query-core'
import ClientPosts from './client-posts'

async function fetchPosts(limit: number) {
	const parsed: any[] = await ky('https://jsonplaceholder.typicode.com/posts').json()
	return parsed.filter((x: { id: number }) => x.id <= limit)
}

export default async function Hydration() {
	const queryClient = getQueryClient()
	await queryClient.prefetchQuery(['posts', 10], () => fetchPosts(10))
	const dehydratedState = dehydrate(queryClient)

	return (
		<Hydrate state={dehydratedState}>
			<ClientPosts />
		</Hydrate>
	)
}
