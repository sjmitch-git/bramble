'use client'

import { Metadata } from 'next'

import { useSearchParams } from 'next/navigation'

import PaginationTemplate from '@/templates/Pagination'

const title = 'Pagination'
const description = 'Pagination description TBD'

export const metadata: Metadata = {
	title: title,
	description: description,
}

export default function Pagination() {
	const searchParams = useSearchParams()
	const p = searchParams.get('p') || '1'

	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<PaginationTemplate page={p} />
			</div>
		</>
	)
}
