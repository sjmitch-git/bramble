'use client'

import { useState, useEffect } from 'react'

import {
	Form,
	Input,
	RadioGroup,
	AmexIcon,
	DinersClubIcon,
	DiscoverIcon,
	JcbIcon,
	MasterCardIcon,
	VisaIcon,
	Select,
} from '@/ui'

import { FormProps } from './types'

import data from '@/data/cards.json'
import months from '@/data/months.json'

interface DataProps {
	id: string
	name: string
	validate: string
	hint: string
}

const getIcon = (key: string) => {
	switch (key) {
		case 'amex':
			return <AmexIcon />
		case 'dinersclub':
			return <DinersClubIcon />
		case 'discover':
			return <DiscoverIcon />
		case 'jcb':
			return <JcbIcon />
		case 'mastercard':
			return <MasterCardIcon />
		case 'visa':
			return <VisaIcon />
	}
}

const getType = (id: string): DataProps | undefined => {
	for (let index = 0; index < data.length; index++) {
		if (data[index].id === id) return data[index]
	}
	return
}

export const CreditCard = ({
	method = 'post',
	name = 'cc',
	legend = 'Payment Method',
	btnLabel = 'Submit',
	btnStyles = '',
	layout = 'column',
	className = 'group p-4 md:px-0',
	onSubmit,
}: FormProps) => {
	const [type, setType] = useState<DataProps>(null!)
	const [year, setYear] = useState<number>(null!)

	useEffect(() => {
		const d = new Date()
		setYear(d.getFullYear())
	}, [])

	const handleChange = (e: any) => {
		let type = getType(e.target.value.toLowerCase())
		if (type) setType(type)
	}

	return (
		<Form
			method={method}
			name={name}
			layout={layout}
			legend={legend}
			btnLabel={btnLabel}
			btnStyles={btnStyles}
			onSubmit={onSubmit}
			className={className}
		>
			<p>Select your card</p>

			<RadioGroup
				data={data}
				name='cc-type'
				icons={true}
				getIcon={getIcon}
				onChange={handleChange}
				selected={type?.id}
				labelStyles='rounded-lg'
			/>

			<Input
				label='Card Type'
				labelStyles='offscreen'
				name='cc-type'
				value={type?.name}
				autocomplete='cc-type'
				required={true}
				hidden={true}
				onchange={handleChange}
			/>

			{type && (
				<>
					<p>{type.name}</p>

					<Input
						label='Name on card'
						name='cc-name'
						autocomplete='cc-name'
						required={true}
						pattern='[a-z A-Z]+'
					/>

					<Input
						label='Card number'
						name='cc-number'
						autocomplete='cc-number'
						hint={type?.hint}
						pattern={type?.validate}
						required={true}
					/>

					<Input
						label='CVC'
						type='number'
						name='cc-csc'
						autocomplete='cc-csc'
						min='100'
						max='999'
						required={true}
						className='w-16'
					/>

					<p>Expiry date</p>

					<div className='flex gap-4'>
						<Select
							title='Expiry Month'
							name='cc-exp-month'
							required={true}
							onChange={handleChange}
							className='form-select'
							nocaret={true}
							label='Month'
						>
							<option
								value=''
								disabled
								hidden
							>
								MM
							</option>
							{months.map((el) => (
								<option
									key={el}
									value={el}
								>
									{el}
								</option>
							))}
						</Select>

						<Select
							name='cc-exp-year'
							required={true}
							onChange={handleChange}
							className='form-select'
							nocaret={true}
							label='Year'
						>
							<option
								value=''
								disabled
								hidden
							>
								YYYY
							</option>
							{[...new Array(10)].map((_el, index) => (
								<option
									key={index}
									value={(index + year).toString()}
								>
									{index + year}
								</option>
							))}
						</Select>
					</div>
				</>
			)}
		</Form>
	)
}
