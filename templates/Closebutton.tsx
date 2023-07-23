import { CloseButton, Codeblock } from '@/components'

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

			<div className='mb-12 flex flex-wrap justify-center gap-4 bg-light p-4'>
				<CloseButton onClick={handleClick} />
				<CloseButton
					onClick={handleClick}
					className='secondary'
				/>
				<CloseButton
					onClick={handleClick}
					className='info'
				/>
				<CloseButton
					onClick={handleClick}
					className='success'
				/>
				<CloseButton
					onClick={handleClick}
					className='danger'
				/>
				<CloseButton
					onClick={handleClick}
					className='warning'
				/>
				<CloseButton
					onClick={handleClick}
					className='dark'
				/>
				<CloseButton
					onClick={handleClick}
					className='light'
				/>
				<CloseButton
					onClick={handleClick}
					className='link'
				/>
			</div>

			<Codeblock language='jsx'>
				{`<CloseButton /> // default

<CloseButton className='secondary'/>

<CloseButton className='info'/>

<CloseButton className='success'/>

<CloseButton className='danger'/>

<CloseButton className='warning'/>

<CloseButton className='dark'/>

<CloseButton className='light'/>

<CloseButton className='link'/>`}
			</Codeblock>

			<h2>Circle</h2>

			<div className='mb-8 flex flex-wrap justify-center gap-4 bg-light p-4'>
				<CloseButton
					onClick={handleClick}
					className='circle'
				/>
				<CloseButton
					onClick={handleClick}
					className='secondary circle'
				/>
				<CloseButton
					onClick={handleClick}
					className='info circle'
				/>
				<CloseButton
					onClick={handleClick}
					className='success circle'
				/>
				<CloseButton
					onClick={handleClick}
					className='danger circle'
				/>
				<CloseButton
					onClick={handleClick}
					className='warning circle'
				/>
				<CloseButton
					onClick={handleClick}
					className='circle dark'
				/>
				<CloseButton
					onClick={handleClick}
					className='light circle'
				/>
				<CloseButton
					onClick={handleClick}
					className='link circle'
				/>
			</div>

			<Codeblock language='jsx'>{`<CloseButton className='circle ...' />`}</Codeblock>

			<h2>Outline</h2>

			<div className='flex flex-wrap justify-center gap-4 bg-neutral p-4'>
				<CloseButton
					onClick={handleClick}
					className='primary circle outline'
				/>
				<CloseButton
					onClick={handleClick}
					className='secondary circle outline'
				/>
				<CloseButton
					onClick={handleClick}
					className='info circle outline'
				/>
				<CloseButton
					onClick={handleClick}
					className='success circle outline'
				/>
				<CloseButton
					onClick={handleClick}
					className='danger circle outline'
				/>
				<CloseButton
					onClick={handleClick}
					className='warning circle outline'
				/>
				<CloseButton
					onClick={handleClick}
					className='circle dark outline'
				/>
				<CloseButton
					onClick={handleClick}
					className='light circle outline'
				/>
			</div>

			<Codeblock language='jsx'>{`<CloseButton className='outline ...' />`}</Codeblock>

			<h2>Sizes</h2>

			<div className='flex flex-wrap justify-center gap-4 bg-neutral p-4'>
				<CloseButton
					onClick={handleClick}
					className='primary xs m-auto'
				/>
				<CloseButton
					onClick={handleClick}
					className='secondary circle sm m-auto'
				/>
				<CloseButton
					onClick={handleClick}
					className='info circle m-auto outline'
				/>
				<CloseButton
					onClick={handleClick}
					className='success lg m-auto'
				/>
				<CloseButton
					onClick={handleClick}
					className='danger circle xl m-auto'
				/>
			</div>

			<Codeblock language='jsx'>{`<CloseButton className='xs ...' />

<CloseButton className='sm ...' />

<CloseButton />  // default

<CloseButton className='lg ...' />

<CloseButton className='xl ...' />`}</Codeblock>
			<hr />
		</>
	)
}

export default CloseButtonTemplate
