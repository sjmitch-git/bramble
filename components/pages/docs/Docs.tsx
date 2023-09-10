'use client'

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'

import { GET_ALL_DOCS, AllDocsResponse } from '@/graphql'

import { BlogList } from '@/features'
import { Loading, Alert, Clock } from '@/ui'

export default function DocsPage() {
	const { error, data } = useSuspenseQuery<AllDocsResponse>(GET_ALL_DOCS)
	const entries = data?.docCollection?.items || []

	return (
		<>
			{!error && !data && (
				<div className='mb-12 flex items-center justify-center'>
					<Loading
						className='w-32 text-xl text-info'
						caption='Fetching'
						spinner={<Clock />}
					/>
				</div>
			)}

			{error && (
				<div className='mb-12 flex items-center justify-center'>
					<Alert
						className='error w-full max-w-lg'
						status='error'
						message={error.message}
					/>
				</div>
			)}

			<BlogList items={entries} />
		</>
	)
}
