import { Metadata } from 'next'

import { Dropdown, Tabs, ReactIcon, NextIcon, TailwindIcon } from '@/ui'

import config from '@/app.config'
import data from '@/data/tech.json'

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
			<div className='mx-auto mb-12 flex flex-col justify-center gap-4'>
				<h1 className='brand text-center text-4xl md:hidden'>{title}</h1>
				<p className='lead mx-auto max-w-lg text-center'>{description}</p>
				<div className='mb-12 flex justify-center'>
					<Dropdown
						className='btn pill dark text-light'
						button='bg-secondary circle icon ms-2'
						size='lg'
						links={[siteLinks[0]]}
					/>
				</div>

				<hr />

				<p className='lead mx-auto text-center'>
					This application uses the following technologies:
				</p>

				<div className='mx-auto mb-4 p-4'>
					<Tabs
						className='mx-auto w-full max-w-lg'
						defaultActiveId='tab0'
						icons={[
							<ReactIcon key='reactjs' />,
							<NextIcon key='nextjs' />,
							<TailwindIcon key='tailwind' />,
						]}
					>
						{data.map((item, index) => (
							<div
								id={`tab${index}`}
								key={`tab${index}`}
								title={item.name}
								className={`${index === 0 ? 'active' : ''}`}
							>
								<h3>{item.name}</h3>
								<div dangerouslySetInnerHTML={{ __html: item.body }} />
							</div>
						))}
					</Tabs>
				</div>
			</div>
		</>
	)
}
