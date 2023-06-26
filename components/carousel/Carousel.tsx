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
}

const Carousel = ({ data, caption }: CarouselProps) => {
	const [index, setIndex] = useState(0)
	const [position, setPosition] = useState(0)
	const [innerWidth, setInnerWidth] = useState(0)
	const inner = useRef<HTMLDivElement>(null!)

	useEffect(() => {
		setInnerWidth(inner.current.offsetWidth)
	}, [inner])

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
					<Button
						onClick={setPrevious}
						styles='icon circle light sm m-auto z-50'
						disabled={index === 0}
					>
						<ChevronLeftIcon />
					</Button>
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
					<Button
						onClick={setNext}
						styles='icon circle light sm m-auto'
						disabled={index === data.length - 1}
					>
						<ChevronRightIcon />
					</Button>
				</div>
			</div>
		</>
	)
}

export default Carousel
