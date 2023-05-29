import { Metadata } from 'next'

/* interface metadataProps {
	title: string
} */

const title = 'some title'

export const metadata: Metadata = {
	title: title,
}

export default function Breadcrumbs() {
	//const { title } = metadata
	//console.log('metadata', title)
	return (
		<>
			<h1>{title}</h1>
		</>
	)
}
