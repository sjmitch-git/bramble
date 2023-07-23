import dynamic from 'next/dynamic'

import { ButtonToTop, Spinner } from '@/components'

import { Navbrand } from '@/components/navbar'

/* const TwitterEmbed = dynamic(
	() => import('../twitterembed/TwitterEmbed'),
	{
		ssr: false,
		loading: () => <Loading className='aspect-square w-11' />,
 }
)
*/
const TwitterEmbed = dynamic(() => import('@/components/twitterembed/TwitterEmbed'), {
	ssr: false,
	loading: () => <Spinner className='aspect-square w-11 text-info' />,
})

import config from '@/app.config'

const Footer = () => {
	const { author, authorUrl } = config.siteMetadata
	return (
		<footer className='footer'>
			<div className='relative mb-12 flex justify-center'>
				<TwitterEmbed
					handle='brambleUI'
					status='1681278654268035073'
					className='w-full max-w-lg text-center'
				/>
			</div>
			<div className='flex flex-col items-center justify-center gap-8'>
				<Navbrand
					height={280}
					width={280}
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
