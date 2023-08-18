'use client'

import { CloseButton } from '@/components'

import { Alert as TAlert } from '@/types'

export function Alert({ className = '', message, status = '', onClick }: TAlert) {
	return (
		<blockquote
			className={`alert ${className}`}
			role='alert'
		>
			{status && (
				<h4
					className='status'
					role='heading'
				>
					{status}
				</h4>
			)}
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
