'use client'

import { useState, useEffect } from 'react'

import {
	Codeblock,
	Form,
	Input,
	Range,
	Autocomplete,
	Switch,
	Counter,
	Login,
	Register,
	NewsLetter,
	User,
	CreditCard,
	RadioGroup,
} from '@/components'

import data from '@/data/countries.json'

const FormTemplate = () => {
	const [color, setColor] = useState('#FFFFFF')
	const [today, setToday] = useState('')
	const [tomorrow, setTomorrow] = useState('')
	const [departing, setDepart] = useState('')
	const [returning, setReturn] = useState('')
	const [image, SetImage] = useState({
		src: '',
		title: '',
		size: '',
	})
	const [audio, setAudio] = useState(0.5)
	const [number, setNumber] = useState(1)

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
		const tomorrow = formatDate(new Date(+new Date() + 86400000))
		setDepart(today)
		setToday(today)
		setTomorrow(tomorrow)
	}, [])

	const onDateChange = (event: any) => {
		const target = event.target
		target.name === 'depart' ? setDepart(target.value) : setReturn(target.value)
	}

	const onSwitchChange = (event: any) => {
		const target = event.target
	}

	const handleAudioChange = (value: number) => {
		setAudio(value)
	}

	const onsubmit = (event: any) => {
		event.preventDefault()
	}

	const onColorChange = (event: any) => {
		setColor(event.target.value)
	}

	const onListChange = (event: any) => {
		if (data.indexOf(event.target.value) !== -1) alert('You selected ' + event.target.value)
	}

	const onFileChange = (e: any) => {
		const files = e.target.files
		for (let i = 0; i < files.length; i++) {
			const el = files[i]
			let image = {
				src: URL.createObjectURL(el),
				title: el.name,
				size: bytesToSize(el.size) + 'kb',
			}
			SetImage(image)
		}
	}

	const bytesToSize = (bytes: number) => {
		return `${(bytes / 1024).toFixed(1)}`
	}

	return (
		<>
			<h2>Usage</h2>
			<Codeblock language='jsx'>
				{`import { Form, Input, Range, Autocomplete } from '@/components'
				
<Form 
	legend='Input Types'
	btnLabel='Submit'
	name='inputexamples'
	btnStyles='mx-auto rounded'
	onSubmit={onsubmit}
	className='w-96 rounded bg-white p-4 text-center'
>
		<!-- Enter form content -->

		<p>
			What's your name?
		</p>

		<Input
			label='Name'
			name='name'
		/>
</Form>`}
			</Codeblock>
			<h2>Inputs</h2>

			<p>
				The following shows examples of{' '}
				<a href='#text'>
					<code>input[type='text']</code>
				</a>
				,{' '}
				<a href='#checkbox'>
					<code>input[type='checkbox']</code>
				</a>
				,{' '}
				<a href='#radio'>
					<code>input[type='radio']</code>
				</a>
				,{' '}
				<a href='#password'>
					<code>input[type='password']</code>
				</a>
				,{' '}
				<a href='#color'>
					<code>input[type='color']</code>
				</a>
				,{' '}
				<a href='#date'>
					<code>input[type='date']</code>
				</a>
				,{' '}
				<a href='#email'>
					<code>input[type='email']</code>
				</a>
				,{' '}
				<a href='#file'>
					<code>input[type='file']</code>
				</a>
				,{' '}
				<a href='#number'>
					<code>input[type='number']</code>
				</a>
				,{' '}
				<a href='#range'>
					<code>input[type='range']</code>
				</a>
				,{' '}
				<a href='#list'>
					<code>input[type='text'] list</code>
				</a>
			</p>
			<div className='mb-8 flex justify-center border bg-light p-1 md:p-4'>
				<Form
					legend='Input Types'
					autocomplete='on'
					btnLabel='Submit'
					name='inputexamples'
					btnStyles='rounded'
					closeLabel='Cancel'
					closeStyles='dark outline rounded'
					onSubmit={onsubmit}
					className='w-96 rounded bg-white p-2 text-center'
				>
					<p id='text'>What's your name?</p>

					<Input
						label='Name'
						name='name'
						autocomplete='name'
						placeholder='Enter your name'
					/>

					<p id='checkbox'>How do you take tea?</p>

					<Input
						label='Milk'
						name='tea'
						type='checkbox'
						value='milk'
					/>

					<Input
						label='Sugar'
						name='tea'
						type='checkbox'
						value='sugar'
					/>

					<p id='radio'>How old are you?</p>

					<div className='radios'>
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

					<p id='password'>Enter your password</p>

					<Input
						label='Password'
						name='password'
						autocomplete='current-password'
						type='password'
						required={true}
						pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
						hint='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
					/>

					<p id='color'>Choose your favourite colour</p>

					<Input
						name='favourite'
						type='color'
						value={color}
						onchange={onColorChange}
					/>

					<p id='date'>Select dates</p>

					<div className='grid grid-cols-2 gap-4'>
						<Input
							label='Check-in'
							name='depart'
							type='date'
							value={departing}
							min={today}
							max={returning}
							onchange={onDateChange}
						/>

						<Input
							label='Check-out'
							name='return'
							type='date'
							value={tomorrow}
							min={departing}
							onchange={onDateChange}
						/>
					</div>

					<p id='email'>What's your e-mail address?</p>

					<Input
						label='Email'
						type='email'
						name='email'
						autocomplete='email'
						required={true}
					/>

					<p id='file'>What is your avatar?</p>

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
					/>

					<p id='number'>How many passengers?</p>

					<Input
						label='Maximum of 9'
						labelStyles='items-center'
						name='pax'
						type='number'
						value={1}
						min={1}
						max={9}
					/>

					<p id='counter'>
						Using <code>Counter</code> component
					</p>

					<Counter
						label='Maximum of 9'
						labelStyles='items-center'
						name='pax2'
						value={1}
						min={1}
						max={9}
						onCountChange={(value) => {
							setNumber(value)
						}}
					/>

					<p id='range'>Volume Control</p>

					<Range
						onRangeChange={handleAudioChange}
						max={1}
						step={0.1}
						initial={0.5}
						clr1='orange'
						name='volume'
					/>

					<p className='mx-auto !border-0 !pt-0 text-center text-base'>Volume: {audio}</p>

					<p id='url'>Social Links</p>

					<Input
						label='Blog'
						name='blog'
						placeholder='Link to your blog'
						type='url'
					/>

					<Input
						label='LinkedIn'
						name='linkedin'
						placeholder='Link to your profile'
						type='url'
					/>

					<p id='list'>Where are you from?</p>

					<Autocomplete
						data={data}
						list='countries'
						label='Country'
						name='country'
						autocomplete='country name'
						placeholder='Select your country'
						onchange={onListChange}
					/>

					<p id='switch'>Switch?</p>

					<Switch
						label='I agree to terms and conditions'
						name='terms'
						required={true}
						onchange={onSwitchChange}
					/>

					<Switch
						label='I agree to terms and conditions'
						className='reverse'
						name='termssquare'
						required={true}
						round={false}
						switchColor='danger'
						onchange={onSwitchChange}
					/>

					<Switch
						label='Thin version'
						name='terms'
						className='thin'
						switchColor='warning'
					/>
				</Form>
			</div>
			<hr />
			<h2>Examples</h2>
			<h3>Login</h3>
			<div className='mb-4 flex justify-center border bg-light p-4'>
				<Login
					btnStyles='rounded'
					onSubmit={onsubmit}
					className='w-80 rounded bg-white p-4 text-center'
				/>
			</div>
			<Codeblock language='jsx'>
				{`import { Login } from '@/components'

const onsubmit = (event: any) => {
	// do something...
}

<Login
	method='post'
	btnStyles='rounded'
	onSubmit={onsubmit}
	className='w-80 rounded bg-white p-4 text-center'
/>`}
			</Codeblock>

			<h3>Register / Sign-up</h3>
			<div className='mb-4 flex justify-center border bg-light p-4'>
				<Register
					btnStyles='rounded'
					onSubmit={onsubmit}
					className='w-80 rounded bg-white p-4 text-center'
				/>
			</div>
			<Codeblock language='jsx'>
				{`import { Register } from '@/components'

const onsubmit = (event: any) => {
	// do something...
}

<Register
	btnStyles='rounded'
	onSubmit={onsubmit}
	className='w-80 rounded bg-white p-4 text-center'
/>`}
			</Codeblock>

			<h3>User</h3>
			<div className='mb-4 flex justify-center border bg-light p-4'>
				<User
					btnStyles='rounded'
					onSubmit={onsubmit}
					className='w-80 rounded bg-white p-4 text-center'
				/>
			</div>
			<Codeblock language='jsx'>
				{`import { User } from '@/components'

const onsubmit = (event: any) => {
	// do something...
}

<Register
	btnStyles='rounded'
	onSubmit={onsubmit}
	className='w-80 rounded bg-white p-4 text-center'
/>`}
			</Codeblock>

			<h3>Card Details</h3>
			<div className='mb-4 flex justify-center border bg-light p-4'>
				<CreditCard
					btnStyles='rounded'
					onSubmit={onsubmit}
					className='w-80 rounded bg-white p-4 text-center'
				/>
			</div>
			<Codeblock language='jsx'>
				{`import { CreditCard } from '@/components'

const onsubmit = (event: any) => {
	// do something...
}

<CreditCard
	btnStyles='rounded'
	onSubmit={onsubmit}
	className='w-80 rounded bg-white p-4 text-center'
/>`}
			</Codeblock>

			<h3>Newsletter</h3>
			<div className='mb-4 flex justify-center border bg-light p-4'>
				<NewsLetter
					btnStyles='rounded'
					onSubmit={onsubmit}
					className='w-80 rounded bg-white p-4 text-center'
				/>
			</div>
			<Codeblock language='jsx'>
				{`import { NewsLetter } from '@/components'

const onsubmit = (event: any) => {
	// do something...
}

<NewsLetter
	btnStyles='rounded'
	onSubmit={onsubmit}
	className='w-80 rounded bg-white p-4 text-center'
/>`}
			</Codeblock>
		</>
	)
}

export default FormTemplate
