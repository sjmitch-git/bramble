'use client'

import TabBar from './TabBar'

import { useCallback, useState, useEffect } from 'react'

import { TabsProps, TabProps } from './types'

export const Tabs = ({
	className = '',
	defaultActiveId = '',
	tabStyles,
	icons,
	children,
	minimal = false,
}: TabsProps) => {
	const [tabs, setTabs] = useState<TabProps[]>(null!)
	const [activeId, setActiveId] = useState<string>(defaultActiveId)
	const [nodes, setNodes] = useState<React.ReactNode[]>(null!)

	const content = useCallback(
		(contentRefNode: any) => {
			let arrTabs: any[] = []
			if (contentRefNode) {
				const buildTabs = (item: any, index: number) => {
					const tabObject = {
						id: item.id,
						title: icons ? icons[index] : item.title,
					}
					arrTabs.push(tabObject)
				}
				setTabs(arrTabs)
				const children = [...contentRefNode.children]
				setNodes(children)
				children.forEach(buildTabs)
			}
		},
		[icons]
	)

	useEffect(() => {
		const setActive = (item: any) =>
			item.id === activeId ? item.classList.add('active') : item.classList.remove('active')
		if (activeId && nodes) nodes.forEach(setActive)
	}, [activeId, nodes])

	const handleClick = (id: string) => setActiveId(id)

	return (
		<div className={`tabs ${minimal ? 'minimal' : ''} ${className}`}>
			<TabBar
				tabs={tabs}
				tabStyles={tabStyles}
				activeId={activeId}
				onclick={handleClick}
			/>
			<div
				ref={content}
				className='tabwrap'
			>
				{children}
			</div>
		</div>
	)
}

export default Tabs
