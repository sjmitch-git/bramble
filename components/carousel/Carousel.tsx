'use client'
import React, { useState, useRef, useEffect } from 'react'

import Gallery from '@/components/gallery'
import Button from '@/components/button'

import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'

interface DataProps {
	name: string
	src: string
}

interface CarouselProps {
	data: DataProps[]
	caption?: boolean | undefined
	autoplay?: boolean | undefined
}

const Carousel = ({ data, caption, autoplay = false }: CarouselProps) => {
	const [index, setIndex] = useState(0)
	const [position, setPosition] = useState(0)
	const [innerWidth, setInnerWidth] = useState(0)
	const inner = useRef<HTMLDivElement>(null!)
	const intervalRef = useRef<number>(null!)
	const playDirection = useRef<string>('forward')

	useEffect(() => {
		setInnerWidth(inner.current.offsetWidth)
	}, [inner])

	/* 	useEffect(() => {
		const startAutoplay = () => {
			console.log('startAutoplay', autoplay)
			setTimeout(() => {
				console.log('setTimeout', index, position, data.length)
			}, 1000)
		}
		if (autoplay) startAutoplay()
	}, [autoplay]) */

	useEffect(() => {
		const startAutoplay = () => {
			intervalRef.current = window.setTimeout(() => {
				if (index === 1) playDirection.current = 'forward'
				else if (index === data.length) playDirection.current = 'backward'
				if (playDirection.current === 'forward') setNext()
				else setPrevious()
			}, 3000)
		}
		if (autoplay) startAutoplay()
		return () => {
			clearInterval(intervalRef.current)
		}
	}, [autoplay, index])

	const setNext = () => {
		setPosition(position - innerWidth)
		setIndex(index + 1)
	}

	const setPrevious = () => {
		setPosition(position + innerWidth)
		setIndex(index - 1)
	}

	return (
		<>
			<div className={`carousel`}>
				<div className='absolute bottom-0 left-1 top-0 flex'>
					{!autoplay && (
						<Button
							onClick={setPrevious}
							styles='icon circle light sm m-auto z-50'
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
					<Gallery
						styles={`flex oveflow-hidden gap-0`}
						style={{ left: `${position}px` }}
						data={data}
						caption={caption}
						aspect='aspect-[4/3]'
					/>
				</div>
				<div className='absolute bottom-0 right-1 top-0 flex'>
					{!autoplay && (
						<Button
							onClick={setNext}
							styles='icon circle light sm m-auto'
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
