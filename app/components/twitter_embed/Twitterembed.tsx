import useMetadata from '@/hooks/useMetadata'

import TwitterembedTemplate from '@/templates/Twitterembed'

const title = 'Twitter Embed'
const description = 'Twitter Embed description ...'
const keywords = 'Twitter Embed Component'
const url = 'components/twitter_embed'

export let metadata: any

export default function Twitterembed() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<TwitterembedTemplate />
			</div>
		</>
	)
}
