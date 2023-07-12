import { Metadata } from 'next'

import Dropdown from '@/components/dropdown'
import config from '@/app.config'

const title = config.siteMetadata.name
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
				<h1 className='sr-only'>{title}</h1>
				<p className='lead mx-auto max-w-md text-center'>{description}</p>
				<div className='flex justify-center'>
					<Dropdown
						className='btn pill dark'
						button='bg-secondary'
						size='lg'
						links={[siteLinks[0]]}
					/>
				</div>
			</div>
		</>
	)
}

/* export async function getServerSiseProps() {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery({
		queryKey: ['posts', 10],
		queryFn: () => fetchPosts(10),
	})

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	}
}
 */
