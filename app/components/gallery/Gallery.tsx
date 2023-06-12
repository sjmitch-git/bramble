import { Metadata } from 'next'

import GalleryTemplate from '@/templates/Gallery'

const title = 'Gallery'
const description = 'Gallery description TBD'

export const metadata: Metadata = {
	title: title,
	description: description,
}

export default function Gallery() {
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<GalleryTemplate />
			</div>
		</>
	)
}
