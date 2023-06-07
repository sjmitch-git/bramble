interface SelectProps {
	styles?: string | undefined
	id?: string | undefined
	title?: string | undefined
	children: React.ReactNode
	value?: string | undefined
	onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined
}

const Select = ({ styles, title, id, children, value, onChange }: SelectProps) => {
	//console.log(styles)
	return (
		<select
			className={`select ${styles}`}
			title={title}
			id={id}
			onChange={onChange}
			value={value}
		>
			{children}
		</select>
	)
}

export default Select
