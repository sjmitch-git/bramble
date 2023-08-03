'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import { PlayIcon, PauseIcon, StopIcon } from '@heroicons/react/24/solid'

import { Button, Buttongroup, Codeblock } from '@/components'

const ButtonsgroupTemplate = () => {
	const [toggle, setToggle] = useState(false)

	const disabled = true

	const handleClick = () => {
		alert('You clicked me!')
	}

	return (
		<>
			<section id='usage'>
				<h2>Usage</h2>
				<p>
					Related: <Link href='/components/buttons'>Buttons</Link>
				</p>
				<div className='mb-0 flex flex-wrap justify-start gap-4 bg-gray-300 p-4'>
					<Buttongroup>
						<Button
							className='active dark'
							onClick={handleClick}
							disabled
						>
							Left
						</Button>
						<Button
							className='dark'
							onClick={handleClick}
						>
							Middle
						</Button>
						<Button
							className='dark'
							onClick={handleClick}
						>
							Right
						</Button>
					</Buttongroup>
				</div>
				<div className='mb-8'>
					<Codeblock language='jsx'>
						{`import { Button, Buttongroup } from '@/components'

const handleClick = () => {
	alert('You clicked me!')
}

return (			
	<Buttongroup>
        <Button
            className='dark active'
            onClick={handleClick}
            disabled
        >
            Left
        </Button>
        <Button
            className='dark'
            onClick={handleClick}
        >
            Middle
        </Button>
        <Button
            className='dark'
            onClick={handleClick}
        >
            Right
        </Button>
    </Buttongroup>
)`}
					</Codeblock>
				</div>
			</section>

			<section id='orientaion'>
				<h2>Orientation</h2>
				<div className='mb-0 flex flex-wrap justify-start gap-4 bg-gray-300 p-4'>
					<Buttongroup className='vertical'>
						<Button
							className='active dark'
							onClick={handleClick}
							disabled
						>
							Left
						</Button>
						<Button
							className='dark'
							onClick={handleClick}
						>
							Middle
						</Button>
						<Button
							className='dark'
							onClick={handleClick}
						>
							Right
						</Button>
					</Buttongroup>
				</div>
				<div className='mb-8'>
					<Codeblock language='jsx'>{`<Buttongroup className='vertical'>`}</Codeblock>
				</div>
			</section>

			<section id='sizes'>
				<h2>Sizes</h2>

				<h3>X-Small</h3>

				<div className='mb-0 flex flex-wrap gap-4 bg-gray-300 p-4'>
					<Buttongroup size='xs'>
						<Button
							className='primary'
							onClick={handleClick}
						>
							Left
						</Button>
						<Button
							className='primary'
							onClick={handleClick}
						>
							Middle
						</Button>
						<Button
							className='primary'
							onClick={handleClick}
						>
							Right
						</Button>
					</Buttongroup>
				</div>

				<Codeblock language='jsx'>{`<Buttongroup size='xs'>`}</Codeblock>

				<h3>Small</h3>

				<div className='mb-0 flex flex-wrap gap-4 bg-gray-300 p-4'>
					<Buttongroup size='sm'>
						<Button
							className='info'
							onClick={handleClick}
						>
							Left
						</Button>
						<Button
							className='info'
							onClick={handleClick}
						>
							Middle
						</Button>
						<Button
							className='info'
							onClick={handleClick}
						>
							Right
						</Button>
					</Buttongroup>
				</div>

				<Codeblock language='jsx'>{`<Buttongroup size='sm'>`}</Codeblock>

				<h3>Default</h3>

				<div className='mb-0 flex flex-wrap gap-4 bg-gray-300 p-4'>
					<Buttongroup>
						<Button
							className='primary'
							onClick={handleClick}
						>
							Left
						</Button>
						<Button
							className='primary active'
							onClick={handleClick}
							disabled
						>
							Middle
						</Button>
						<Button
							className='primary'
							onClick={handleClick}
						>
							Right
						</Button>
					</Buttongroup>
				</div>

				<Codeblock language='jsx'>{`<Buttongroup>`}</Codeblock>

				<h3>Large</h3>

				<div className='mb-0 flex flex-wrap gap-4 bg-gray-300 p-4'>
					<Buttongroup size='lg'>
						<Button
							className='primary'
							onClick={handleClick}
						>
							Left
						</Button>
						<Button
							className='primary'
							onClick={handleClick}
						>
							Middle
						</Button>
						<Button
							className='primary active'
							onClick={handleClick}
							disabled
						>
							Right
						</Button>
					</Buttongroup>
				</div>

				<Codeblock language='jsx'>{`<Buttongroup size='lg'>`}</Codeblock>
			</section>

			<section id='icons'>
				<h2>Icons</h2>
				<div className='mb-0 flex flex-wrap justify-start gap-4 bg-gray-300 p-4'>
					<Buttongroup>
						<Button
							className='info icon'
							title='play'
						>
							<PlayIcon />
							<span className='sr-only'>Play</span>
						</Button>
						<Button className='info icon'>
							<PauseIcon />
							<span className='sr-only'>Pause</span>
						</Button>
						<Button className='info icon'>
							<StopIcon />
							<span className='sr-only'>Stop</span>
						</Button>
					</Buttongroup>
				</div>
				<Codeblock language='jsx'>{`<Buttongroup>
	<Button
		className='info icon'
		title='Play'
	>
		<PlayIcon />
		<span className='sr-only'>Play</span>
	</Button>
	<Button
		className='info icon'
	>
		<PauseIcon />
		<span className='sr-only'>Pause</span>
	</Button>
	<Button className='info icon'>
		<StopIcon />
		<span className='sr-only'>Stop</span>
	</Button>
</Buttongroup>`}</Codeblock>
				<div className='mb-0 flex flex-wrap justify-start gap-4 bg-gray-300 p-4'>
					<Buttongroup className='vertical'>
						<Button
							className='info icon'
							title='play'
						>
							<PlayIcon />
							<span className='sr-only'>Play</span>
						</Button>
						<Button className='info icon'>
							<PauseIcon />
							<span className='sr-only'>Pause</span>
						</Button>
						<Button className='info icon'>
							<StopIcon />
							<span className='sr-only'>Stop</span>
						</Button>
					</Buttongroup>
				</div>
				<Codeblock language='jsx'>{`<Buttongroup className='vertical'>`}</Codeblock>
			</section>

			<section id='iconslabels'>
				<h2>Icons Labels</h2>
				<div className='mb-0 flex flex-wrap justify-start gap-4 bg-gray-300 p-4'>
					<Buttongroup>
						<Button
							className='info'
							title='play'
						>
							<PlayIcon />
							<span>Play</span>
						</Button>
						<Button className='info'>
							<PauseIcon />
							<span>Pause</span>
						</Button>
						<Button className='info'>
							<StopIcon />
							<span>Stop</span>
						</Button>
					</Buttongroup>
				</div>
				<Codeblock language='jsx'>{`<Buttongroup>
	<Button
		className='info'
		title='Play'
	>
		<PlayIcon />
		<span>Play</span>
	</Button>
	<Button
		className='info'
	>
		<PauseIcon />
		<span>Pause</span>
	</Button>
	<Button className='info'>
		<StopIcon />
		<span>Stop</span>
	</Button>
</Buttongroup>`}</Codeblock>
				<div className='mb-0 flex flex-wrap justify-start gap-4 bg-gray-300 p-4'>
					<Buttongroup className='vertical'>
						<Button
							className='info'
							title='play'
						>
							<PlayIcon />
							<span>Play</span>
						</Button>
						<Button className='info'>
							<PauseIcon />
							<span>Pause</span>
						</Button>
						<Button className='info'>
							<StopIcon />
							<span>Stop</span>
						</Button>
					</Buttongroup>
				</div>
				<Codeblock language='jsx'>{`<Buttongroup className='vertical'>`}</Codeblock>
			</section>

			<section id='outline'>
				<h2>Outlines</h2>
				<div className='mb-0 flex flex-wrap justify-start gap-4 bg-gray-300 p-4'>
					<Buttongroup>
						<Button
							className='info outline'
							title='play'
						>
							<PlayIcon />
							<span>Play</span>
						</Button>
						<Button className='info outline'>
							<PauseIcon />
							<span>Pause</span>
						</Button>
						<Button className='info outline'>
							<StopIcon />
							<span>Stop</span>
						</Button>
					</Buttongroup>
				</div>
				<Codeblock language='jsx'>{`<Buttongroup>
	<Button
		className='info outline'
		title='Play'
	>
		<PlayIcon />
		<span>Play</span>
	</Button>
	<Button
		className='info outline'
	>
		<PauseIcon />
		<span>Pause</span>
	</Button>
	<Button className='info outline'>
		<StopIcon />
		<span>Stop</span>
	</Button>
</Buttongroup>`}</Codeblock>
				<div className='mb-0 flex flex-wrap justify-start gap-4 bg-gray-300 p-4'>
					<Buttongroup className='vertical'>
						<Button
							className='dark outline'
							title='play'
						>
							<PlayIcon />
							<span>Play</span>
						</Button>
						<Button className='dark outline'>
							<PauseIcon />
							<span>Pause</span>
						</Button>
						<Button className='dark outline'>
							<StopIcon />
							<span>Stop</span>
						</Button>
					</Buttongroup>
					<Buttongroup className='vertical right'>
						<Button
							className='dark outline'
							title='play'
						>
							<span>Play</span>
							<PlayIcon />
						</Button>
						<Button className='dark outline'>
							<span>Pause</span>
							<PauseIcon />
						</Button>
						<Button className='dark outline'>
							<span>Stop</span>
							<StopIcon />
						</Button>
					</Buttongroup>
				</div>
				<Codeblock language='jsx'>{`<Buttongroup className='vertical'>

<Buttongroup className='vertical right'>`}</Codeblock>
			</section>
			<hr />
			<section>
				<h2>Options</h2>
				<Codeblock language='jsx'>{`size: 'xs' | 'sm' | 'lg' | undefined
className: string | undefined // // Any Tailwind classes can be added here
label: string | undefined // aria-label`}</Codeblock>
			</section>
		</>
	)
}

export default ButtonsgroupTemplate
