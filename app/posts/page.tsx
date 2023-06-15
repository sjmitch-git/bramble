import ky from 'ky-universal'

import getQueryClient from '@/utils/getQueryClient'
import Hydrate from '@/utils/hydrate.client'
import { dehydrate } from '@tanstack/query-core'
import Client from './client'

const limit = 10

async function fetchPosts() {
	const parsed: any[] = await ky('https://jsonplaceholder.typicode.com/posts').json()
	return parsed.filter((x: { id: number }) => x.id <= limit)
}

export default async function Hydation() {
	const queryClient = getQueryClient()
	await queryClient.prefetchQuery(['posts', 10], fetchPosts)
	const dehydratedState = dehydrate(queryClient)

	/*     const queryClient = getQueryClient()
	await queryClient.prefetchQuery(['hydrate-users'], getUsers)
	const dehydratedState = dehydrate(queryClient) */

	return (
		<Hydrate state={dehydratedState}>
			<Client />
		</Hydrate>
	)
}

/*
async function getUsers() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const users = (await res.json()) as User[]
	return users
}

export default async function Hydation() {
	const queryClient = getQueryClient()
	await queryClient.prefetchQuery(['hydrate-users'], getUsers)
	const dehydratedState = dehydrate(queryClient)

	return (
		<Hydrate state={dehydratedState}>
			<h1>TESTING</h1>
			<ListUsers />
		</Hydrate>
	)
}
*/
