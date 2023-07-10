import Link from 'next/link'
import Image from 'next/image'

import config from '@/app.config'

interface NavbrandProps {
	height?: number
	width?: number
	className?: string
	layout?: string
}

const Navbrand = ({ height = 70, width = 70, className = '', layout }: NavbrandProps) => {
	const { image, name } = config.siteMetadata

	return (
		<div className={`navbrand ${className}`}>
			<Link
				href='/'
				className={`${layout}`}
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
				<h3 className='brand'>{name}</h3>
			</Link>
		</div>
	)
}

export default Navbrand
