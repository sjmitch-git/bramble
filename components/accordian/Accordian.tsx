'use client'

import React, { useState, useEffect } from 'react'

import { Button } from '@/components'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid'

interface DataProps {
	id: string
	title: string
	body: string
}

type AccordianProps = {
	size?: string | 'sm' | 'lg'
	className?: string
	onClick?: () => void | undefined
	data: DataProps[]
	opened?: string
	layout?: string | 'flush'
}

export const Accordian = ({
	size = '',
	className = '',
	data,
	opened,
	layout = '',
}: AccordianProps) => {
	const [open, setOpen] = useState('')

	useEffect(() => {
		if (opened) setOpen(opened)
	}, [opened])

	return (
		<div className={`accordian ${size} ${className}`} data-testid='accordian'>
			{data?.map((item, _index) => (
				<div
					className={`accordian-container ${layout}`}
					key={item.id}
				>
					<h3
						className={`accordion-header ${open === item.id && 'open'}`}
						onClick={() => setOpen(`${open === item.id ? '' : item.id}`)}
					>
						{item.title}

						<Button
							className='circle icon !static bg-light text-3xl text-primary'
							onClick={() => setOpen(`${open === item.id ? '' : item.id}`)}
						>
							{open === item.id ? <MinusIcon /> : <PlusIcon />}
						</Button>
					</h3>
					<section className='accordion-content'>
						<div dangerouslySetInnerHTML={{ __html: item.body }}></div>
					</section>
				</div>
			))}
		</div>
	)
}
