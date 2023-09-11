'use client'

import { Fragment } from 'react'
import Link from 'next/link'

import config from '@/app.config'

const UIPage = () => {
	const links = config.siteLinks[0].links

	return (
		<>
			<h2>Library</h2>

			<ul className='mb-12 grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
				{links &&
					links.map((link) => (
						<Fragment key={link.label}>
							<li
								className='flex'
								key={link.label}
							>
								<Link
									href={link.href}
									className='btn link w-full outline'
								>
									{link.label}
								</Link>
							</li>
							{link.links &&
								link.links.map((sub) => (
									<Fragment key={sub.label}>
										<li
											className='flex'
											key={sub.label}
										>
											<Link
												href={sub.href}
												className='btn link w-full outline'
											>
												{sub.label}
											</Link>
										</li>
									</Fragment>
								))}
						</Fragment>
					))}
			</ul>
		</>
	)
}

export default UIPage
