'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbProps {
	size: string
}

const Breadcrumb = ({ size }: BreadcrumbProps) => {
	const homeLabel = 'Home'
	const pathname = usePathname()
	const paths = pathname.split('/')

	const buildHref = (path: string, index: number) => {
		let href = ''
		console.log(path, index, paths)
		for (let i = 0; i < paths.length; i++) {
			console.log(paths[i], href)
			if (i > 0) href = href + '/' + path
			console.log(href)
			if (paths[i] === path) break
		}
		return href
	}

	if (paths.length === 2 && paths[paths.length - 1] === '') paths.length = paths.length - 1

	return (
		<nav
			className={`breadcrumbs ${size}`}
			aria-label='breadcrumb'
		>
			<ol>
				{paths.map((path, index) => (
					<li
						key={index}
						className={index === paths.length - 1 ? 'active' : ''}
						aria-current={index === paths.length - 1 ? 'page' : false}
					>
						{index === 0 ? (
							paths.length === 1 ? (
								`${homeLabel}`
							) : (
								<Link href='/'>{homeLabel}</Link>
							)
						) : index === paths.length - 1 ? (
							path
						) : (
							<Link href={buildHref(path, index)}>{path}</Link>
						)}
					</li>
				))}
			</ol>
		</nav>
	)
}

export default Breadcrumb
