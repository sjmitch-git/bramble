import useMetadata from '@/hooks/useMetadata'

import RadioGroupTemplate from '@/templates/Radiogroup'

const title = 'Radio Group'
const description =
	"Streamline options selection with Bramble UI's radiogroup component. Create efficient and user-friendly web interfaces with modern radio button functionality."
const keywords =
	'Bramble UI radiogroup component, Options selection streamlining, User-friendly web interfaces, Modern radio button functionality, Web form optimization, Web development resources, Interactive UI elements, Bramble UI showcase, Efficient user interactions, Web design enhancement'
const url = 'ui/radiogroup'

export let metadata: any

export default function RadioGroup() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<RadioGroupTemplate />
			</div>
		</>
	)
}
