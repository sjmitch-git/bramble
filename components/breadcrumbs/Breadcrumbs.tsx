'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbsProps {
	size?: string | undefined
	styles?: string | undefined
}

const Breadcrumbs = ({ size = '', styles = '' }: BreadcrumbsProps) => {
	const homeLabel = 'Home'
	const pathname = usePathname()
	const paths = pathname.split('/')

	const buildHref = (path: string) => {
		let href = ''
		for (let i = 0; i < paths.length; i++) {
			if (i > 0) href = href + '/' + path
			if (paths[i] === path) break
		}
		return href
	}

	const displayPath = (path: string) => {
		return path.replaceAll('_', ' ')
	}

	if (paths.length === 2 && paths[paths.length - 1] === '') paths.length = paths.length - 1

	return (
		<nav
			className={`breadcrumbs ${size} ${styles}`}
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
							displayPath(path)
						) : (
							<Link href={buildHref(path)}>{displayPath(path)}</Link>
						)}
					</li>
				))}
			</ol>
		</nav>
	)
}

export default Breadcrumbs
