import Link from 'next/link'
import Image from 'next/image'

import config from '@/app.config'

interface BrandProps {
	height?: number
	width?: number
	className?: string
	layout?: string
}

export const Brand = ({ height = 70, width = 70, className = '', layout = '' }: BrandProps) => {
	const { image, name } = config.siteMetadata

	return (
		<div className={`brand ${className}`}>
			<Link
				href='/'
				className={`nobase ${layout}`}
			>
				<Image
					src={image}
					height={height}
					width={width}
					priority
					data-testid='image'
					alt={name}
					className='brand-image'
				/>
				<h3
					className='brand-name text-size-inherit'
					translate='no'
				>
					{name}
				</h3>
			</Link>
		</div>
	)
}
