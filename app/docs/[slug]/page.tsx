import { getClient } from '@/lib/apollo/client'

import { GET_DOC_BY_SLUG, DocResponse } from '@/graphql'

import { Loading, Alert, Clock } from '@/ui'

import { Doc } from '@/features'

import useMetadata from '@/hooks/useMetadata'
import useSchemaMarkup from '@/hooks/useSchemaMarkup'

export let metadata: any

export default async function Post({ params }: { params: { slug: string } }) {
	const slugToQuery = params.slug
	const { loading, error, data } = await getClient().query<DocResponse>({
		query: GET_DOC_BY_SLUG,
		variables: { slug: slugToQuery },
	})

	const { title, description, body, keywords, slug, index } = data.docCollection.items[0]
	const url = slug

	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			{loading && (
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
						className='error w-full max-w-md'
						status='error'
						message={error.message}
					/>
				</div>
			)}

			<Doc
				title={title}
				description={description}
				body={body}
				keywords={keywords}
				slug={slug}
				index={index}
			/>

			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: useSchemaMarkup({ title, description, url }),
				}}
				key='jsonld'
			/>
		</>
	)
}
