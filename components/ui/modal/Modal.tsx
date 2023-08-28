'use client'

import React, { useEffect } from 'react'

import useDisableBackButton from '@/hooks/usedisabledbackbutton'

import { Figure, CloseButton } from '@/ui'

import { ModalProps } from './types'

export const Modal = ({ data: { src, name }, className = '', onClick }: ModalProps) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = ''
		}
	}, [])

	useDisableBackButton()

	return (
		<div className={`modal ${className}`}>
			<CloseButton
				className='dark absolute right-4 top-4 hover:scale-125'
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
