import useMetadata from '@/hooks/useMetadata'

import config from '@/app.config'

import { Card } from '@/components'

const title = 'Docs'
const description = 'Docs description TBD'
const keywords = 'Docs'
const url = 'docs'

export let metadata: any

export default async function Docs() {
	const data = await getDocs()
	metadata = useMetadata({ title, description, keywords, url })
	const { siteMetadata } = config
	const { name } = siteMetadata

	return (
		<>
			<h1>{title}</h1>

			<p>{description}</p>

			<div className='prose mb-12'>
				<p>Page under construction</p>
			</div>

			<div className='mb-12 grid gap-4 md:grid-cols-3 lg:grid-cols-4'>
				{data &&
					data.items
						.map((item: any) => (
							<Card
								title={item.fields.title}
								description={item.fields.description}
								link={`docs/${item.fields.slug}`}
								key={item.fields.title}
							/>
						))
						.reverse()}
			</div>
		</>
	)
}

async function getDocs() {
	const res = await fetch(
		`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=doc`
	)

	return res.json()
}
