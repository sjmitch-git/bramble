import useMetadata from '@/hooks/useMetadata'

import config from '@/app.config'

const title = 'About'
const description = 'About description TBD'
const keywords = 'About'
const url = 'about'

export let metadata: any

export default function About() {
	metadata = useMetadata({ title, description, keywords, url })
	const { siteMetadata } = config
	const { name } = siteMetadata
	return (
		<>
			<h1>{title}</h1>
			<div className='prose mb-12'>
				<p>Page under construction</p>
			</div>
		</>
	)
}
