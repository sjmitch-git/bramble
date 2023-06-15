'use client'

import { Metadata } from 'next'

import PaginationTemplate from '@/templates/Pagination'

const title = 'Pagination'
const description = 'Pagination description TBD'

export const metadata: Metadata = {
	title: title,
	description: description,
}

export default function Pagination() {
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
