'use client'

import { useEffect, useState } from 'react'

import { FooterProps } from './types'

const Copyright = ({ author, authorUrl }: FooterProps) => {
	const [year, setYear] = useState<number>()
	useEffect(() => {
		const d = new Date()
		setYear(d.getFullYear())
	}, [])

	return (
		<div className='copyright'>
			<p>
				Copyright © {year}
				{author && ':'}{' '}
				{author && authorUrl ? (
					<a
						href={authorUrl}
						rel='noopener'
						target='_blank'
					>
						{author}
					</a>
				) : author ? (
					`${author}`
				) : (
					''
				)}
			</p>
		</div>
	)
}

export default Copyright
