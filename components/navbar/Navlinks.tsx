'use client'

import Link from 'next/link'
import { useState } from 'react'

import config from '@/app.config'

import NavToggle from './Navtoggle'
import { Button } from '@/components'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

const Navlinks = () => {
	const { siteLinks } = config

	const [show, setShow] = useState('')
	const [navShow, setNavShow] = useState(false)

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
			setNavShow(false)
		}, 1000)
	}

	const toggleNav = () => {
		setNavShow(!navShow)
	}

	return (
		<nav className={`navlinks`}>
			<div className={`inner ${navShow && 'open'}`}>
				<ul>
					{siteLinks.map((link) => (
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
										className='xs link p-0'
										onClick={(e) => handleClick(e, link.label)}
										onBlur={(e) => handleBlur(e)}
										role='none'
									>
										{show === link.label ? (
											<ChevronUpIcon />
										) : (
											<ChevronDownIcon />
										)}
										<span className='sr-only'>Toggle Links</span>
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
														{sub.links.map((subsub) => (
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

			<NavToggle
				onClick={toggleNav}
				open={navShow}
			/>
		</nav>
	)
}

export default Navlinks
