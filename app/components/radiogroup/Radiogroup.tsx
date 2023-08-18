import useMetadata from '@/hooks/useMetadata'

import RadioGroupTemplate from '@/templates/Radiogroup'

const title = 'RadioGroup'
const description =
	"Examples and usage of the 'RadioGroup' component. Versions with labels, icons, or emojis."
const keywords = 'RadioGroup Component'
const url = 'components/radiogroup'

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
