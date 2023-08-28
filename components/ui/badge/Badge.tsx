import { BadgeProps } from './types'

export const Badge = ({ size = '', className = '', children = '' }: BadgeProps) => {
	return <small className={`badge ${className} ${size ? size : ''}`}>{children}</small>
}
