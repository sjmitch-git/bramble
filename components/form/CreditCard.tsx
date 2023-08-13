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
} from '@/components'

import { Form as TForm } from '@/types'

import data from '@/data/cards.json'
//import months from '@/data/months.json'

interface TData {
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

const getType = (id: string): TData | undefined => {
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
}: TForm) => {
	const [type, setType] = useState<TData>(null!)
	const [year, setYear] = useState<number>(null!)

	useEffect(() => {
		const d = new Date()
		setYear(d.getFullYear())
	}, [setYear])

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
				getIcon={getIcon}
				onChange={handleChange}
				selected={type?.id}
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

			<Input
				label='Name on card'
				name='ccname'
				autocomplete='cc-name'
				required={true}
				pattern='[a-zA-Z]+'
			/>

			<Input
				label='Card number'
				name='cardnumber'
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
				<Input
					type='number'
					label='Month'
					name='cc-exp-month'
					autocomplete='cc-exp-month'
					required={true}
					placeholder='MM'
					pattern='0[1-9]|1[0-2]'
					className='w-16'
					min='01'
					max='12'
				/>

				<Input
					type='number'
					label='Year'
					name='cc-exp-year'
					autocomplete='cc-exp-year'
					required={true}
					placeholder='YYYY'
					className='w-24'
					min={year}
					max={year + 10}
				/>
			</div>
		</Form>
	)
}
