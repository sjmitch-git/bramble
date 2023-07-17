import useMetadata from '@/hooks/useMetadata'

import NavbarTemplate from '@/templates/Navbar'

const title = 'Navbar'
const description = 'Navbar description TBD'
const keywords = 'Navbar Component'
const url = 'components/navbar'

export let metadata: any

export default function Navbar() {
	metadata = useMetadata({ title, description, keywords, url })
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
