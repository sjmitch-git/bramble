'use client'

import { TabBar } from './TabBar'

import { useCallback, useState, useEffect } from 'react'

interface TabsProps {
	className?: string | undefined
	tabStyles?: string | undefined
	children: React.ReactNode
	defaultActiveId?: string
}

import { Tab as TTab } from '@/types'

export const Tabs = ({ className = '', defaultActiveId = '', tabStyles, children }: TabsProps) => {
	const [tabs, setTabs] = useState<TTab[]>(null!)
	const [activeId, setActiveId] = useState<string>(defaultActiveId)
	const [nodes, setNodes] = useState<React.ReactNode[]>(null!)

	const content = useCallback((contentRefNode: any) => {
		if (contentRefNode) {
			let arr: any[] = []
			const buildTabs = (item: any, index: number) => {
				const tabObject = {
					id: item.id,
					title: item.title,
				}
				arr.push(tabObject)
				if (children.length === index + 1) setTabs(arr)
			}
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
		<div className={`tabs ${className}`}>
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
