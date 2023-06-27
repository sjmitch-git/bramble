import Link from 'next/link'
import Image from 'next/image'

import config from '../../app.config'

const Navbar = () => {
	const { image, name } = config.siteMetadata

	return (
		<nav className={`navbar`}>
			<div className='brand'>
				<Link href='/'>
					<Image
						src={image}
						height='123'
						width='178'
						priority
						data-testid='image'
						alt={name}
					/>
					<span className='sr-only'>{name}</span>
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
