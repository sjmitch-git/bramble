'use client'

import React, { useState, KeyboardEvent } from 'react'
import Image from 'next/image'

import { Figure, Modal } from '@/ui'

interface CardProps {
	title: string
	image: string
}

interface DataProps {
	name: string
	src: string
}

const CardImage = ({ title, image }: CardProps) => {
	const [img, setImg] = useState<DataProps>({ name: '', src: '' })
	const [modal, setModal] = useState(false)

	let aspect = 'aspect-[4/3]'

	const openModal = (data: DataProps): void => {
		setImg(data)
		setModal(true)
	}

	const closeModal = () => {
		setModal(false)
	}

	const handleKeyboardEvent = (e: KeyboardEvent<HTMLImageElement>, data: DataProps) => {
		if (e.key === 'Enter') openModal(data)
	}

	return (
		<>
			<div className='image w-full max-w-sm'>
				<Figure className={aspect}>
					<Image
						fill
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						src={image}
						className='img'
						alt={title}
						title={title}
						tabIndex={0}
						onKeyUp={(e) =>
							handleKeyboardEvent(e, {
								name: title,
								src: image,
							})
						}
						onClick={() =>
							openModal({
								name: title,
								src: image,
							})
						}
					/>
				</Figure>
			</div>

			{modal && (
				<Modal
					data={img}
					onClick={closeModal}
				/>
			)}
		</>
	)
}

export default CardImage
