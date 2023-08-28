'use client'

import React, { useState, useEffect } from 'react'

import { AccordionProps } from './types'

import { Button } from '@/ui'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid'

export const Accordion = ({ size, className = '', data, opened, layout }: AccordionProps) => {
	const [open, setOpen] = useState('')

	useEffect(() => {
		if (opened) setOpen(opened)
	}, [opened])

	return (
		<div
			className={`accordion ${size ? size : ''} ${className}`}
			data-testid='accordion'
		>
			{data?.map((item, _index) => (
				<div
					className={`accordion-container ${layout ? layout : ''}`}
					key={item.id}
				>
					<h3
						className={`accordion-header ${open === item.id ? 'open' : ''}`}
						onClick={() => setOpen(`${open === item.id ? '' : item.id}`)}
					>
						{item.title}

						<Button
							className='circle icon !static bg-light text-3xl text-primary'
							onClick={() => setOpen(`${open === item.id ? '' : item.id}`)}
						>
							{open === item.id ? <MinusIcon /> : <PlusIcon />}
							<span className='sr-only'>Toggle section</span>
						</Button>
					</h3>
					<section
						className='accordion-content'
						role='section'
					>
						<div dangerouslySetInnerHTML={{ __html: item.body }}></div>
					</section>
				</div>
			))}
		</div>
	)
}
