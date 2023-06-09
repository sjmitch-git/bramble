'use client'

import { useRef, useState } from 'react'
import Select from '@/components/select'
import Codeblock from '@/components/codeblock'

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
					{`import Select from '@/components/select'
                    
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
		styles='text-xs'
		onChange={handleChange}
		value={fruit}
		id='select01'
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
		styles='light text-sm'
		onChange={handleChange}
		value={fruit}
		id='select01'
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
		styles='dark'
		onChange={handleChange}
		value={fruit}
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
		styles='bg-info text-light outline text-xl'
		onChange={handleChange}
		value={fruit}
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
		styles='bg-success text-light outline outline-4 text-3xl'
		onChange={handleChange}
		value={fruit}
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
				Add TailwindCSS font-size utility class to <code>styles</code> attribute:{' '}
				<code>styles='text-xs'</code>
			</p>
			<div className='mb-8 flex flex-wrap items-center justify-center gap-4 bg-gray-300 p-4'>
				<Select
					styles='text-xs'
					onChange={handleChange}
					value={fruit}
					id='select01'
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
					styles='light text-sm'
					onChange={handleChange}
					value={fruit}
					id='select01'
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
					styles='dark'
					onChange={handleChange}
					value={fruit}
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
					styles='bg-info text-light outline text-xl'
					onChange={handleChange}
					value={fruit}
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
					styles='bg-success text-light outline outline-4 text-3xl'
					onChange={handleChange}
					value={fruit}
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
				Emojis can be used in <code>option</code> element, unlike <code>svg</code>.
			</p>
			<div className='mb-8 flex flex-wrap items-center justify-center gap-4 bg-gray-300 p-4'>
				<Select
					styles='dark circle text-sm'
					onChange={handleChange}
					value={fruit}
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
					styles='dark circle text-xl'
					onChange={handleChange}
					value={fruit}
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
					styles='dark circle text-3xl'
					onChange={handleChange}
					value={fruit}
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
					styles='dark circle text-5xl'
					onChange={handleChange}
					value={fruit}
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
					styles='dark circle text-7xl'
					onChange={handleChange}
					value={fruit}
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
					styles='dark rounded-lg text-3xl'
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
	styles='dark circle text-sm'
	onChange={handleChange}
	value={fruit}
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
	styles='dark circle text-xl'
	onChange={handleChange}
	value={fruit}
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
	styles='dark circle text-3xl'
	onChange={handleChange}
	value={fruit}
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
	styles='dark circle text-5xl'
	onChange={handleChange}
	value={fruit}
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
	styles='dark circle text-7xl'
	onChange={handleChange}
	value={fruit}
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
	styles='dark rounded-lg text-3xl'
	onChange={handleChange}
	value={fruit}
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
				Use <code>text-size-inherit</code> on <code>select</code> to inherit{' '}
				<code>label</code> font-size.
			</p>

			<div className='mb-0 flex flex-wrap items-center justify-center gap-12 bg-gray-300 p-4'>
				<label className='label'>
					Select Fruit
					<Select
						styles='dark'
						onChange={handleChange}
						value={fruit}
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
				</label>

				<label className='label text-3xl'>
					Select Fruit
					<Select
						styles='dark text-size-inherit'
						onChange={handleChange}
						value={fruit}
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
				</label>
			</div>
			<div className='mb-8'>
				<Codeblock language='jsx'>{`<label className='label'>
	Select Fruit
	<Select
		styles='dark'
		onChange={handleChange}
		value={fruit}
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
</label>

<label className='label text-3xl'>
	Select Fruit
	<Select
		styles='dark text-size-inherit'
		onChange={handleChange}
		value={fruit}
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
</label>
`}</Codeblock>
			</div>
			<div className='mb-0 flex flex-wrap items-center justify-center gap-12 bg-gray-300 p-4'>
				<label className='label col'>
					Select Fruit
					<Select
						styles='dark'
						onChange={handleChange}
						value={fruit}
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
				</label>

				<label className='label col'>
					Select Fruit
					<Select
						styles='dark text-3xl'
						onChange={handleChange}
						value={fruit}
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
				</label>

				<label className='label col text-3xl'>
					Select Fruit
					<Select
						styles='dark text-size-inherit'
						onChange={handleChange}
						value={fruit}
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
				</label>
			</div>
			<div className='mb-8'>
				<Codeblock language='jsx'>{`<label className='label col'>
	Select Fruit
	<Select
		styles='dark'
		onChange={handleChange}
		value={fruit}
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
</label>

<label className='label col'>
	Select Fruit
	<Select
		styles='dark text-3xl'
		onChange={handleChange}
		value={fruit}
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
</label>

<label className='label col text-3xl'>
	Select Fruit
	<Select
		styles='dark text-size-inherit'
		onChange={handleChange}
		value={fruit}
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
</label>`}</Codeblock>
			</div>
			<h2>Optgroup</h2>
			<div className='mb-0 flex flex-wrap items-center justify-center gap-12 bg-gray-300 p-4'>
				<label className='label col text-xl'>
					Select Drink
					<Select
						styles='dark text-size-inherit'
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
				</label>
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

<label className='label col text-xl'>
	Select Drink
	<Select
		styles='dark text-size-inherit'
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
</label>`}
			</Codeblock>
			<h2>Disabled</h2>
			<div className='mb-0 flex flex-wrap items-center justify-center gap-12 bg-gray-300 p-4'>
				<label className='label col text-xl'>
					Select Drink
					<Select
						styles='dark text-size-inherit'
						onChange={handleDrinksChange}
						value={drink}
						nocaret={true}
						disabled={true}
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
				</label>
			</div>
			<Codeblock language='jsx'>{`<Select disabled={true}`}</Codeblock>
			<h2>Required</h2>
			<p>
				An asterisk (<span className='text-danger'>*</span>) indicates a required field
			</p>
			<div className='mb-0 flex flex-col flex-wrap justify-start gap-12 bg-gray-300 p-4'>
				<label className='label col me-auto text-xl'>
					Select Drink
					<Select
						styles='dark text-size-inherit'
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
				</label>
				<label className='label text-xl'>
					Select Drink
					<Select
						styles='dark text-size-inherit'
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
				</label>
			</div>
			<Codeblock language='jsx'>{`<Select required={true} ...`}</Codeblock>
			<h2>RTL</h2>
			<div
				className='mb-0 flex flex-col flex-wrap justify-start gap-12 bg-gray-300 p-4'
				dir='rtl'
			>
				<label className='label col me-auto text-xl'>
					Select Drink
					<Select
						styles='dark text-size-inherit'
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
				</label>
				<label className='label text-xl'>
					Select Drink
					<Select
						styles='dark text-size-inherit'
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
				</label>
			</div>
		</>
	)
}

export default SelectTemplate
