import { Metadata } from 'next'

import NavbarTemplate from '@/templates/Navbar'

const title = 'Navbar'
const description = 'Navbar description TBD'

export const metadata: Metadata = {
	title: title,
	description: description,
}

export default function Navbar() {
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<NavbarTemplate />
			</div>
		</>
	)
}
