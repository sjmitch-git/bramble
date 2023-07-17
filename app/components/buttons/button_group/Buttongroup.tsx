import useMetadata from '@/hooks/useMetadata'

import ButtongroupTemplate from '@/templates/Buttongroup'

const title = 'Button Group'
const description = 'Button Group description TBD'
const keywords = 'Button Group Component'
const url = 'components/buttons/button_group'

export let metadata: any

export default function Buttongroup() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<ButtongroupTemplate />
			</div>
		</>
	)
}
