'use client'

import { Tab } from './Tab'

import { Spinner } from '@/ui'

import { Tab as TTab } from '@/types'

interface TabBarProps {
	className?: string | undefined
	defaultActiveId?: string
    tabs: TTab[]
    activeId: string
    onclick: (id: string) => void | undefined
}



export const TabBar = ({ tabs, onclick, activeId }: TabBarProps) => {
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
