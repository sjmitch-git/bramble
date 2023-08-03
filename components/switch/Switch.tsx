interface SwitchProps {
	name?: string
	label?: string
	className?: string | undefined
	switchColor?: string | undefined
	required?: boolean
	value?: any
	checked?: boolean
	round?: boolean | undefined
	onchange?: React.ChangeEventHandler<HTMLInputElement>
}

export function Switch({
	label,
	className = '',
	onchange,
	name,
	round = true,
	required = false,
	switchColor = 'info',
}: SwitchProps) {
	return (
		<label className={`label switch ${className}`}>
			<span className='labeltext'>{label}</span>
			<input
				type='checkbox'
				name={name}
				onChange={onchange}
				required={required}
				className={`peer`}
			/>
			<span className={`slider ${switchColor} ${round ? 'round' : 'square'}`}></span>
		</label>
	)
}
