import { lazy, Suspense } from 'react'

import ButtonToTop from '@/components/button/ButtonToTop'
import Navbrand from '@/components/navbar/Navbrand'
import Spinner from '@/components/spinner'

const TwitterEmbed = lazy(() => import('@/components/twitterembed'))

import config from '@/app.config'

const Footer = () => {
	const { author, authorUrl } = config.siteMetadata
	return (
		<footer className='footer'>
			<div className='mb-12 flex justify-center'>
				<Suspense fallback={<Spinner />}>
					<TwitterEmbed
						handle='brambleUI'
						status='1681278654268035073'
						className='w-full max-w-lg text-center'
					/>
				</Suspense>
			</div>
			<div className='flex flex-col items-center justify-center gap-8'>
				<Navbrand
					height={380}
					width={380}
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
			<ButtonToTop className='fixed bottom-4 right-4 bg-secondary' />
		</footer>
	)
}

export default Footer
