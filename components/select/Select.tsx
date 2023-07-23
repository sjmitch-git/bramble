interface SelectProps {
	size?: string | 'sm' | 'lg' | undefined
	className?: string | undefined
	id?: string | undefined
	title?: string | undefined
	children: React.ReactNode
	value?: string | undefined
	name?: string | undefined
	onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined
	disabled?: boolean | undefined
	required?: boolean | undefined
	nocaret?: boolean | undefined
}

export const Select = ({
	name = 'label',
	className = '',
	title,
	id,
	children,
	value,
	onChange,
	disabled,
	required,
	nocaret,
}: SelectProps) => {
	return (
		<select
			className={`select ${className} ${nocaret && 'nocaret'}`}
			title={title}
			id={id}
			onChange={onChange}
			value={value}
			required={required}
			disabled={disabled}
		>
			{children}
		</select>
	)
}
