import { Metadata } from 'next'

import ButtongroupTemplate from '@/templates/Buttongroup'

const title = 'Button Group'
const description = 'Button Group description TBD'

export const metadata: Metadata = {
	title: title,
	description: description,
}

export default function Buttongroup() {
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
