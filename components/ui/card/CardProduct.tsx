'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import { Figure, Modal, Ratings } from '@/ui'

import { formatCurrency } from '@smitch/js-lib'

interface CardProps {
	title: string
	description: string
	price: number
	cc: string
	layout?: 'row' | 'column' | undefined
}

interface DataProps {
	name: string
	src: string
}

const CardProduct = ({ title, description, price, cc, layout = 'column' }: CardProps) => {
	const [img, setImg] = useState<DataProps>({ name: '', src: '' })
	const [modal, setModal] = useState(false)

	let aspect = 'aspect-[4/3]'

	const handleClick = (data: DataProps): void => {
		setImg(data)
		setModal(true)
	}

	const closeModal = () => {
		setModal(false)
	}

	return (
		<>
			<div className={`card ${layout}`}>
				<div className='image'>
					<Figure className={aspect}>
						<img
							src='/img/products/Toaster.jpg'
							className='img'
							alt='Cusimax 4-slice Toaster'
							title='Cusimax 4-slice Toaster'
							tabIndex={0}
							onClick={() =>
								handleClick({
									name: 'Cusimax 4-slice Toaster',
									src: '/img/products/Toaster.jpg',
								})
							}
						/>
					</Figure>
				</div>
				<div className='card-body'>
					<h5 className='title'>{title}</h5>
					<p className='card-message'>{description}</p>
					<footer className='card-footer'>
						<Ratings
							rating={4}
							range={5}
							badge='text-warning'
						/>
						<div className='text-xl font-bold'>
							<Link
								href='#'
								className='stretched-link'
							>
								{formatCurrency(price, cc, 'symbol')}
							</Link>
						</div>
					</footer>
				</div>
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

export default CardProduct
