import useMetadata from '@/hooks/useMetadata'

import CodeblockTemplate from '@/templates/Codeblock'

const title = 'Codeblock'
const description = 'Codeblock description TBD'
const keywords = 'Codeblock Component'
const url = 'components/codeblock'

export let metadata: any

export default function Codeblock() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<CodeblockTemplate />
			</div>
		</>
	)
}
