'use client'

import React, { useState } from 'react'

import { Figure, Modal } from '@/ui'

import { GalleryProps, DataProps } from './types'

export const Gallery = ({
	data,
	className = '',
	caption = true,
	aspect = 'aspect-[4/3]',
	style,
}: GalleryProps) => {
	const [img, setImg] = useState<DataProps>({ name: '', src: '' })
	const [modal, setModal] = useState(false)

	const handleClick = (index: number): void => {
		setImg(data[`${index}`])
		setModal(true)
	}

	const closeModal = () => {
		setModal(false)
	}

	return (
		<>
			<div
				className={`gallery ${className}`}
				style={style}
			>
				{data &&
					data.map((item, index) => (
						<Figure
							caption={caption && item.name}
							key={index}
							className={aspect}
						>
							<img
								src={item.src}
								alt={item.name}
								title={item.name}
								tabIndex={0}
								onClick={() => handleClick(index)}
							/>
						</Figure>
					))}
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
