import { Metadata } from 'next'
import { lazy, Suspense } from 'react'

import Dropdown from '@/components/dropdown'
import Loading from '@/components/loading'
import config from '@/app.config'

const TwitterEmbed = lazy(() => delayForDemo(import('@/components/twitterembed')))

const title = config.siteMetadata.title
const description = config.siteMetadata.description
const keywords = config.siteMetadata.keywords

export const metadata: Metadata = {
	title: title,
	description: description,
	keywords: keywords,
}

export default function Home() {
	const { siteLinks } = config

	return (
		<>
			<div className='mx-auto flex flex-col justify-center gap-4'>
				<h1 className='brand text-center text-4xl md:hidden'>{title}</h1>
				<p className='lead mx-auto max-w-md text-center'>{description}</p>
				<div className='mb-12 flex justify-center'>
					<Dropdown
						className='btn pill dark text-light'
						button='bg-secondary circle icon ms-2'
						size='lg'
						links={[siteLinks[0]]}
					/>
				</div>
				<div className='flex justify-center'>
					<Suspense fallback={<Loading />}>
						<TwitterEmbed
							handle='brambleUI'
							className='w-full max-w-lg text-center'
						/>
					</Suspense>
				</div>
			</div>
		</>
	)
}

function delayForDemo(promise: any) {
	return new Promise((resolve) => {
		setTimeout(resolve, 20000)
	}).then(() => promise)
}
