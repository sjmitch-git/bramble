'use client'
import React, { useState, useRef, useEffect } from 'react'

import Gallery from '@/components/gallery'
import Button from '@/components/button'
import Card from '@/components/card'

import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'

interface DataProps {
	name: string
	src: string
	description: string
	link: string
}

interface CarouselProps {
	data: DataProps[]
	styles?: string | undefined
	theme?: string | undefined
	caption?: boolean | undefined
	autoplay?: boolean | undefined
	gallery?: boolean | undefined
	rtl?: boolean | undefined
}

const Carousel = ({
	data,
	caption,
	autoplay = false,
	gallery,
	styles = '',
	theme = '',
	rtl,
}: CarouselProps) => {
	const [index, setIndex] = useState(0)
	const [position, setPosition] = useState(0)
	const [touchPosition, setTouchPosition] = useState<number>(null!)
	const [innerWidth, setInnerWidth] = useState(0)
	const inner = useRef<HTMLDivElement>(null!)
	const intervalRef = useRef<number>(null!)
	const playDirection = useRef<string>('forward')

	useEffect(() => {
		setInnerWidth(inner.current.offsetWidth)
	})

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
		setPosition(position - innerWidth)
		setIndex(index + 1)
	}

	const setPrevious = () => {
		if (index === 0) return
		setPosition(position + innerWidth)
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
				className={`carousel ${styles} ${theme}`}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
			>
				<div className='prev-btn'>
					{!autoplay && (
						<Button
							onClick={setPrevious}
							styles='icon circle light sm m-auto z-50 rtl:rotate-180'
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
							styles={`flex oveflow-hidden gap-0`}
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
									styles='aspect-[4/3] shadow-none w-full'
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
							styles='icon circle light sm m-auto rtl:rotate-180'
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

export default Carousel
