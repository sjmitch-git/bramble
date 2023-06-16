'use client'

import ButtonClose from '@/components/button/ButtonClose'

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
			<p className='message'>{message}</p>
			{onClick && (
				<ButtonClose
					styles='sm dark p-0'
					onClick={onClick}
				/>
			)}
		</blockquote>
	)
}

export default Alert
