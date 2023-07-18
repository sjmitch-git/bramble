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
	className?: string | undefined
	size?: string
	theme?: 'dark' | 'light' | undefined
	range: number
	results: number
	feedback?: boolean
	vertical?: boolean
	icons?: boolean
	minimal?: boolean
}

const Pagination = ({
	className = '',
	range,
	results,
	size,
	theme,
	feedback = true,
	vertical = false,
	icons = false,
	minimal = false,
}: PaginationProps) => {
	const [selectValue, setselectValue] = useState('')
	const router = useRouter()
	const searchParams = useSearchParams()
	let params = searchParams.toString()

	useEffect(() => {
		setselectValue(searchParams.get('page') || '1')
	}, [searchParams])

	const pathname = usePathname()

	const totalPages = roundUp(results / range)

	const buildParams = (p: string) => {
		return !params
			? `page=${p}`
			: searchParams.has('page')
			? params.replace(`page=${selectValue}`, `page=${p}`)
			: `${params}&page=${p}`
	}

	const handleChange = (e: React.FormEvent<HTMLSelectElement>): void => {
		router.push(`${pathname}?${buildParams(e.currentTarget.value)}`)
	}

	return (
		<nav
			className={`pagination ${className} ${theme}`}
			aria-label='...'
		>
			<Buttongroup
				size={size}
				className={`mb-2 ${vertical && 'vertical'} ${minimal && 'minimal'}`}
			>
				<Link
					href={`${pathname}?${buildParams('1')}`}
					className={`btn link ${Number(selectValue) === 1 && 'disabled'} ${
						icons && 'rtl:rotate-180'
					}`}
					title='First Page'
				>
					{icons ? <ChevronDoubleLeftIcon /> : 'First'}
				</Link>
				<Link
					href={`${pathname}?${buildParams(`${Number(selectValue) - 1}`)}`}
					className={`btn link ${Number(selectValue) === 1 && 'disabled'} ${
						icons && 'rtl:rotate-180'
					}`}
					title='Previous Page'
				>
					{icons ? <ChevronLeftIcon /> : 'Prev'}
				</Link>
				<Select
					title='Select Page'
					className={`${size}`}
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
					className={`btn link ${Number(selectValue) === totalPages && 'disabled'} ${
						icons && 'rtl:rotate-180'
					}`}
				>
					{icons ? <ChevronRightIcon /> : 'Next'}
				</Link>
				<Link
					href={`${pathname}?${buildParams(`${totalPages}`)}`}
					title='Last Page'
					className={`btn link ${Number(selectValue) === totalPages && 'disabled'} ${
						icons && 'rtl:rotate-180'
					}`}
				>
					{icons ? <ChevronDoubleRightIcon /> : 'Last'}
				</Link>
			</Buttongroup>
			{feedback && (
				<div className={`feedback ${size}`}>
					Page: {selectValue} of {totalPages}
				</div>
			)}
		</nav>
	)
}

export default Pagination
