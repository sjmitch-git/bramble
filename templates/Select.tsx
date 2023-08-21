'use client'

import { useState } from 'react'

import { Codeblock, Select } from '@/components'

const SelectTemplate = () => {
	const [fruit, setFruit] = useState('')
	const [drink, setDrink] = useState('')

	const handleChange = (e: React.FormEvent<HTMLSelectElement>): void => {
		setFruit(e.currentTarget.value)
	}

	const handleDrinksChange = (e: React.FormEvent<HTMLSelectElement>): void => {
		setDrink(e.currentTarget.value)
	}

	const data = [
		{ name: 'apples', emoji: '🍏' },
		{ name: 'bananas', emoji: '🍌' },
		{ name: 'grapes', emoji: '🍇' },
		{ name: 'lemons', emoji: '🍋' },
	]

	const drinks = [
		{ name: 'beer', emoji: '🍺', alcoholic: true },
		{ name: 'milk', emoji: '🥛', alcoholic: false },
		{ name: 'wine', emoji: '🍷', alcoholic: true },
		{ name: 'pop', emoji: '🥤', alcoholic: false },
		{ name: 'tea', emoji: '☕', alcoholic: false },
		{ name: 'whiskey', emoji: '🥃', alcoholic: true },
	]

	return (
		<>
			<h2>Usage</h2>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import {Select} from '@/components'
                    
const [fruit, setFruit] = useState('')

const handleChange = (e: React.FormEvent<HTMLSelectElement>): void => {
	setFruit(e.currentTarget.value)
}

const data = [
    { name: 'apples', emoji: '🍏' },
    { name: 'bananas', emoji: '🍌' },
    { name: 'grapes', emoji: '🍇' },
    { name: 'lemons', emoji: '🍋' },
]
    
return (			
	<Select
		onChange={handleChange}
		value={fruit}
		label='Fruit'
	>
		<option
			value=''
			disabled
			hidden
		>
			Select
		</option>
		{data.map((el, index) => (
			<option
				key={index}
				value={el.name}
			>
				{el.name}
			</option>
		))}
	</Select>

)`}
				</Codeblock>
			</div>

			<h2>Sizes</h2>
			<p>
				Add TailwindCSS font-size utility class to <code>className</code> attribute.
			</p>
			<div className='mb-8 flex flex-wrap items-center justify-center gap-4 bg-gray-300 p-4'>
				<Select
					className='text-xs'
					onChange={handleChange}
					value={fruit}
					id='select01'
					label='"text-xs"'
				>
					<option
						value=''
						disabled
						hidden
					>
						Select
					</option>
					{data.map((el, index) => (
						<option
							key={index}
							value={el.name}
						>
							{el.name}
						</option>
					))}
				</Select>

				<Select
					className='light text-sm'
					onChange={handleChange}
					value={fruit}
					id='select01'
					label='"text-sm"'
				>
					<option
						value=''
						disabled
						hidden
					>
						Select
					</option>
					{data.map((el, index) => (
						<option
							key={index}
							value={el.name}
						>
							{el.name}
						</option>
					))}
				</Select>

				<Select
					className='light'
					onChange={handleChange}
					value={fruit}
					label='default size'
				>
					<option
						value=''
						disabled
						hidden
					>
						Select
					</option>
					{data.map((el, index) => (
						<option
							key={index}
							value={el.name}
						>
							{el.name}
						</option>
					))}
				</Select>

				<Select
					className='text-xl'
					onChange={handleChange}
					value={fruit}
					label='"text-xl"'
				>
					<option
						value=''
						disabled
						hidden
					>
						Select
					</option>
					{data.map((el, index) => (
						<option
							key={index}
							value={el.name}
						>
							{el.name}
						</option>
					))}
				</Select>

				<Select
					className='text-3xl'
					onChange={handleChange}
					value={fruit}
					label='"text-3xl"'
				>
					<option
						value=''
						disabled
						hidden
					>
						Select
					</option>
					{data.map((el, index) => (
						<option
							key={index}
							value={el.name}
						>
							{el.name}
						</option>
					))}
				</Select>
			</div>
			<h2>Emojis</h2>
			<p>
				Emojis can be used in <code>option</code> element. Add{' '}
				<code>nocaret=&#123;true&#125;</code>.
			</p>
			<div className='mb-8 flex flex-wrap items-center justify-center gap-4 bg-gray-300 p-4'>
				<Select
					className='circle dark text-sm'
					onChange={handleChange}
					value={fruit}
					nocaret={true}
				>
					<option
						value=''
						disabled
						hidden
					>
						➕
					</option>
					{data.map((el, index) => (
						<option
							key={index}
							value={el.name}
						>
							{el.emoji}
						</option>
					))}
				</Select>

				<Select
					className='circle dark text-xl'
					onChange={handleChange}
					value={fruit}
					nocaret={true}
				>
					<option
						value=''
						disabled
						hidden
					>
						➕
					</option>
					{data.map((el, index) => (
						<option
							key={index}
							value={el.name}
						>
							{el.emoji}
						</option>
					))}
				</Select>

				<Select
					className='circle dark text-3xl'
					onChange={handleChange}
					value={fruit}
					nocaret={true}
				>
					<option
						value=''
						disabled
						hidden
					>
						➕
					</option>
					{data.map((el, index) => (
						<option
							key={index}
							value={el.name}
						>
							{el.emoji}
						</option>
					))}
				</Select>

				<Select
					className='circle dark text-5xl'
					onChange={handleChange}
					value={fruit}
					nocaret={true}
				>
					<option
						value=''
						disabled
						hidden
					>
						➕
					</option>
					{data.map((el, index) => (
						<option
							key={index}
							value={el.name}
						>
							{el.emoji}
						</option>
					))}
				</Select>

				<Select
					className='circle dark text-7xl'
					onChange={handleChange}
					value={fruit}
					nocaret={true}
				>
					<option
						value=''
						disabled
						hidden
					>
						➕
					</option>
					{data.map((el, index) => (
						<option
							key={index}
							value={el.name}
						>
							{el.emoji}
						</option>
					))}
				</Select>

				<Select
					className='dark rounded-lg text-3xl'
					onChange={handleChange}
					value={fruit}
					nocaret={true}
				>
					<option
						value=''
						disabled
						hidden
					>
						➕ Select
					</option>
					{data.map((el, index) => (
						<option
							key={index}
							value={el.name}
						>
							{el.emoji} {el.name}
						</option>
					))}
				</Select>
			</div>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<Select
	className='dark circle'
	onChange={handleChange}
	value={fruit}
	nocaret={true}
>
	<option
		value=''
		disabled
		hidden
	>
		➕
	</option>
	{data.map((el, index) => (
		<option
			key={index}
			value={el.name}
		>
			{el.emoji}
		</option>
	))}
</Select>

// with emoji and text 
<Select
	className='dark rounded-lg text-3xl'
	onChange={handleChange}
	value={fruit}
	nocaret={true}
>
	<option
		value=''
		disabled
		hidden
	>
		➕ Select
	</option>
	{data.map((el, index) => (
		<option
			key={index}
			value={el.name}
		>
			{el.emoji} {el.name}
		</option>
	))}
</Select>`}
				</Codeblock>
			</div>

			<h2>Labels</h2>

			<p>
				Add <code>labelStyles='row'</code> for inline display.
			</p>

			<div className='mb-0 flex flex-wrap items-center justify-center gap-12 bg-gray-300 p-4'>
				<Select
					className='dark'
					onChange={handleChange}
					value={fruit}
					label='Select Fruit'
				>
					<option
						value=''
						disabled
						hidden
					>
						Select
					</option>
					{data.map((el, index) => (
						<option
							key={index}
							value={el.name}
						>
							{el.name}
						</option>
					))}
				</Select>

				<Select
					className='dark'
					onChange={handleChange}
					value={fruit}
					label='Select Fruit'
					labelStyles='row'
				>
					<option
						value=''
						disabled
						hidden
					>
						Select
					</option>
					{data.map((el, index) => (
						<option
							key={index}
							value={el.name}
						>
							{el.name}
						</option>
					))}
				</Select>
			</div>
			<div className='mb-8'>
				<Codeblock language='jsx'>{`<Select
	className='dark'
	onChange={handleChange}
	value={fruit}
	label='Select Fruit'
	labelStyles='row' // add this
>
	<option
		value=''
		disabled
		hidden
	>
		Select
	</option>
	{data.map((el, index) => (
		<option
			key={index}
			value={el.name}
		>
			{el.name}
		</option>
	))}
</Select>
`}</Codeblock>
			</div>

			<h2 id='numbers'>Numbers</h2>
			<div className='mb-0 flex flex-wrap items-center justify-center gap-12 bg-gray-300 p-4'>
				<Select
					className='lg dark'
					label='Select Page'
					labelStyles='row'
					onChange={handleChange}
				>
					{[...new Array(24)].map((_el, index) => (
						<option
							key={index}
							value={(index + 1).toString()}
						>
							{index + 1}
						</option>
					))}
				</Select>
			</div>
			<Codeblock language='jsx'>
				{`<Select
	className='lg dark'
	label='Select Page'
	labelStyles='row'
	onChange={handleChange}
>
	{[...new Array(24)].map((_el, index) => (
		<option
			key={index}
			value={(index + 1).toString()}
		>
			{index + 1}
		</option>
	))}
</Select>`}
			</Codeblock>
			<h2>Optgroup</h2>
			<div className='mb-0 flex flex-wrap items-center justify-center gap-12 bg-gray-300 p-4'>
				<Select
					className='text-size-inherit dark'
					onChange={handleDrinksChange}
					value={drink}
					nocaret={true}
					label='Select Drink'
				>
					<option
						value=''
						disabled
						hidden
					>
						➕ Select
					</option>
					<optgroup label='Non-Alchoholic'>
						{drinks.map(
							(el, index) =>
								!el.alcoholic && (
									<option
										key={index}
										value={el.name}
									>
										{el.emoji} {el.name}
									</option>
								)
						)}
					</optgroup>
					<optgroup label='Alchoholic'>
						{drinks.map(
							(el, index) =>
								el.alcoholic && (
									<option
										key={index}
										value={el.name}
									>
										{el.emoji} {el.name}
									</option>
								)
						)}
					</optgroup>
				</Select>
			</div>
			<Codeblock language='jsx'>
				{`const drinks = [
		{ name: 'beer', emoji: '🍺', alcoholic: true },
		{ name: 'milk', emoji: '🥛', alcoholic: false },
		{ name: 'wine', emoji: '🍷', alcoholic: true },
		{ name: 'pop', emoji: '🥤', alcoholic: false },
		{ name: 'tea', emoji: '☕', alcoholic: false },
		{ name: 'whiskey', emoji: '🥃', alcoholic: true },
]

<Select
	className='dark text-size-inherit'
	onChange={handleDrinksChange}
	value={drink}
	nocaret={true}
>
	<option
		value=''
		disabled
		hidden
	>
		➕ Select
	</option>
	<optgroup label='Non-Alchoholic'>
		{drinks.map(
			(el, index) =>
				!el.alcoholic && (
					<option
						key={index}
						value={el.name}
					>
						{el.emoji} {el.name}
					</option>
				)
		)}
	</optgroup>
	<optgroup label='Alchoholic'>
		{drinks.map(
			(el, index) =>
				el.alcoholic && (
					<option
						key={index}
						value={el.name}
					>
						{el.emoji} {el.name}
					</option>
				)
		)}
	</optgroup>
</Select>
`}
			</Codeblock>
			<h2>Disabled</h2>
			<div className='mb-0 flex flex-wrap items-center justify-center gap-12 bg-gray-300 p-4'>
				<Select
					className='text-size-inherit dark'
					onChange={handleDrinksChange}
					nocaret={true}
					disabled={true}
					label='Select Drink'
				>
					<option
						value=''
						disabled
						hidden
					>
						➕ Select
					</option>
					<optgroup label='Non-Alchoholic'>
						{drinks.map(
							(el, index) =>
								!el.alcoholic && (
									<option
										key={index}
										value={el.name}
									>
										{el.emoji} {el.name}
									</option>
								)
						)}
					</optgroup>
					<optgroup label='Alchoholic'>
						{drinks.map(
							(el, index) =>
								el.alcoholic && (
									<option
										key={index}
										value={el.name}
									>
										{el.emoji} {el.name}
									</option>
								)
						)}
					</optgroup>
				</Select>
			</div>
			<Codeblock language='jsx'>{`<Select disabled={true}`}</Codeblock>
			<h2>Required</h2>
			<p>
				An asterisk (<span className='text-danger'>*</span>) indicates a required field
			</p>
			<div className='mb-0 flex justify-center gap-12 bg-gray-300 p-4'>
				<Select
					className='text-size-inherit dark'
					label='Select Drink'
					onChange={handleDrinksChange}
					value={drink}
					nocaret={true}
					required={true}
				>
					<option
						value=''
						disabled
						hidden
					>
						➕ Select
					</option>
					<optgroup label='Non-Alchoholic'>
						{drinks.map(
							(el, index) =>
								!el.alcoholic && (
									<option
										key={index}
										value={el.name}
									>
										{el.emoji} {el.name}
									</option>
								)
						)}
					</optgroup>
					<optgroup label='Alchoholic'>
						{drinks.map(
							(el, index) =>
								el.alcoholic && (
									<option
										key={index}
										value={el.name}
									>
										{el.emoji} {el.name}
									</option>
								)
						)}
					</optgroup>
				</Select>

				<Select
					className='text-size-inherit dark'
					label='Select Drink'
					labelStyles='row'
					onChange={handleDrinksChange}
					value={drink}
					nocaret={true}
					required={true}
				>
					<option
						value=''
						disabled
						hidden
					>
						➕ Select
					</option>
					<optgroup label='Non-Alchoholic'>
						{drinks.map(
							(el, index) =>
								!el.alcoholic && (
									<option
										key={index}
										value={el.name}
									>
										{el.emoji} {el.name}
									</option>
								)
						)}
					</optgroup>
					<optgroup label='Alchoholic'>
						{drinks.map(
							(el, index) =>
								el.alcoholic && (
									<option
										key={index}
										value={el.name}
									>
										{el.emoji} {el.name}
									</option>
								)
						)}
					</optgroup>
				</Select>
			</div>
			<Codeblock language='jsx'>{`<Select required={true} ...`}</Codeblock>
			<h2>RTL</h2>
			<div
				className='mb-0 flex flex-col flex-wrap justify-start gap-12 bg-gray-300 p-4'
				dir='rtl'
			>
				<Select
					className='text-size-inherit dark'
					label='Select Fruit'
					onChange={handleDrinksChange}
					value={drink}
					nocaret={true}
					required={true}
				>
					<option
						value=''
						disabled
						hidden
					>
						➕ Select
					</option>
					<optgroup label='Non-Alchoholic'>
						{drinks.map(
							(el, index) =>
								!el.alcoholic && (
									<option
										key={index}
										value={el.name}
									>
										{el.emoji} {el.name}
									</option>
								)
						)}
					</optgroup>
					<optgroup label='Alchoholic'>
						{drinks.map(
							(el, index) =>
								el.alcoholic && (
									<option
										key={index}
										value={el.name}
									>
										{el.emoji} {el.name}
									</option>
								)
						)}
					</optgroup>
				</Select>

				<Select
					className='text-size-inherit dark'
					label='Select Fruit'
					labelStyles='row'
					onChange={handleDrinksChange}
					value={drink}
					nocaret={true}
					required={true}
				>
					<option
						value=''
						disabled
						hidden
					>
						➕ Select
					</option>
					<optgroup label='Non-Alchoholic'>
						{drinks.map(
							(el, index) =>
								!el.alcoholic && (
									<option
										key={index}
										value={el.name}
									>
										{el.emoji} {el.name}
									</option>
								)
						)}
					</optgroup>
					<optgroup label='Alchoholic'>
						{drinks.map(
							(el, index) =>
								el.alcoholic && (
									<option
										key={index}
										value={el.name}
									>
										{el.emoji} {el.name}
									</option>
								)
						)}
					</optgroup>
				</Select>
			</div>
		</>
	)
}

export default SelectTemplate
