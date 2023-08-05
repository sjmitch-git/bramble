'use client'

import { useState, useEffect } from 'react'

import { Codeblock, Input } from '@/components'

const InputTemplate = () => {
	const [color, setColor] = useState('#FFFFFF')
	const [today, setToday] = useState('')
	const [image, SetImage] = useState({
		src: '',
		title: '',
	})

	useEffect(() => {
		const formatDate = (d: any) => {
			let month: any = d.getMonth() + 1
			if (month < 10) month = String(`0${month}`)
			let day: any = d.getDate()
			if (day < 10) day = String(`0${day}`)
			let year: any = d.getFullYear()
			return `${year}-${month}-${day}`
		}
		const today = formatDate(new Date())
		setToday(today)
	}, [])

	const onColorChange = (event: any) => {
		setColor(event.target.value)
	}

	const onFileChange = (e: any) => {
		const file = e.target.files[0]
		let image = {
			src: URL.createObjectURL(file),
			title: file.name,
		}
		SetImage(image)
	}

	return (
		<>
			<h2>Usage</h2>

			<h3>Text</h3>

			<div className='form mb-8 justify-start gap-8 bg-light p-4'>
				<Input
					label='Name'
					name='name'
					autocomplete='name'
				/>
			</div>

			<Codeblock language='jsx'>
				{`import {Input} from '@/components'
				
<Input
	label='Name'
	name='name'
	autocomplete='name'
/>`}
			</Codeblock>

			<h3>Checkbox</h3>

			<div className='form mb-8 justify-start gap-8 bg-light p-4'>
				<Input
					label='I agree to the Terms and Conditions'
					name='terms'
					type='checkbox'
					value='terms'
				/>
			</div>

			<Codeblock language='jsx'>
				{`import {Input} from '@/components'
				
<Input
	label='I agree to the Terms and Conditions'
	name='terms'
	type='checkbox'
	value='terms'
/>`}
			</Codeblock>

			<h3>Radios</h3>

			<div className='form mb-8 flex-wrap justify-start gap-8 bg-light p-4'>
				<Input
					label='17 years or younger'
					name='age'
					type='radio'
					value='child'
				/>
				<Input
					label='18 - 64 years'
					name='age'
					type='radio'
					value='adult'
					checked={true}
				/>
				<Input
					label='65 years or older'
					name='age'
					type='radio'
					value='senior'
				/>
			</div>

			<Codeblock language='jsx'>
				{`import {Input} from '@/components'
				
<Input
	label='17 years or younger'
	name='age'
	type='radio'
	value='child'
/>
<Input
	label='18 - 64 years'
	name='age'
	type='radio'
	value='adult'
	checked={true}
/>
<Input
	label='65 years or older'
	name='age'
	type='radio'
	value='senior'
/>`}
			</Codeblock>

			<h3>Password</h3>

			<div className='form mb-8 justify-start gap-8 bg-light p-4'>
				<div className='w-80'>
					<Input
						label='Password'
						name='password'
						autocomplete='current-password'
						type='password'
						pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}'
						required={true}
						hint='Must contain at least one number and one uppercase and lowercase letter, and between 8 and 12 characters'
					/>
				</div>
			</div>

			<Codeblock language='jsx'>
				{`import {Input} from '@/components'
				
<Input
	label='Password'
	name='password'
	autocomplete='current-password'
	type='password'
	pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
/>`}
			</Codeblock>

			<h3>Color</h3>

			<div className='form mb-8 justify-start gap-8 bg-light p-4'>
				<Input
					name='favourite'
					type='color'
					value={color}
					onchange={onColorChange}
				/>
			</div>

			<Codeblock language='jsx'>
				{`import {Input} from '@/components'

const [color, setColor] = useState('#FFFFFF')

const onColorChange = (event: any) => {
	setColor(event.target.value)
}
				
<Input
	name='favourite'
	type='color'
	value={color}
	onchange={onColorChange}
/>`}
			</Codeblock>

			<h3>Date</h3>

			<div className='form mb-8 justify-start gap-8 bg-light p-4'>
				<Input
					label='Check-in'
					name='checkin'
					type='date'
					value={today}
					min={today}
				/>
			</div>

			<Codeblock language='jsx'>
				{`import {Input} from '@/components'

const [today, setToday] = useState('2023-08-03')
		
<Input
	label='Check-in'
	name='checkin'
	type='date'
	value={today}
	min={today}
/>`}
			</Codeblock>

			<h3>Email</h3>

			<div className='form mb-8 justify-start gap-8 bg-light p-4'>
				<Input
					label='Email'
					type='email'
					name='email'
					autocomplete='email'
				/>
			</div>

			<Codeblock language='jsx'>
				{`import {Input} from '@/components'
		
<Input
	label='Email'
	type='email'
	name='email'
	autocomplete='email'
/>`}
			</Codeblock>

			<h3>File</h3>

			<div className='form mb-8 justify-start gap-8 bg-light p-4'>
				<div className='flex flex-col gap-8'>
					<Input
						label='Upload Image'
						type='file'
						name='file'
						accept='image/*'
						className='hidden'
						onchange={onFileChange}
						labelStyles='me-auto'
					/>
					<img
						src={image.src}
						alt={image.title}
					/>
				</div>
			</div>

			<Codeblock language='jsx'>
				{`import {Input} from '@/components'

const [image, SetImage] = useState({
	src: '',
	title: '',
})

const onFileChange = (e: any) => {
	const file = e.target.files[0]
	let image = {
		src: URL.createObjectURL(file),
		title: file.name,
	}
	SetImage(image)
}
		
<Input
	label='Upload Image'
	type='file'
	name='file'
	accept='image/*'
	className='hidden'
	onchange={onFileChange}
/>
<img
	src={image.src}
	alt={image.title}
/>`}
			</Codeblock>

			<h3>Number</h3>

			<div className='form mb-8 justify-start gap-8 bg-light p-4'>
				<Input
					label='Maximum of 9'
					labelStyles='items-center'
					name='pax'
					type='number'
					value={1}
					min={1}
					max={9}
				/>
			</div>

			<Codeblock language='jsx'>
				{`import {Input} from '@/components'
		
<Input
	label='Maximum of 9'
	labelStyles='items-center'
	name='pax'
	type='number'
	value={1}
	min={1}
	max={9}
/>`}
			</Codeblock>

			<h3>URL</h3>

			<div className='form mb-8 justify-start gap-8 bg-light p-4'>
				<Input
					label='Blog'
					name='blog'
					placeholder='Link to your blog'
					type='url'
				/>
			</div>

			<Codeblock language='jsx'>
				{`import {Input} from '@/components'
		
<Input
	label='Blog'
	name='blog'
	placeholder='HTTPS://'
	type='url'
/>`}
			</Codeblock>
		</>
	)
}

export default InputTemplate
