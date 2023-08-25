'use client'
import React, { useState, useRef, useEffect } from 'react'

import { Button, Card, Gallery } from '@/ui'

import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'

interface DataProps {
	name: string
	src: string
	description: string
	link: string
}

interface CarouselProps {
	data: DataProps[]
	className?: string | undefined
	theme?: string | undefined
	caption?: boolean | undefined
	autoplay?: boolean | undefined
	gallery?: boolean | undefined
	rtl?: boolean | undefined
}

export const Carousel = ({
	data,
	caption,
	autoplay = false,
	gallery,
	className = '',
	theme = '',
	rtl,
}: CarouselProps) => {
	const [index, setIndex] = useState(0)
	const [position, setPosition] = useState(0)
	const [touchPosition, setTouchPosition] = useState<number>(null!)
	const inner = useRef<HTMLDivElement>(null!)
	const intervalRef = useRef<number>(null!)
	const playDirection = useRef<string>('forward')

	const getInnerWidth = () => {
		return inner.current.offsetWidth
	}

	let style

	if (rtl) {
		style = {
			right: position + 'px',
		}
	} else {
		style = {
			left: position + 'px',
		}
	}

	useEffect(() => {
		const startAutoplay = () => {
			intervalRef.current = window.setTimeout(() => {
				if (index === 0) playDirection.current = 'forward'
				else if (index === data.length - 1) playDirection.current = 'backward'
				if (playDirection.current === 'forward') setNext()
				else setPrevious()
			}, 3000)
		}
		if (autoplay) startAutoplay()
		return () => {
			clearInterval(intervalRef.current)
		}
	})

	const setNext = () => {
		if (index === data.length - 1) return
		setPosition(position - getInnerWidth())
		setIndex(index + 1)
	}

	const setPrevious = () => {
		if (index === 0) return
		setPosition(position + getInnerWidth())
		setIndex(index - 1)
	}

	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		setTouchPosition(e.touches[0].clientX)
	}

	const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
		if (touchPosition === null || autoplay) return
		const diff = touchPosition - e.touches[0].clientX

		if (diff > 5) {
			if (rtl) setPrevious()
			else setNext()
		} else if (diff < -5) {
			if (rtl) setNext()
			else setPrevious()
		}

		setTouchPosition(null!)
	}

	return (
		<>
			<div
				className={`carousel ${className} ${theme}`}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
			>
				<div className='prev-btn'>
					{!autoplay && (
						<Button
							onClick={setPrevious}
							className='icon circle light sm z-50 m-auto rtl:rotate-180'
							disabled={index === 0}
						>
							<ChevronLeftIcon />
						</Button>
					)}
				</div>
				<div
					className='inner'
					ref={inner}
				>
					{gallery ? (
						<Gallery
							className={`oveflow-hidden flex gap-0`}
							style={style}
							data={data}
							caption={caption}
							aspect='aspect-[4/3]'
						/>
					) : (
						<div
							className='cardgroup'
							style={style}
						>
							{data.map((item, index) => (
								<Card
									title={item.name}
									description={item.description}
									link={item.link}
									className='aspect-[4/3] w-full shadow-none even:bg-dark even:text-light'
									layout='full'
									linkLabel={item.name}
									key={index}
								/>
							))}
						</div>
					)}
				</div>
				<div className='next-btn'>
					{!autoplay && (
						<Button
							onClick={setNext}
							className='icon circle light sm m-auto rtl:rotate-180'
							disabled={index === data.length - 1}
						>
							<ChevronRightIcon />
						</Button>
					)}
				</div>
			</div>
		</>
	)
}
