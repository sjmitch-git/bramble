import { Metadata } from 'next'

import VideoPlayerTemplate from '@/templates/Videoplayer'

const title = 'Video Player'
const description = 'Video Player with custom controls'

export const metadata: Metadata = {
	title: title,
	description: description,
}

export default function Videoplayer() {
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<VideoPlayerTemplate />
			</div>
		</>
	)
}
