'use client'

import { useQuery } from '@apollo/client'

import { GET_DOC_PREV, PreviousDocResponse } from '@/graphql'

import { DocNavBarProps } from './types'

import Link from 'next/link'

import { PlayCircleIcon } from '@heroicons/react/24/solid'

export default function PrevLink({ index }: DocNavBarProps) {
	if (index === 0) return ''

	const { data } = useQuery<PreviousDocResponse>(GET_DOC_PREV, {
		variables: { index: index - 1 },
	})

	if (!data || !data.previousDoc.items[0]) return ''
	const { title, slug } = data.previousDoc.items[0]

	return (
		<Link
			href={slug}
			className='btn pill not-prose outline'
			title={title}
		>
			<PlayCircleIcon className='rotate-180' /> Prev
		</Link>
	)
}
