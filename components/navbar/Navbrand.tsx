import Link from 'next/link'
import Image from 'next/image'

import config from '../../app.config'

const Navbrand = () => {
	const { image, name } = config.siteMetadata

	return (
		<div className='navbrand'>
			<Link href='/'>
				<Image
					src={image}
					height='70'
					width='70'
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
