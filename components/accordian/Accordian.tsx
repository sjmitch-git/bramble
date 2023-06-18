'use client'

import React, { useState, useEffect } from 'react'

import Button from '@/components/button'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid'

interface DataProps {
	id: string
	title: string
	body: string
}

interface AccordianProps {
	size?: string | 'sm' | 'lg' | undefined
	styles?: string | undefined
	onClick?: () => void | undefined
	data: DataProps[]
	opened?: string | undefined
}

const Accordian = ({ size = '', styles = '', data, opened }: AccordianProps) => {
	const [open, setOpen] = useState('')

	useEffect(() => {
		if (opened) setOpen(opened)
	}, [opened])

	return (
		<div className={`accordian ${size} ${styles}`}>
			{data?.map((item, _index) => (
				<div
					className='accordian-container'
					key={item.id}
				>
					<h3
						className={`accordion-header ${open === item.id && 'open'}`}
						onClick={() => setOpen(`${open === item.id ? '' : item.id}`)}
					>
						{item.title}

						<Button
							styles='bg-transparent text-primary circle icon !static text-3xl'
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

export default Accordian
