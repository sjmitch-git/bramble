'use client'

import { useState } from 'react'

import {
	Codeblock,
	RadioGroup,
	AmexIcon,
	DinersClubIcon,
	DiscoverIcon,
	JcbIcon,
	MasterCardIcon,
	VisaIcon,
} from '@/ui'

import data from '@/data/cards.json'

const fruits = [
	{ id: 'apples', emoji: '🍏' },
	{ id: 'bananas', emoji: '🍌' },
	{ id: 'grapes', emoji: '🍇' },
	{ id: 'lemons', emoji: '🍋' },
]

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

const getEmoji = (key: string) => {
	for (let i = 0; i < fruits.length; i++) {
		if (fruits[i].id === key) return fruits[i].emoji
	}
}

interface TData {
	id: string
	name: string
}

const getType = (id: string): TData | undefined => {
	for (let index = 0; index < data.length; index++) {
		if (data[index].id === id) return data[index]
	}
	return
}

const RadioGroupTemplate = () => {
	const [type, setType] = useState<TData>(null!)

	const handleChange = (e: any) => {
		let type = getType(e.target.value.toLowerCase())
		if (type) setType(type)
	}

	return (
		<>
			<h2>Usage</h2>

			<h3>Labels</h3>

			<div className='mb-8 border p-4'>
				<RadioGroup
					data={data}
					name='fruit'
					onChange={handleChange}
					selected={type?.id}
					className='mx-auto max-w-md'
					labelStyles='bg-neutral rounded-md'
				/>
			</div>

			<Codeblock language='jsx'>
				{`import {
	RadioGroup
} from '@/ui'

const data = [
	{
		"id": "amex",
		"name": "American Express",
	},
	{
		"id": "dinersclub",
		"name": "Diners Club",
	},
	{
		"id": "discover",
		"name": "Discover",
	},
	{
		"id": "jcb",
		"name": "JCB",
	},
	{
		"id": "mastercard",
		"name": "MasterCard",
	},
	{
		"id": "visa",
		"name": "Visa",
	}
]

interface IData {
	id: string
	name: string
}

const getType = (id: string): IData | undefined => {
	for (let index = 0; index < data.length; index++) {
		if (data[index].id === id) return data[index]
	}
	return
}

const [type, setType] = useState<TData>(null!)

const handleChange = (e: any) => {
    let type = getType(e.target.value.toLowerCase())
    if (type) setType(type)
}
				
<RadioGroup
    data={data}
    name='fruit'
    onChange={handleChange}
    selected={type?.id}
    className='mx-auto max-w-md'
    labelStyles='bg-neutral rounded-md'
/>`}
			</Codeblock>

			<h3>Icons</h3>

			<div className='mb-8 border p-4'>
				<RadioGroup
					data={data}
					name='cc-type'
					getIcon={getIcon}
					onChange={handleChange}
					selected={type?.id}
					icons={true}
					className='mx-auto max-w-sm'
					labelStyles='rounded-lg'
				/>
			</div>

			<Codeblock language='jsx'>
				{`import {
	RadioGroup,
    // icons
	AmexIcon,
	DinersClubIcon,
	DiscoverIcon,
	JcbIcon,
	MasterCardIcon,
	VisaIcon,
} from '@/ui'

const data = [
	{
		"id": "amex",
		"name": "American Express",
	}
    ...
]

interface IData {
	id: string
	name: string
}

const getType = (id: string): IData | undefined => {
	for (let index = 0; index < data.length; index++) {
		if (data[index].id === id) return data[index]
	}
	return
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

const [type, setType] = useState<TData>(null!)

const handleChange = (e: any) => {
    let type = getType(e.target.value.toLowerCase())
    if (type) setType(type)
}
				
<RadioGroup
    data={data}
    name='cc-type'
    getIcon={getIcon}
    onChange={handleChange}
    selected={type?.id}
    icons={true}
    className='mx-auto max-w-sm'
    labelStyles='rounded-lg'
/>`}
			</Codeblock>

			<h3>Emojis</h3>

			<div className='mb-8 border p-4'>
				<RadioGroup
					data={fruits}
					name='fruits'
					getIcon={getEmoji}
					onChange={handleChange}
					selected={type?.id}
					icons={true}
					className='mx-auto max-w-sm grid-cols-4'
					labelStyles='rounded-full border-4 aspect-square text-4xl bg-dark'
				/>
			</div>

			<Codeblock language='jsx'>
				{`import {
	RadioGroup,
} from '@/ui'

const data = [
	{ id: 'apples', emoji: '🍏' },
	{ id: 'bananas', emoji: '🍌' },
	{ id: 'grapes', emoji: '🍇' },
	{ id: 'lemons', emoji: '🍋' },
]

const getEmoji = (key: string) => {
	for (let i = 0; i < fruits.length; i++) {
		if (fruits[i].id === key) return fruits[i].emoji
	}
}
				
<RadioGroup
    data={data}
    name='fruits'
    getIcon={getEmoji}
    onChange={handleChange}
    selected={type?.id}
    icons={true}
    className='mx-auto max-w-sm grid-cols-4'
    labelStyles='rounded-full border-4 aspect-square text-4xl bg-dark'
/>`}
			</Codeblock>
		</>
	)
}

export default RadioGroupTemplate
