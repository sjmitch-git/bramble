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

			<p>Click on image to open Modal</p>

			<div className='mb-8 flex flex-wrap justify-center gap-8 bg-gray-300 p-4'>
				<Figure
					caption='Beagle'
					styles='max-w-sm m-auto'
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
				)}
			</div>
		</>
	)
}

export default ModalTemplate
