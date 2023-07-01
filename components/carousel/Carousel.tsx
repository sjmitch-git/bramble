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
	const [innerWidth, setInnerWidth] = useState(0)
	const inner = useRef<HTMLDivElement>(null!)
	const intervalRef = useRef<number>(null!)
	const playDirection = useRef<string>('forward')

	useEffect(() => {
		setInnerWidth(inner.current.offsetWidth)
	}, [inner])

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
		setPosition(position - innerWidth)
		setIndex(index + 1)
	}

	const setPrevious = () => {
		setPosition(position + innerWidth)
		setIndex(index - 1)
	}

	return (
		<>
			<div className={`carousel ${styles} ${theme}`}>
				<div className='absolute bottom-0 start-1 top-0 flex'>
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
									styles='aspect-[4/3] shadow-none'
									layout='full'
									linkLabel={item.name}
									key={index}
								/>
							))}
						</div>
					)}
				</div>
				<div className='absolute bottom-0 end-1 top-0 flex'>
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
