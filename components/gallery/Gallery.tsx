'use client'

import React, { useState } from 'react'

import Figure from '@/components/figure'
import Modal from '@/components/modal'

interface DataProps {
	name: string
	src: string
}

interface GalleryProps {
	data: any[]
	className?: string | undefined
	style?: React.CSSProperties | undefined
	aspect?: string | undefined
	caption?: boolean | undefined
}

const Gallery = ({
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
				{data.map((item, index) => (
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

export default Gallery
