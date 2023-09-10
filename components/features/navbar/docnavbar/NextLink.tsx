'use client'

import { useQuery } from '@apollo/client'

import { GET_DOC_NEXT, NextDocResponse } from '@/graphql'

import { DocNavBarProps } from './types'

import Link from 'next/link'

import { PlayCircleIcon } from '@heroicons/react/24/solid'

export default function NextLink({ index }: DocNavBarProps) {
	const { data } = useQuery<NextDocResponse>(GET_DOC_NEXT, {
		variables: { index: index + 1 },
	})

	if (!data || !data.nextDoc.items[0]) return ''
	const { title, slug } = data.nextDoc.items[0]

	return (
		<Link
			href={slug}
			className='btn pill not-prose ms-auto outline'
			title={title}
		>
			Next <PlayCircleIcon />
		</Link>
	)
}
