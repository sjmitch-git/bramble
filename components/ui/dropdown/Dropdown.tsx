'use client'

import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/ui'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

import { DropdownProps, LinksProps } from './types'

export const Dropdown = ({
	size = '',
	className = '',
	links,
	button = 'xs link p-0',
}: DropdownProps) => {
	const [show, setShow] = useState('')

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>, label: string) => {
		e.preventDefault()
		e.stopPropagation()
		label === show ? setShow('') : setShow(label)
	}

	const handleBlur = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		closeNav()
	}

	const closeNav = () => {
		setTimeout(() => {
			setShow('')
		}, 1000)
	}

	return (
		<div className={`dropdown ${className} ${size}`}>
			<ul>
				{links.map((link) => (
					<li
						key={link.label}
						className={`${show === link.label ? 'show' : ''}`}
					>
						<Link
							href={link.href}
							onClick={closeNav}
							className='dropdown-link nobase'
						>
							{link.label}{' '}
							{link.links && (
								<Button
									className={`menu_btn ${button}`}
									onClick={(e) => handleClick(e, link.label)}
									onBlur={(e) => handleBlur(e)}
									title='Dropdown Menu'
								>
									{show === link.label ? <ChevronUpIcon /> : <ChevronDownIcon />}
									<span className='sr-only'>Toggle dropdown menu</span>
								</Button>
							)}
						</Link>
						{link.links && (
							<div className='relative top-2 w-full'>
								<div className='wrap'>
									<ul>
										{link.links.map((sub) => (
											<li key={sub.label}>
												<Link
													href={sub.href}
													key={sub.label}
													className='nobase text-dark hover:text-light'
												>
													{sub.label}
												</Link>

												{sub.links && (
													<ul>
														{sub.links.map((subsub: LinksProps) => (
															<li key={subsub.label}>
																<Link
																	href={subsub.href}
																	className='nobase text-dark hover:text-light'
																>
																	{subsub.label}
																</Link>
															</li>
														))}
													</ul>
												)}
											</li>
										))}
									</ul>
								</div>
							</div>
						)}
					</li>
				))}
			</ul>
		</div>
	)
}
