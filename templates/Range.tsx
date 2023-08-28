'use client'

import { useState } from 'react'
import { round } from '@smitch/js-lib'

import { Codeblock, Range } from '@/ui'

const RangeTemplate = () => {
	const [range, setRange] = useState(0)
	const [range2, setRange2] = useState(0)
	const [audio, setAudio] = useState(0.5)
	const [red, setRed] = useState(50)
	const [green, setGreen] = useState(50)
	const [blue, setBlue] = useState(50)
	const [opacity, setOpacity] = useState(1)

	const handleRangeChange = (value: number) => {
		setRange(value)
	}

	const handleRangeChange2 = (value: number) => {
		setRange2(value)
	}

	const handleAudioChange = (value: number) => {
		setAudio(value)
	}

	const handleRedChange = (value: number) => {
		setRed(value)
	}

	const handleGreenChange = (value: number) => {
		setGreen(value)
	}

	const handleBlueChange = (value: number) => {
		setBlue(value)
	}

	const handleOpacityChange = (value: number) => {
		setOpacity(value)
	}

	const getRGBvalue = (value: number) => {
		return round((255 / 100) * value)
	}

	const colorsStyle = {
		backgroundColor: `rgba(
			${getRGBvalue(red)},
			${getRGBvalue(green)},
			${getRGBvalue(blue)},
			${opacity})`,
	}

	return (
		<>
			<h2>Usage</h2>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import {Range} from '@/ui'

const [range, setRange] = useState(0)

const handleRangeChange = (value: number) => {
	setRange(value)
}

return (			
	<Range
		onRangeChange={handleRangeChange}
		label='Select Range'
		feedback={true}
	/>
)`}
				</Codeblock>
			</div>

			<h2>Default</h2>

			<div className='bg-light p-4'>
				<Range
					onRangeChange={handleRangeChange}
					label='Select Range'
					feedback={true}
				/>
			</div>

			<h2>Options</h2>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`min?: number        // default = 0
max?: number        // default = 100
step?: number       // default = 1
clr1?: string       // range and thumbnail colour - default = '#f59e0b'
clr2?: string       // background colour - default = '#9e9e9e'
initial?: number    // initial range value - default = 0
vertical?: boolean  // vertical orientation - default = false
className?: string  // any Tailwind classes
onRangeChange: (number: number) => void | undefined // returns range value
label?: string				// add label content
labelStyles?: string		// label styles
feedback?: boolean			// add feedback message
feedbackMessage?: string	// feedback message content`}
				</Codeblock>
			</div>

			<h2>Vertical</h2>

			<div className='relative mb-4 bg-light p-4'>
				<Range
					vertical={true}
					onRangeChange={handleRangeChange2}
					className=''
					label='Select Range'
					feedback={true}
				/>
			</div>
			<div className='mb-8'>
				<Codeblock language='jsx'>
					{`<Range
	vertical={true}
	onRangeChange={handleRangeChange2}
	className=''
	label='Select Range'
	feedback={true}
/>>`}
				</Codeblock>
			</div>

			<h2>Examples</h2>

			<h3>Set Colour</h3>

			<div className='bg-light p-4 font-mono'>
				<div className='mx-auto mb-8 flex max-w-md flex-col gap-8'>
					<Range
						onRangeChange={handleRedChange}
						clr1='red'
						initial={50}
						label='red'
					/>

					<Range
						onRangeChange={handleGreenChange}
						clr1='green'
						initial={50}
						label='green'
					/>

					<Range
						onRangeChange={handleBlueChange}
						clr1='blue'
						initial={50}
						label='blue'
					/>

					<Range
						onRangeChange={handleOpacityChange}
						max={1}
						step={0.1}
						initial={1}
						clr1='black'
						label='alpha'
					/>
				</div>

				<div className='flex items-center justify-center gap-4'>
					<div className='aspect-square w-[80px] bg-white'>
						<div
							className='aspect-square w-full'
							style={colorsStyle}
						></div>
					</div>

					<p className='m-0 p-0'>
						rgba({getRGBvalue(red)},{getRGBvalue(green)},{getRGBvalue(blue)},{opacity})
					</p>
				</div>
			</div>
			<div className='mb-8'>
				<Codeblock language='jsx'>
					{`import Range from '@/components/range'
import { round } from '@smitch/js-lib'
					
const [red, setRed] = useState(50)
const [green, setGreen] = useState(50)
const [blue, setBlue] = useState(50)
const [opacity, setOpacity] = useState(1)

const handleRedChange = (value: number) => {
	setRed(value)
}

const handleGreenChange = (value: number) => {
	setGreen(value)
}

const handleBlueChange = (value: number) => {
	setBlue(value)
}

const handleOpacityChange = (value: number) => {
	setOpacity(value)
}

const getRGBvalue = (value: number) => {
	return round((255 / 100) * value)
}
	
<Range
	onRangeChange={handleRedChange}
	clr1='red'
	initial={50}
	label='r'
/>

<Range
	onRangeChange={handleGreenChange}
	clr1='green'
	initial={50}
	label='g'
/>

<Range
	onRangeChange={handleBlueChange}
	clr1='blue'
	initial={50}
	label='b'
/>

<Range
	onRangeChange={handleOpacityChange}
	max={1}
	step={0.1}
	initial={1}
	clr1='black'
	label='a'
					/>

<p>
	rgba({getRGBvalue(red)},{getRGBvalue(green)},{getRGBvalue(blue)},{opacity})
</p>`}
				</Codeblock>
			</div>
			<h3>Volume Control</h3>

			<div className='mb-4 bg-light p-4'>
				<Range
					onRangeChange={handleAudioChange}
					max={1}
					step={0.1}
					initial={0.5}
					clr1='purple'
					label='Set Volume'
					feedback={true}
					feedbackMessage='Volume'
				/>
			</div>
			<div className='mb-8'>
				<Codeblock language='jsx'>
					{`<Range
	onRangeChange={handleAudioChange}
	max={1}
	step={0.1}
	initial={0.5}
	clr1='purple'
	label='Set Volume'
	feedback={true}
	feedbackMessage='Volume'
/>`}
				</Codeblock>
			</div>
		</>
	)
}

export default RangeTemplate
