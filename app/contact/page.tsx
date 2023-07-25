import useMetadata from '@/hooks/useMetadata'

import config from '@/app.config'

const title = 'Contact'
const description = 'Contact description TBD'
const keywords = 'Contact'
const url = 'contact'

export let metadata: any

export default function Contact() {
	metadata = useMetadata({ title, description, keywords, url })
	const { siteMetadata } = config
	const { name } = siteMetadata
	return (
		<>
			<h1>
				{title}
			</h1>
			<div className='prose mb-12'>
				<p>Page under construction</p>
			</div>
		</>
	)
}
