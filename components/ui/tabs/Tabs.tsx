'use client'

import { TabBar } from './TabBar'

import { useCallback, useState, useEffect } from 'react'

interface TabsProps {
	className?: string | undefined
	tabStyles?: string | undefined
	children: React.ReactNode
	defaultActiveId?: string
	icons?: React.ReactNode[]
	minimal?: boolean
}

import { Tab as TTab } from '@/types'

export const Tabs = ({
	className = '',
	defaultActiveId = '',
	tabStyles,
	icons,
	children,
	minimal = false,
}: TabsProps) => {
	const [tabs, setTabs] = useState<TTab[]>(null!)
	const [activeId, setActiveId] = useState<string>(defaultActiveId)
	const [nodes, setNodes] = useState<React.ReactNode[]>(null!)

	const content = useCallback((contentRefNode: any) => {
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
	}, [])

	useEffect(() => {
		const setActive = (item: any) =>
			item.id === activeId ? item.classList.add('active') : item.classList.remove('active')
		if (activeId && nodes) nodes.forEach(setActive)
	}, [activeId])

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
