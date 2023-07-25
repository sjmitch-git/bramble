'use client'

import { CloseButton } from '@/components'

interface AlertProps {
	className?: string | undefined
	status?: string | undefined
	message: string
	onClick?: () => void | undefined
}

export function Alert({ className = '', message, status = '', onClick }: AlertProps) {
	return (
		<blockquote
			className={`alert ${className}`}
			role='alert'
		>
			{status && <h4 className='status'>{status}</h4>}
			<div
				className='message'
				dangerouslySetInnerHTML={{ __html: message }}
			></div>
			{onClick && (
				<CloseButton
					className='xs icon circle p-0'
					onClick={onClick}
				/>
			)}
		</blockquote>
	)
}
