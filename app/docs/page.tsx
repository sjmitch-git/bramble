import useMetadata from '@/hooks/useMetadata'

import DocsPage from '@/components/pages/docs'

const title = 'Docs'
const description = 'Docs description TBD'
const keywords = 'Docs'
const url = 'docs'

export let metadata: any

export default async function Docs() {
	metadata = useMetadata({ title, description, keywords, url })

	return (
		<>
			<h1>{title}</h1>

			<p>{description}</p>

			<DocsPage />
		</>
	)
}
