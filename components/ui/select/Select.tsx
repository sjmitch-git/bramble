import { SelectProps } from './types'

export const Select = ({
	className = '',
	title,
	id,
	children,
	value,
	onChange,
	disabled,
	required = false,
	nocaret,
	labelStyles = '',
	label,
}: SelectProps) => {
	return (
		<label className={`label ${labelStyles}`}>
			<span>{label}</span>
			<select
				className={`select form-select ${className} ${nocaret ? 'nocaret' : ''}`}
				title={title}
				id={id}
				onChange={onChange}
				value={value}
				required={required}
				disabled={disabled}
			>
				{children}
			</select>
		</label>
	)
}
