import useMetadata from '@/hooks/useMetadata'

import GalleryTemplate from '@/templates/Gallery'

const title = 'Gallery'
const description = 'Gallery description TBD'
const keywords = 'Gallery Component'
const url = 'components/gallery'

export let metadata: any

export default function Gallery() {
	metadata = useMetadata({ title, description, keywords, url })
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
