'use client'

import Link from 'next/link'

interface FooterlinksProps {
	links: any[]
}

const Footerlinks = ({ links }: FooterlinksProps) => {
	return (
		<div className='footerlinks'>
			{links.map((link) => (
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
