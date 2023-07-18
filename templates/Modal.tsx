'use client'

import Image from 'next/image'
import React, { useState } from 'react'

import Modal from '@/components/modal'
import Codeblock from '@/components/codeblock'
import Figure from '@/components/figure'

interface DataProps {
	name: string
	src: string
}

const ModalTemplate = () => {
	const [img, setImg] = useState<DataProps>({
		name: 'Beagle',
		src: 'https://images.dog.ceo/breeds/beagle/n02088364_6866.jpg',
	})
	const [modal, setModal] = useState(false)

	const handleClick = () => {
		setModal(true)
	}

	const closeModal = () => {
		setModal(false)
	}

	return (
		<>
			<h2>Usage {modal}</h2>

			<p>
				Click on image to open <strong>Modal</strong>
			</p>

			<div className='mb-0 flex flex-wrap justify-center gap-8 bg-gray-300 p-4'>
				<Figure
					caption='Beagle'
					className='m-auto max-w-sm'
				>
					<Image
						fill
						src='https://images.dog.ceo/breeds/beagle/n02088364_6866.jpg'
						title='Beagle'
						alt='Beagle'
						className='click'
						onClick={handleClick}
						tabIndex={0}
					/>
				</Figure>
				{modal && (
					<Modal
						data={img}
						onClick={closeModal}
					/>
				)}
			</div>
			<Codeblock language='jsx'>
				{`import Image from 'next/image'
				
import Modal from '@/components/modal'		
import Figure from '@/components/figure'

interface DataProps {
	name: string
	src: string
}

const [img, setImg] = useState<DataProps>({
	name: 'Beagle',
	src: 'https://images.dog.ceo/breeds/beagle/n02088364_6866.jpg',
})

const [modal, setModal] = useState(false)

const handleClick = () => {
	setModal(true)
	document.body.style.overflow = 'hidden'
}

const closeModal = () => {
	setModal(false)
	document.body.style.overflow = ''
}
     
<Figure
	caption='Beagle'
	className='max-w-sm m-auto'
>
	<Image
		fill
		src='https://images.dog.ceo/breeds/beagle/n02088364_6866.jpg'
		title='Beagle'
		alt='Beagle'
		className='click'
		onClick={handleClick}
	/>
</Figure>

{modal && (
	<Modal
		data={img}
		onClick={closeModal}
	/>
)}`}
			</Codeblock>
		</>
	)
}

export default ModalTemplate
