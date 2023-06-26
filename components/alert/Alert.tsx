'use client'

import CloseButton from '@/components/button/CloseButton'

interface AlertProps {
	styles?: string | undefined
	status?: string | undefined
	message: string
	onClick?: () => void | undefined
}

const Alert = ({ styles = '', message, status = '', onClick }: AlertProps) => {
	return (
		<blockquote
			className={`alert ${styles}`}
			role='alert'
		>
			{status && <h4 className='status'>{status}</h4>}
			<div
				className='message'
				dangerouslySetInnerHTML={{ __html: message }}
			></div>
			{onClick && (
				<CloseButton
					styles='sm dark p-0'
					onClick={onClick}
				/>
			)}
		</blockquote>
	)
}

export default Alert
