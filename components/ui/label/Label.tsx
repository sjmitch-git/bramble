'use client'

import { PasswordToggle } from '@/ui'

import { LabelProps } from './types'

export const Label = ({
	labelStyles = '',
	label,
	value,
	type,
	onToggleType,
	children,
}: LabelProps) => {

	return (
		<label
			className={`label ${labelStyles} ${
				type === 'checkbox' || type === 'radio' || type === 'color' ? 'row' : ''
			}`}
		>
			<span className={type}>
				{label || value} {type === 'password' && <PasswordToggle onClick={onToggleType} />}
			</span>
			{children}
		</label>
	)
}
