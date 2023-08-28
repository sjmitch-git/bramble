'use client'

import Link from 'next/link'

import { FooterProps } from './types'

const Footerlinks = ({ footerLinks = [] }: FooterProps) => {
	return (
		<div className='footerlinks'>
			{footerLinks.map((link) => (
				<Link
					href={link.href}
					key={link.label}
				>
					{link.label}
				</Link>
			))}
		</div>
	)
}

export default Footerlinks
