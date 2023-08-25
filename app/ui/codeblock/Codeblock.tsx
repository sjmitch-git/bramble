import useMetadata from '@/hooks/useMetadata'

import CodeblockTemplate from '@/templates/Codeblock'

const title = 'Codeblock'
const description =
	"Display code snippets effectively with Bramble UI's codeblock component. Enhance code readability and create developer-friendly web interfaces"
const keywords =
	'Bramble UI codeblock, Display code snippets, Code readability enhancement, Developer-friendly interfaces, Web development resources, Modern UI components, User-friendly design, Bramble UI showcase, Interactive code presentation, Code snippet styling'
const url = 'ui/codeblock'

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
