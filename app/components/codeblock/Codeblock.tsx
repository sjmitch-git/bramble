import { Metadata } from 'next'

import CodeblockTemplate from '@/templates/Codeblock'

const title = 'Codeblock'
const description = 'Codeblock description TBD'

export const metadata: Metadata = {
	title: title,
	description: description,
}

export default function Codeblock() {
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
