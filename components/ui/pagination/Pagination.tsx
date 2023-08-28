'use client'

import React, { useState, useEffect } from 'react'

import { roundUp } from '@smitch/js-lib'

import {
	ChevronRightIcon,
	ChevronDoubleRightIcon,
	ChevronLeftIcon,
	ChevronDoubleLeftIcon,
} from '@heroicons/react/24/solid'

import { Buttongroup, Select, Button } from '@/ui'

import { PaginationProps } from './types'

export const Pagination = ({
	className = '',
	page,
	onChange,
	range,
	results,
	size,
	theme,
	feedback = true,
	vertical = false,
	icons = true,
	minimal = false,
}: PaginationProps) => {
	const [selectValue, setselectValue] = useState(page)

	useEffect(() => {
		setselectValue(page)
	}, [page])

	const totalPages = roundUp(results / range)

	const handleChange = (e: React.FormEvent<HTMLSelectElement>): void =>
		onChange(e.currentTarget.value)

	const handleOnClick = (page: string) => onChange(page)

	return (
		<nav
			className={`pagination ${className} ${theme}`}
			aria-label='pagination'
		>
			<Buttongroup
				size={size}
				className={`mb-2 items-center ${vertical ? 'vertical' : ''} ${
					minimal ? 'minimal' : ''
				}`}
			>
				<Button
					title='First Page'
					onClick={() => handleOnClick('1')}
					className={`btn link ${Number(selectValue) === 1 ? 'disabled' : ''} ${
						icons && 'rtl:rotate-180'
					}`}
				>
					{icons ? (
						<>
							<ChevronDoubleLeftIcon />
							<span className='sr-only'>First Page</span>
						</>
					) : (
						'First'
					)}
				</Button>

				<Button
					title='Previous Page'
					onClick={() => handleOnClick(`${Number(selectValue) - 1}`)}
					className={`btn link ${Number(selectValue) === 1 ? 'disabled' : ''} ${
						icons && 'rtl:rotate-180'
					}`}
				>
					{icons ? (
						<>
							<ChevronLeftIcon />
							<span className='sr-only'>Previous Page</span>
						</>
					) : (
						'Prev'
					)}
				</Button>

				<Select
					title='Select Page'
					className={`${size} border-none`}
					value={selectValue}
					onChange={handleChange}
					nocaret={true}
				>
					{[...new Array(totalPages)].map((el, index) => (
						<option
							key={index}
							value={(index + 1).toString()}
						>
							{index + 1}
						</option>
					))}
				</Select>

				<Button
					title='Next Page'
					onClick={() => handleOnClick(`${Number(selectValue) + 1}`)}
					className={`btn link ${Number(selectValue) === totalPages ? 'disabled' : ''} ${
						icons && 'rtl:rotate-180'
					}`}
				>
					{icons ? (
						<>
							<ChevronRightIcon />
							<span className='sr-only'>Next Page</span>
						</>
					) : (
						'Next'
					)}
				</Button>

				<Button
					title='Last Page'
					onClick={() => handleOnClick(totalPages.toString())}
					className={`btn link ${Number(selectValue) === totalPages ? 'disabled' : ''} ${
						icons && 'rtl:rotate-180'
					}`}
				>
					{icons ? (
						<>
							<ChevronDoubleRightIcon />
							<span className='sr-only'>Last Page</span>
						</>
					) : (
						'Last'
					)}
				</Button>
			</Buttongroup>
			{feedback && (
				<div className={`feedback ${size}`}>
					Page: {selectValue} of {totalPages}
				</div>
			)}
		</nav>
	)
}
