'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import {
	PlayIcon,
	PauseIcon,
	StopIcon,
	TrashIcon,
	ArrowPathRoundedSquareIcon,
	ArrowDownOnSquareIcon,
	CheckIcon,
	StarIcon,
	EllipsisHorizontalIcon,
	HeartIcon,
	PlusIcon,
} from '@heroicons/react/24/solid'

import Button from '@/components/button'
import Buttongroup from '@/components/buttongroup'
import Codeblock from '@/components/codeblock'

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
					Related: <Link href='../components/buttons'>Buttons</Link>
				</p>
				<div className='mb-0 flex flex-wrap justify-start gap-4 bg-gray-300 p-4'>
					<Buttongroup>
						<Button
							styles='dark active'
							onClick={handleClick}
							disabled
						>
							Left
						</Button>
						<Button
							styles='dark'
							onClick={handleClick}
						>
							Middle
						</Button>
						<Button
							styles='dark'
							onClick={handleClick}
						>
							Right
						</Button>
					</Buttongroup>
				</div>
				<div className='mb-8'>
					<Codeblock language='jsx'>
						{`import Button from '@/components/button'
import Buttongroup from '@/components/buttongroup'

const handleClick = () => {
	alert('You clicked me!')
}

return (			
	<Buttongroup>
        <Button
            styles='dark active'
            onClick={handleClick}
            disabled
        >
            Left
        </Button>
        <Button
            styles='dark'
            onClick={handleClick}
        >
            Middle
        </Button>
        <Button
            styles='dark'
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
					<Buttongroup styles='vertical'>
						<Button
							styles='dark active'
							onClick={handleClick}
							disabled
						>
							Left
						</Button>
						<Button
							styles='dark'
							onClick={handleClick}
						>
							Middle
						</Button>
						<Button
							styles='dark'
							onClick={handleClick}
						>
							Right
						</Button>
					</Buttongroup>
				</div>
				<div className='mb-8'>
					<Codeblock language='jsx'>{`<Buttongroup styles='vertical'>`}</Codeblock>
				</div>
			</section>

			<section id='sizes'>
				<h2>Sizes</h2>

				<h3>X-Small</h3>

				<div className='mb-0 flex flex-wrap gap-4 bg-gray-300 p-4'>
					<Buttongroup size='xs'>
						<Button
							styles='primary'
							onClick={handleClick}
						>
							Left
						</Button>
						<Button
							styles='primary'
							onClick={handleClick}
						>
							Middle
						</Button>
						<Button
							styles='primary'
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
							styles='info'
							onClick={handleClick}
						>
							Left
						</Button>
						<Button
							styles='info'
							onClick={handleClick}
						>
							Middle
						</Button>
						<Button
							styles='info'
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
							styles='primary'
							onClick={handleClick}
						>
							Left
						</Button>
						<Button
							styles='primary active'
							onClick={handleClick}
							disabled
						>
							Middle
						</Button>
						<Button
							styles='primary'
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
							styles='primary'
							onClick={handleClick}
						>
							Left
						</Button>
						<Button
							styles='primary'
							onClick={handleClick}
						>
							Middle
						</Button>
						<Button
							styles='primary active'
							onClick={handleClick}
							disabled
						>
							Right
						</Button>
					</Buttongroup>
				</div>

				<Codeblock language='jsx'>{`<Buttongroup size='lg'>`}</Codeblock>

				<h3>X-Large</h3>

				<div className='mb-0 flex flex-wrap gap-4 bg-gray-300 p-4'>
					<Buttongroup size='xl'>
						<Button
							styles='primary'
							onClick={handleClick}
						>
							Left
						</Button>
						<Button
							styles='primary'
							onClick={handleClick}
						>
							Middle
						</Button>
						<Button
							styles='primary'
							onClick={handleClick}
						>
							Right
						</Button>
					</Buttongroup>
				</div>

				<Codeblock language='jsx'>{`<Buttongroup size='xl'>`}</Codeblock>
			</section>

			<section id='icons'>
				<h2>Icons</h2>
				<div className='mb-0 flex flex-wrap justify-start gap-4 bg-gray-300 p-4'>
					<Buttongroup>
						<Button
							styles='info icon'
							title='play'
						>
							<PlayIcon />
							<span className='sr-only'>Play</span>
						</Button>
						<Button styles='info icon'>
							<PauseIcon />
							<span className='sr-only'>Pause</span>
						</Button>
						<Button styles='info icon'>
							<StopIcon />
							<span className='sr-only'>Stop</span>
						</Button>
					</Buttongroup>
				</div>
				<Codeblock language='jsx'>{`<Buttongroup>
	<Button
		styles='info icon'
		title='Play'
	>
		<PlayIcon />
		<span className='sr-only'>Play</span>
	</Button>
	<Button
		styles='info icon'
	>
		<PauseIcon />
		<span className='sr-only'>Pause</span>
	</Button>
	<Button styles='info icon'>
		<StopIcon />
		<span className='sr-only'>Stop</span>
	</Button>
</Buttongroup>`}</Codeblock>
				<div className='mb-0 flex flex-wrap justify-start gap-4 bg-gray-300 p-4'>
					<Buttongroup styles='vertical'>
						<Button
							styles='info icon'
							title='play'
						>
							<PlayIcon />
							<span className='sr-only'>Play</span>
						</Button>
						<Button styles='info icon'>
							<PauseIcon />
							<span className='sr-only'>Pause</span>
						</Button>
						<Button styles='info icon'>
							<StopIcon />
							<span className='sr-only'>Stop</span>
						</Button>
					</Buttongroup>
				</div>
				<Codeblock language='jsx'>{`<Buttongroup styles='vertical'>`}</Codeblock>
			</section>

			<section id='iconslabels'>
				<h2>Icons Labels</h2>
				<div className='mb-0 flex flex-wrap justify-start gap-4 bg-gray-300 p-4'>
					<Buttongroup>
						<Button
							styles='info'
							title='play'
						>
							<PlayIcon />
							<span>Play</span>
						</Button>
						<Button styles='info'>
							<PauseIcon />
							<span>Pause</span>
						</Button>
						<Button styles='info'>
							<StopIcon />
							<span>Stop</span>
						</Button>
					</Buttongroup>
				</div>
				<Codeblock language='jsx'>{`<Buttongroup>
	<Button
		styles='info'
		title='Play'
	>
		<PlayIcon />
		<span>Play</span>
	</Button>
	<Button
		styles='info'
	>
		<PauseIcon />
		<span>Pause</span>
	</Button>
	<Button styles='info'>
		<StopIcon />
		<span>Stop</span>
	</Button>
</Buttongroup>`}</Codeblock>
				<div className='mb-0 flex flex-wrap justify-start gap-4 bg-gray-300 p-4'>
					<Buttongroup styles='vertical'>
						<Button
							styles='info'
							title='play'
						>
							<PlayIcon />
							<span>Play</span>
						</Button>
						<Button styles='info'>
							<PauseIcon />
							<span>Pause</span>
						</Button>
						<Button styles='info'>
							<StopIcon />
							<span>Stop</span>
						</Button>
					</Buttongroup>
				</div>
				<Codeblock language='jsx'>{`<Buttongroup styles='vertical'>`}</Codeblock>
			</section>

			<section id='outline'>
				<h2>Outlines</h2>
				<div className='mb-0 flex flex-wrap justify-start gap-4 bg-gray-300 p-4'>
					<Buttongroup>
						<Button
							styles='info outline'
							title='play'
						>
							<PlayIcon />
							<span>Play</span>
						</Button>
						<Button styles='info outline'>
							<PauseIcon />
							<span>Pause</span>
						</Button>
						<Button styles='info outline'>
							<StopIcon />
							<span>Stop</span>
						</Button>
					</Buttongroup>
				</div>
				<Codeblock language='jsx'>{`<Buttongroup>
	<Button
		styles='info outline'
		title='Play'
	>
		<PlayIcon />
		<span>Play</span>
	</Button>
	<Button
		styles='info outline'
	>
		<PauseIcon />
		<span>Pause</span>
	</Button>
	<Button styles='info outline'>
		<StopIcon />
		<span>Stop</span>
	</Button>
</Buttongroup>`}</Codeblock>
				<div className='mb-0 flex flex-wrap justify-start gap-4 bg-gray-300 p-4'>
					<Buttongroup styles='vertical'>
						<Button
							styles='dark outline'
							title='play'
						>
							<PlayIcon />
							<span>Play</span>
						</Button>
						<Button styles='dark outline'>
							<PauseIcon />
							<span>Pause</span>
						</Button>
						<Button styles='dark outline'>
							<StopIcon />
							<span>Stop</span>
						</Button>
					</Buttongroup>
					<Buttongroup styles='vertical right'>
						<Button
							styles='dark outline'
							title='play'
						>
							<span>Play</span>
							<PlayIcon />
						</Button>
						<Button styles='dark outline'>
							<span>Pause</span>
							<PauseIcon />
						</Button>
						<Button styles='dark outline'>
							<span>Stop</span>
							<StopIcon />
						</Button>
					</Buttongroup>
				</div>
				<Codeblock language='jsx'>{`<Buttongroup styles='vertical'>

<Buttongroup styles='vertical right'>`}</Codeblock>
			</section>
			<hr />
			<section>
				<h2>Options</h2>
				<Codeblock language='jsx'>{`size: 'xs' | 'sm' | 'lg' | 'xl' | undefined
styles: string | undefined // // Any Tailwind classes can be added here
label: string | undefined // aria-label`}</Codeblock>
			</section>
		</>
	)
}

export default ButtonsgroupTemplate
