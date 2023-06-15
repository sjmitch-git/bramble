import getQueryClient from '@/utils/getQueryClient'
import Hydrate from '@/utils/hydrate.client'
import { dehydrate } from '@tanstack/query-core'
import Client from './client'
import { Post } from '@/types/post'

async function getPosts() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const posts = (await res.json()) as Post[]
	return posts
}

export default async function Hydation() {
	const queryClient = getQueryClient()
	await queryClient.prefetchQuery(['posts', 10], getPosts)
	// await queryClient.prefetchQuery(['posts', 10], () => getPosts)
	const dehydratedState = dehydrate(queryClient)

	return (
		<Hydrate state={dehydratedState}>
			<Client />
		</Hydrate>
	)
}
