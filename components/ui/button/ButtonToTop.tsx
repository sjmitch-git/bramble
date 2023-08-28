'use client'

import { useCallback } from 'react'

import { Button } from './Button'

import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'

import { ButtonProps } from './types'

export const ButtonToTop = ({ size = '', className = '', disabled = false }: ButtonProps) => {
	const button = useCallback((buttonRefNode: HTMLButtonElement) => {
		if (buttonRefNode) {
			buttonRefNode.style.display = 'none'
		}

		const scrollFunction = (h: number) => {
			if (!buttonRefNode) return
			if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
				buttonRefNode.style.display = 'block'
			} else {
				buttonRefNode.style.display = 'none'
			}
		}

		window.onscroll = function () {
			scrollFunction(window.innerHeight)
		}
	}, [])

	const ScrollToTop = () => {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	}

	return (
		<Button
			className={`icon circle transition-all ${className} ${size}`}
			onClick={ScrollToTop}
			title='Back to top?'
			id='totopbutton'
			disabled={disabled}
			ref={button}
		>
			<ArrowUpCircleIcon />
			<span className='sr-only'>Back to top?</span>
		</Button>
	)
}
