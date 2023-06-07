'use client'

import React, { useState, useEffect } from 'react'

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { roundUp } from '@smitch/js-lib'

import {
	ChevronRightIcon,
	ChevronDoubleRightIcon,
	ChevronLeftIcon,
	ChevronDoubleLeftIcon,
} from '@heroicons/react/24/solid'

import Buttongroup from '@/components/buttongroup'
import Select from '@/components/select'

interface PaginationProps {
	size?: string
	theme?: 'dark' | 'light' | undefined
	page: string
	range: number
	results: number
}

const Pagination = ({ page, range, results, size, theme }: PaginationProps) => {
	const [selectValue, setselectValue] = useState(page)
	const router = useRouter()
	const searchParams = useSearchParams()
	let params = searchParams.toString()

	useEffect(() => {
		setselectValue(page)
	}, [page])

	const pathname = usePathname()

	const totalPages = roundUp(results / range)

	const buildParams = (p: string) => {
		return !params
			? `p=${p}`
			: searchParams.has('p')
			? params.replace(`p=${page}`, `p=${p}`)
			: `${params}&p=${p}`
	}

	const handleChange = (e: React.FormEvent<HTMLSelectElement>): void => {
		let p = e.currentTarget.value
		router.push(`${pathname}?${buildParams(p)}`)
	}

	return (
		<nav
			className={`pagination ${theme}`}
			aria-label='...'
		>
			<Buttongroup
				size={size}
				styles='mb-2'
			>
				<Link
					href={`${pathname}?${buildParams('1')}`}
					className={`btn link !gap-0 ${Number(selectValue) === 1 ? 'disabled' : ''}`}
					title='First Page'
				>
					|<ChevronLeftIcon className='-ms-[0.55em]' />
				</Link>
				<Link
					href={`${pathname}?${buildParams(`${Number(selectValue) - 1}`)}`}
					className={`btn link ${Number(selectValue) === 1 ? 'disabled' : ''}`}
					title='Previous Page'
				>
					<ChevronDoubleLeftIcon />
				</Link>
				<Select
					title='Select Page'
					styles={`${size}`}
					value={selectValue}
					onChange={handleChange}
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
				<Link
					href={`${pathname}?${buildParams(`${Number(selectValue) + 1}`)}`}
					title='Next Page'
					className={`btn link ${Number(selectValue) === totalPages ? 'disabled' : ''}`}
				>
					<ChevronDoubleRightIcon />
				</Link>
				<Link
					href={`${pathname}?${buildParams(`${totalPages}`)}`}
					title='Last Page'
					className={`btn link !gap-0 ${
						Number(selectValue) === totalPages ? 'disabled' : ''
					}`}
				>
					<ChevronRightIcon className='-me-[0.4em]' />|
				</Link>
			</Buttongroup>
			<div className={`text-${size}`}>
				Page: {selectValue} of {totalPages}
			</div>
		</nav>
	)
}

export default Pagination
