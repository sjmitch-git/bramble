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

/* const data = [
	{
		name: 'ReactJS',
		body: "<p className='italic'>What is ReactJS?</p><p>ReactJS is a popular JavaScript library used for building user interfaces. It allows developers to create reusable UI components and efficiently update the interface when the data changes. ReactJS is known for its component-based architecture and virtual DOM (Document Object Model) manipulation.</p>",
	},
	{
		name: 'NextJS',
		body: "<p className='italic'>What is NextJS?</p><p>NextJS is a framework built on top of ReactJS. It provides additional features like server-side rendering, automatic code splitting, and simplified routing. NextJS is commonly used for building server-rendered React applications.</p>",
	},
	{
		name: 'TailwindCSS',
		body: "<p className='italic'>What is TailwindCSS?</p><p>TailwindCSS is a utility-first CSS framework that provides a set of pre-defined classes to style HTML elements. It aims to give developers more control over the design by providing a highly customizable utility class approach. It is often used in conjunction with ReactJS or other frontend frameworks.</p>",
	},
] */

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
						icons={[<ReactIcon />, <NextIcon />, <TailwindIcon />]}
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
