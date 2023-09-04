import { gql } from '@apollo/client'
import { getClient } from '@/lib/apollo/client'
import useMetadata from '@/hooks/useMetadata'



import config from '@/app.config'

import { Card } from '@/ui'

const title = 'Docs'
const description = 'Docs description TBD'
const keywords = 'Docs'
const url = 'docs'

export let metadata: any

const query = gql`
	query {
		docCollection {
			items {
				title
				slug
				description
				keywords
			}
		}
	}
`


export default async function Docs() {
	const { loading, error, data } = await getClient().query({ query })
	const { siteMetadata } = config
	const { name } = siteMetadata

	if (loading) {
		return <p>Loading...</p>
	}

	if (error) {
		return <p>Error: {error.message}</p>
	}

	const entries = data.docCollection.items

	return (
		<>
			<h1>{title}</h1>

			<p>{description}</p>

			<div className='prose mb-12'>
				<p>Page under construction</p>
			</div>

			<div className='mb-12 grid gap-4 md:grid-cols-3 lg:grid-cols-4'>
				{entries &&
					entries
						.map((item: any) => (
							<Card
								title={item.title}
								description={item.description}
								link={`docs/${item.slug}`}
								key={item.title}
							/>
						))
						.reverse()}
			</div>
		</>
	)
}

/* async function getDocs() {
	const res = await fetch(
		`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=doc`
	)

	return res.json()
} */
