'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import config from '@/app.config'

interface BreadcrumbsProps {
	size?: string | undefined
	className?: string | undefined
}

export const Breadcrumbs = ({ size = '', className = '' }: BreadcrumbsProps) => {
	const { homeLabel } = config.labels

	const pathname = usePathname()
	const paths = pathname.split('/')

	const buildHref = (path: string) => {
		for (let i = 0; i < paths.length; i++) {
			if (i === paths.length - 1) break

			if (paths[1] === path) {
				return '/' + path
			} else if (paths[2] === path) {
				return '/' + paths[1] + '/' + path
			}
		}
		return ''
	}

	const displayPath = (path: string) => {
		return path.replaceAll('_', ' ')
	}

	if (paths.length === 2 && paths[paths.length - 1] === '') paths.length = paths.length - 1

	return pathname === '/' ? (
		<nav></nav>
	) : (
		<nav
			className={`breadcrumbs ${size} ${className}`}
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
