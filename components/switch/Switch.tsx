interface SwitchProps {
	name?: string
	label?: string
	className?: string | undefined
	switchColor?: string | undefined
	required?: boolean
	checked?: boolean
	round?: boolean | undefined
	onchange?: React.ChangeEventHandler<HTMLInputElement>
}

export function Switch({
	label,
	className = '',
	onchange,
	checked,
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
				defaultChecked={checked}
			/>
			<span className={`slider ${switchColor} ${round ? 'round' : 'square'}`}></span>
		</label>
	)
}
