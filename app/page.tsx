import { Metadata } from 'next'

import dynamic from 'next/dynamic'

import config from '@/app.config'

const title = config.siteMetadata.title
const description = config.siteMetadata.description
const keywords = config.siteMetadata.keywords

export const metadata: Metadata = {
	title: title,
	description: description,
	keywords: keywords,
}

//import HomePage from '@/components/pages/home'
import { Spinner } from '@/ui'

const HomePage = dynamic(() => import('@/components/pages/home/Home'), {
	ssr: false,
	loading: () => <Spinner className='aspect-square w-11 text-info' />,
})

export default function Home() {
	return (
		<>
			<div className='mx-auto mb-12 flex flex-col justify-center gap-4'>
				<h1 className='brand text-center text-4xl md:hidden'>{title}</h1>
				<p className='lead mx-auto max-w-lg text-center'>{description}</p>
			</div>
			<HomePage />
		</>
	)
}
