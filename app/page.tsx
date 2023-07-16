import { Metadata } from 'next'

import Dropdown from '@/components/dropdown'
import config from '@/app.config'

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
				<div className='flex justify-center'>
					<Dropdown
						className='btn pill dark text-light'
						button='bg-secondary circle icon ms-2'
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
