'use client'

import { Tab } from './Tab'

import { Spinner } from '@/ui'

import { TabBarProps } from './types'

const TabBar = ({ tabs, onclick, activeId, tabStyles }: TabBarProps) => {
	return (
		<nav className='tabbar'>
			{tabs ? (
				<ul className='tablist'>
					{tabs.map((tab) => (
						<li key={tab.id}>
							<Tab
								id={tab.id}
								title={tab.title}
								activeId={activeId}
								tabStyles={tabStyles}
								onclick={onclick}
							/>
						</li>
					))}
				</ul>
			) : (
				<Spinner className='mb-4 w-8 text-info' />
			)}
		</nav>
	)
}

export default TabBar
