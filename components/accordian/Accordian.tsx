'use client'

import React, { useState } from 'react'

import Button from '@/components/button'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid'

interface DataProps {
	id: string
	title: string
	body: string
}

interface AccordianProps {
	styles?: string | undefined
	onClick?: () => void | undefined
	data: DataProps[]
}

const Accordian = ({ styles = '', data }: AccordianProps) => {
	const [open, setOpen] = useState('')
	return (
		<div className={`accordian ${styles}`}>
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
						<p className='mb-0'>{[item.body]}</p>
					</section>
				</div>
			))}
		</div>
	)
}

export default Accordian
