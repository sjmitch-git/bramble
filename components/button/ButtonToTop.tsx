'use client'

import { useRef, useEffect } from 'react'
import Button from '@/components/button'

import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'

interface ButtonProps {
	size?: string | undefined
	styles?: string | undefined
	disabled?: boolean | undefined
}

const ButtonToTop = ({ size = '', styles = '', disabled = false }: ButtonProps) => {
	const button = useRef<HTMLButtonElement>(null!)

	useEffect(() => {
		if (button) button.current.style.display = 'none'
	}, [button])

	const ScrollToTop = () => {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	}

	const scrollFunction = (h: number) => {
		if (!button) return
		if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
			button.current.style.display = 'block'
		} else {
			button.current.style.display = 'none'
		}
	}

	if (typeof window !== 'undefined') {
		window.onscroll = function () {
			scrollFunction(window.innerHeight)
		}
	}

	return (
		<Button
			styles={`icon circle ${styles} ${size}`}
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

export default ButtonToTop
