import useMetadata from '@/hooks/useMetadata'

import FooterTemplate from '@/templates/Footer'

const title = 'Footer'
const description =
	'The Footer component may contain authorship information, copyright information, contact information, sitemap, back to top links, related documents'
const keywords = 'Footer Component'
const url = 'components/footer'

export let metadata: any

export default function Footer() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<FooterTemplate />
			</div>
		</>
	)
}
