'use client'

import dynamic from 'next/dynamic'

import { Dropdown, ReactIcon, NextIcon, TailwindIcon, Tabs } from '@/ui'

/* const Tabs = dynamic(() => import('@/components/ui/tabs/Tabs'), {
	ssr: false,
	loading: () => <Spinner className='aspect-square w-11 text-info' />,
}) */

import config from '@/app.config'
import data from '@/data/tech.json'

const HomePage = () => {
	const { siteLinks } = config

	return (
		<>
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
		</>
	)
}

export default HomePage
