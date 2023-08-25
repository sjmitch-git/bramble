import useMetadata from '@/hooks/useMetadata'

import PaginationTemplate from '@/templates/Pagination'

const title = 'Pagination'
const description =
	'Implement seamless pagination with Bramble UI\'s pagination component. Create user-friendly web interfaces and navigate through content effortlessly.'
const keywords = 'Bramble UI pagination component, Seamless pagination, User-friendly web interfaces, Content navigation, Web design enhancement, Efficient user interactions, Web development resources, Interactive UI elements, Bramble UI showcase, Content organization'
const url = 'ui/pagination'

export let metadata: any

export default function Pagination() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<PaginationTemplate />
			</div>
		</>
	)
}
