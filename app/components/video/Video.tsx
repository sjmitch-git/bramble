import { Metadata } from 'next'

import VideoTemplate from '@/templates/Video'

const title = 'Video'
const description = 'Video description TBD'

export const metadata: Metadata = {
	title: title,
	description: description,
}

export default function Video() {
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<VideoTemplate />
			</div>
		</>
	)
}
