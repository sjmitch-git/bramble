'use client'

import useMetadata from '@/hooks/useMetadata'

import PaginationTemplate from '@/templates/Pagination'

const title = 'Pagination'
const description = 'Pagination description TBD'
const keywords = 'Pagination Component'
const url = 'components/pagination'

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
