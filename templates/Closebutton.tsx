'use client'

import React, { useState } from 'react'

import CloseButton from '@/components/button/CloseButton'
import Codeblock from '@/components/codeblock'

const CloseButtonTemplate = () => {
	const handleClick = () => {
		alert('You clicked me!')
	}

	return (
		<>
			<h2>Usage</h2>
			<div className='mb-0 bg-neutral p-4'>
				<CloseButton onClick={handleClick} />
			</div>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import CloseButton from '@/components/button/CloseButton'

<CloseButton onClick={handleClick} />`}
				</Codeblock>
			</div>

			<h2>Colours</h2>

			<div className='mb-12 flex justify-center gap-4 bg-light p-4'>
				<CloseButton onClick={handleClick} />
				<CloseButton
					onClick={handleClick}
					styles='secondary'
				/>
				<CloseButton
					onClick={handleClick}
					styles='info'
				/>
				<CloseButton
					onClick={handleClick}
					styles='success'
				/>
				<CloseButton
					onClick={handleClick}
					styles='danger'
				/>
				<CloseButton
					onClick={handleClick}
					styles='warning'
				/>
				<CloseButton
					onClick={handleClick}
					styles='dark'
				/>
				<CloseButton
					onClick={handleClick}
					styles='light'
				/>
				<CloseButton
					onClick={handleClick}
					styles='link'
				/>
			</div>

			<Codeblock language='jsx'>
				{`<CloseButton /> // default

<CloseButton styles='secondary'/>

<CloseButton styles='info'/>

<CloseButton styles='success'/>

<CloseButton styles='danger'/>

<CloseButton styles='warning'/>

<CloseButton styles='dark'/>

<CloseButton styles='light'/>

<CloseButton styles='link'/>`}
			</Codeblock>

			<h2>Circle</h2>

			<div className='mb-8 flex justify-center gap-4 bg-light p-4'>
				<CloseButton
					onClick={handleClick}
					styles='circle'
				/>
				<CloseButton
					onClick={handleClick}
					styles='secondary circle'
				/>
				<CloseButton
					onClick={handleClick}
					styles='info circle'
				/>
				<CloseButton
					onClick={handleClick}
					styles='success circle'
				/>
				<CloseButton
					onClick={handleClick}
					styles='danger circle'
				/>
				<CloseButton
					onClick={handleClick}
					styles='warning circle'
				/>
				<CloseButton
					onClick={handleClick}
					styles='dark circle'
				/>
				<CloseButton
					onClick={handleClick}
					styles='light circle'
				/>
				<CloseButton
					onClick={handleClick}
					styles='link circle'
				/>
			</div>

			<Codeblock language='jsx'>{`<CloseButton styles='circle ...' />`}</Codeblock>

			<h2>Outline</h2>

			<div className='flex justify-center gap-4 bg-neutral p-4'>
				<CloseButton
					onClick={handleClick}
					styles='primary circle outline'
				/>
				<CloseButton
					onClick={handleClick}
					styles='secondary circle outline'
				/>
				<CloseButton
					onClick={handleClick}
					styles='info circle outline'
				/>
				<CloseButton
					onClick={handleClick}
					styles='success circle outline'
				/>
				<CloseButton
					onClick={handleClick}
					styles='danger circle outline'
				/>
				<CloseButton
					onClick={handleClick}
					styles='warning circle outline'
				/>
				<CloseButton
					onClick={handleClick}
					styles='dark circle outline'
				/>
				<CloseButton
					onClick={handleClick}
					styles='light circle outline'
				/>
			</div>

			<Codeblock language='jsx'>{`<CloseButton styles='outline ...' />`}</Codeblock>

			<h2>Sizes</h2>

			<div className='flex justify-center gap-4 bg-neutral p-4'>
				<CloseButton
					onClick={handleClick}
					styles='primary xs m-auto'
				/>
				<CloseButton
					onClick={handleClick}
					styles='secondary circle sm m-auto'
				/>
				<CloseButton
					onClick={handleClick}
					styles='info circle outline m-auto'
				/>
				<CloseButton
					onClick={handleClick}
					styles='success lg m-auto'
				/>
				<CloseButton
					onClick={handleClick}
					styles='danger circle xl m-auto'
				/>
			</div>

			<Codeblock language='jsx'>{`<CloseButton styles='xs ...' />

<CloseButton styles='sm ...' />

<CloseButton />  // default

<CloseButton styles='lg ...' />

<CloseButton styles='xl ...' />`}</Codeblock>
		</>
	)
}

export default CloseButtonTemplate
