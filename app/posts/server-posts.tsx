import getQueryClient from '@/utils/getQueryClient'
import Hydrate from '@/utils/hydrate.client'
import { dehydrate } from '@tanstack/query-core'
import ClientPosts from './client-posts'
import { fetchPosts } from '@/hooks/usePosts'

export default async function Server() {
	const queryClient = getQueryClient()
	await queryClient.prefetchQuery(['posts'], fetchPosts)
	const dehydratedState = dehydrate(queryClient)

	return (
		<Hydrate state={dehydratedState}>
			<ClientPosts />
		</Hydrate>
	)
}
