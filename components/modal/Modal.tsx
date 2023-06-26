'use client'

import React, { useEffect } from 'react'

import useDisableBackButton from '@/hooks/usedisabledbackbutton'

import Figure from '@/components/figure'
import CloseButton from '@/components/button/CloseButton'

interface ModalProps {
	data: {
		src: string
		name: string
	}
	onClick?: () => void | undefined
}

const Modal = ({ data: { src, name }, onClick }: ModalProps) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = ''
		}
	}, [])

	useDisableBackButton()

	return (
		<div className='modal'>
			<CloseButton
				styles='dark hover:scale-125 absolute top-4 right-4'
				onClick={onClick}
			/>
			<Figure caption={name}>
				<img
					className='img'
					src={src}
					alt={name}
					title={name}
					onClick={onClick}
				/>
			</Figure>
		</div>
	)
}

export default Modal
