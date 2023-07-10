'use client'

import Link from 'next/link'
import { useState } from 'react'

import Button from '@/components/button'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

interface LinksProps {
	href: string
	label: string
	links?: any[]
}

interface DropdownProps {
	size?: string | undefined
	className?: string | undefined
	links: LinksProps[]
	button?: string | undefined
}

const Dropdown = ({ size = '', className = '', links, button = '' }: DropdownProps) => {
	console.log(links)
	const [show, setShow] = useState('Components')

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
						>
							{link.label}{' '}
							{link.links && (
								<Button
									styles={`circle icon ml-4 ${button}`}
									onClick={(e) => handleClick(e, link.label)}
									onBlur={(e) => handleBlur(e)}
								>
									{show === link.label ? <ChevronUpIcon /> : <ChevronDownIcon />}
								</Button>
							)}
						</Link>
						{link.links && (
							<div className='wrap'>
								<ul>
									{link.links.map((sub) => (
										<li key={sub.label}>
											<Link
												href={sub.href}
												key={sub.label}
											>
												{sub.label}
											</Link>

											{sub.links && (
												<ul>
													{sub.links.map((subsub: LinksProps) => (
														<li key={subsub.label}>
															<Link href={subsub.href}>
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
						)}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Dropdown
