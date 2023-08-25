import useMetadata from '@/hooks/useMetadata'

import ButtonsTemplate from '@/templates/Buttons'

const title = 'Buttons'
const description =
	"Elevate user interactions with Bramble UI's versatile button components. Create engaging and interactive web interfaces for a modern user experience"
const keywords =
	'Bramble UI buttons, Versatile button components, User interaction enhancement, Engaging web interfaces, Modern user experience, Interactive UI elements, Web design flexibility, Bramble UI showcase, User-friendly web development, Button customization'
const url = 'ui/buttons'

export let metadata: any

export default function Buttons() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<ButtonsTemplate />
			</div>
		</>
	)
}
