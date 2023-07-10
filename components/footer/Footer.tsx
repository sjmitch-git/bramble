import ButtonToTop from '@/components/button/ButtonToTop'
import Navbrand from '@/components/navbar/Navbrand'

import config from '@/app.config'

const Footer = () => {
	const { author, authorUrl } = config.siteMetadata
	return (
		<footer className='footer'>
			<div className='flex flex-col items-center justify-center gap-8'>
				<Navbrand
					height={400}
					width={400}
					layout='flex flex-col'
				/>
				<p className='text-base'>
					Made by{' '}
					<a
						href={authorUrl}
						rel='noopener'
						target='_blank'
					>
						{author}
					</a>
				</p>
			</div>
			<ButtonToTop styles='fixed right-4 bottom-4 bg-secondary' />
		</footer>
	)
}

export default Footer
