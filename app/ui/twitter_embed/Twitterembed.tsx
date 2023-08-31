import useMetadata from '@/hooks/useMetadata'
import useSchemaMarkup from '@/hooks/useSchemaMarkup'

import TwitterembedTemplate from '@/templates/Twitterembed'

const title = 'Twitter Embed'
const description =
	"Integrate Twitter content seamlessly with Bramble UI's Twitter embed component. Enhance your web design with modern social media integrations."
const keywords =
	'Bramble UI Twitter embed, Seamless content integration, Modern social media integration, Web design enhancement, User-friendly interfaces, Social media integrations, Web development resources, Interactive UI elements, Bramble UI showcase, Engaging web experiences'
const url = 'ui/twitter_embed'

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
