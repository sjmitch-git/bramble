'use client'

import React, { useState } from 'react'

import {
	PlayIcon,
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
import Codeblock from '@/components/codeblock'

const ButtonsTemplate = () => {
	const [toggle, setToggle] = useState(false)

	const disabled = true

	const handleClick = () => {
		alert('You clicked me!')
	}

	return (
		<>
			<h2>Usage</h2>
			<div className='mb-0 flex flex-wrap justify-start gap-4 bg-gray-300 p-4'>
				<Button onClick={handleClick}>Default</Button>
			</div>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import Button from '@/components/button'

const label = 'Default'

const handleClick = () => {
	alert('You clicked me!')
}

return (			
	<Button onClick={handleClick}>{label}</Button>
)`}
				</Codeblock>
				<h3>HTML</h3>
				<Codeblock language='html'>
					{`<button
	type='button'
	class='btn primary'
>
	Default
</button>`}
				</Codeblock>
			</div>
			<h2>Colours</h2>

			<div className='mb-0 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					styles='primary'
					onClick={handleClick}
				>
					Primary
				</Button>

				<Button
					styles='secondary'
					onClick={handleClick}
				>
					Secondary
				</Button>

				<Button
					styles='info'
					onClick={handleClick}
				>
					Info
				</Button>

				<Button
					styles='success'
					onClick={handleClick}
				>
					Success
				</Button>

				<Button
					styles='warning'
					onClick={handleClick}
				>
					Warning
				</Button>

				<Button
					styles='danger'
					onClick={handleClick}
				>
					Danger
				</Button>

				<Button
					styles='dark'
					onClick={handleClick}
				>
					Dark
				</Button>

				<Button
					styles='light'
					onClick={handleClick}
				>
					Light
				</Button>

				<Button
					styles='link'
					onClick={handleClick}
				>
					Link
				</Button>
			</div>

			<div className='mb-8'>
				<Codeblock language='jsx'>
					{`<Button 
	styles='primary'
	onClick={handleClick}
>
	Primary
</Button>

<Button
	styles='secondary'
	onClick={handleClick}
>
	Secondary
</Button>

<Button
	styles='info'
	onClick={handleClick}
>
	Info
</Button>

<Button
	styles='success'
	onClick={handleClick}
>
	Success
</Button>

<Button
	styles='warning'
	onClick={handleClick}
>
	Warning
</Button>

<Button
	styles='danger'
	onClick={handleClick}
>
	Danger
</Button>

<Button
	styles='dark'
	onClick={handleClick}
>
	Dark
</Button>

<Button
	styles='light'
	onClick={handleClick}
>
	Light
</Button>

<Button
	styles='link'
	onClick={handleClick}
>
	Link
</Button>`}
				</Codeblock>
			</div>

			<h2>Rounded</h2>

			<Codeblock language='jsx'>{`styles='... rounded'`}</Codeblock>

			<div className='mb-8 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					styles='primary rounded'
					onClick={handleClick}
				>
					Primary
				</Button>

				<Button
					styles='secondary rounded'
					onClick={handleClick}
				>
					Secondary
				</Button>

				<Button
					styles='info rounded'
					onClick={handleClick}
				>
					Info
				</Button>

				<Button
					styles='success rounded'
					onClick={handleClick}
				>
					Success
				</Button>

				<Button
					styles='warning rounded'
					onClick={handleClick}
				>
					Warning
				</Button>

				<Button
					styles='danger rounded'
					onClick={handleClick}
				>
					Danger
				</Button>

				<Button
					styles='dark rounded'
					onClick={handleClick}
				>
					Dark
				</Button>

				<Button
					styles='light rounded'
					onClick={handleClick}
				>
					Light
				</Button>
			</div>

			<h2>Pill</h2>

			<Codeblock language='jsx'>{`styles='... pill'`}</Codeblock>

			<div className='mb-8 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					styles='primary pill'
					onClick={handleClick}
				>
					Primary
				</Button>

				<Button
					styles='secondary pill'
					onClick={handleClick}
				>
					Secondary
				</Button>

				<Button
					styles='info pill'
					onClick={handleClick}
				>
					Info
				</Button>

				<Button
					styles='success pill'
					onClick={handleClick}
				>
					Success
				</Button>

				<Button
					styles='warning pill'
					onClick={handleClick}
				>
					Warning
				</Button>

				<Button
					styles='danger pill'
					onClick={handleClick}
				>
					Danger
				</Button>

				<Button
					styles='dark pill'
					onClick={handleClick}
				>
					Dark
				</Button>

				<Button
					styles='light pill'
					onClick={handleClick}
				>
					Light
				</Button>
			</div>

			<h2>Outline</h2>

			<Codeblock language='jsx'>{`styles='... outline'`}</Codeblock>

			<div className='mb-0 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					styles='primary outline'
					onClick={handleClick}
				>
					Primary
				</Button>

				<Button
					styles='secondary outline'
					onClick={handleClick}
				>
					Secondary
				</Button>

				<Button
					styles='info outline'
					onClick={handleClick}
				>
					Info
				</Button>

				<Button
					styles='success outline'
					onClick={handleClick}
				>
					Success
				</Button>

				<Button
					styles='warning outline'
					onClick={handleClick}
				>
					Warning
				</Button>

				<Button
					styles='danger outline'
					onClick={handleClick}
				>
					Danger
				</Button>

				<Button
					styles='dark outline'
					onClick={handleClick}
				>
					Dark
				</Button>

				<Button
					styles='light outline'
					onClick={handleClick}
				>
					Light
				</Button>
			</div>

			<Codeblock language='jsx'>{`styles='... outline rounded'`}</Codeblock>

			<div className='mb-0 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					styles='primary outline rounded'
					onClick={handleClick}
				>
					Primary
				</Button>

				<Button
					styles='secondary outline rounded'
					onClick={handleClick}
				>
					Secondary
				</Button>

				<Button
					styles='info outline rounded'
					onClick={handleClick}
				>
					Info
				</Button>

				<Button
					styles='success outline rounded'
					onClick={handleClick}
				>
					Success
				</Button>

				<Button
					styles='warning outline rounded'
					onClick={handleClick}
				>
					Warning
				</Button>

				<Button
					styles='danger outline rounded'
					onClick={handleClick}
				>
					Danger
				</Button>

				<Button
					styles='dark outline rounded'
					onClick={handleClick}
				>
					Dark
				</Button>

				<Button
					styles='light outline rounded'
					onClick={handleClick}
				>
					Light
				</Button>
			</div>

			<Codeblock language='jsx'>{`styles='... outline pill'`}</Codeblock>

			<div className='mb-8 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					styles='primary outline pill'
					onClick={handleClick}
				>
					Primary
				</Button>

				<Button
					styles='secondary outline pill'
					onClick={handleClick}
				>
					Secondary
				</Button>

				<Button
					styles='info outline pill'
					onClick={handleClick}
				>
					Info
				</Button>

				<Button
					styles='success outline pill'
					onClick={handleClick}
				>
					Success
				</Button>

				<Button
					styles='warning outline pill'
					onClick={handleClick}
				>
					Warning
				</Button>

				<Button
					styles='danger outline pill'
					onClick={handleClick}
				>
					Danger
				</Button>

				<Button
					styles='dark outline pill'
					onClick={handleClick}
				>
					Dark
				</Button>

				<Button
					styles='light outline pill'
					onClick={handleClick}
				>
					Light
				</Button>
			</div>

			<h2>Icons</h2>

			<Codeblock language='jsx'>{`import { PlayIcon } from '@heroicons/react/24/solid'

<Button
	styles='primary icon'
	onClick={handleClick}
>
	<PlayIcon />
	<span className='sr-only'>Play</span>
</Button>`}</Codeblock>

			<div className='mb-0 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					styles='primary icon'
					onClick={handleClick}
				>
					<PlayIcon />
					<span className='sr-only'>Play</span>
				</Button>

				<Button
					styles='secondary icon'
					onClick={handleClick}
				>
					<ArrowPathRoundedSquareIcon />
					<span className='sr-only'>Repeat</span>
				</Button>

				<Button
					styles='info icon'
					onClick={handleClick}
				>
					<ArrowDownOnSquareIcon />
					<span className='sr-only'>Download</span>
				</Button>

				<Button
					styles='success icon'
					onClick={handleClick}
				>
					<CheckIcon />
					<span className='sr-only'>Success</span>
				</Button>

				<Button
					styles='warning icon'
					onClick={handleClick}
				>
					<StarIcon />
					<span className='sr-only'>Warning</span>
				</Button>

				<Button
					styles='danger icon'
					onClick={handleClick}
				>
					<TrashIcon />
					<span className='sr-only'>Delete</span>
				</Button>

				<Button
					styles='dark icon'
					onClick={handleClick}
				>
					<EllipsisHorizontalIcon />
					<span className='sr-only'>Toggle</span>
				</Button>

				<Button
					styles='light icon'
					onClick={handleClick}
				>
					<HeartIcon />
					<span className='sr-only'>Like</span>
				</Button>
			</div>
			<h3>Circle</h3>
			<Codeblock language='jsx'>{`<Button
	styles='primary icon circle'
	onClick={handleClick}
>
	<PlayIcon />
	<span className='sr-only'>Play</span>
</Button>`}</Codeblock>
			<div className='mb-0 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					styles='primary icon circle'
					onClick={handleClick}
				>
					<PlayIcon />
					<span className='sr-only'>Play</span>
				</Button>

				<Button
					styles='secondary icon circle'
					onClick={handleClick}
				>
					<ArrowPathRoundedSquareIcon />
					<span className='sr-only'>Repeat</span>
				</Button>

				<Button
					styles='info icon circle'
					onClick={handleClick}
				>
					<ArrowDownOnSquareIcon />
					<span className='sr-only'>Download</span>
				</Button>

				<Button
					styles='success icon circle'
					onClick={handleClick}
				>
					<CheckIcon />
					<span className='sr-only'>Success</span>
				</Button>

				<Button
					styles='warning icon circle'
					onClick={handleClick}
				>
					<StarIcon />
					<span className='sr-only'>Warning</span>
				</Button>

				<Button
					styles='danger icon circle'
					onClick={handleClick}
				>
					<TrashIcon />
					<span className='sr-only'>Delete</span>
				</Button>

				<Button
					styles='dark icon circle'
					onClick={handleClick}
				>
					<EllipsisHorizontalIcon />
					<span className='sr-only'>Toggle</span>
				</Button>

				<Button
					styles='light icon circle'
					onClick={handleClick}
				>
					<HeartIcon />
					<span className='sr-only'>Like</span>
				</Button>
			</div>

			<h3>Outline</h3>

			<Codeblock language='jsx'>{`<Button
	styles='primary icon outline'
	onClick={handleClick}
>
	<PlayIcon />
	<span className='sr-only'>Play</span>
</Button>`}</Codeblock>
			<div className='mb-0 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					styles='primary icon outline'
					onClick={handleClick}
				>
					<PlayIcon />
					<span className='sr-only'>Play</span>
				</Button>

				<Button
					styles='secondary icon outline'
					onClick={handleClick}
				>
					<ArrowPathRoundedSquareIcon />
					<span className='sr-only'>Repeat</span>
				</Button>

				<Button
					styles='info icon outline'
					onClick={handleClick}
				>
					<ArrowDownOnSquareIcon />
					<span className='sr-only'>Download</span>
				</Button>

				<Button
					styles='success icon outline'
					onClick={handleClick}
				>
					<CheckIcon />
					<span className='sr-only'>Success</span>
				</Button>

				<Button
					styles='warning icon outline'
					onClick={handleClick}
				>
					<StarIcon />
					<span className='sr-only'>Warning</span>
				</Button>

				<Button
					styles='danger icon outline'
					onClick={handleClick}
				>
					<TrashIcon />
					<span className='sr-only'>Delete</span>
				</Button>

				<Button
					styles='dark icon outline'
					onClick={handleClick}
				>
					<EllipsisHorizontalIcon />
					<span className='sr-only'>Toggle</span>
				</Button>

				<Button
					styles='light icon outline'
					onClick={handleClick}
				>
					<HeartIcon />
					<span className='sr-only'>Like</span>
				</Button>
			</div>
			<h3>Circle Outline</h3>
			<Codeblock language='jsx'>{`<Button
	styles='primary circle outline'
	onClick={handleClick}
>
	<PlayIcon />
	<span className='sr-only'>Play</span>
</Button>`}</Codeblock>
			<div className='mb-0 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					styles='primary icon circle outline'
					onClick={handleClick}
				>
					<PlayIcon />
					<span className='sr-only'>Play</span>
				</Button>

				<Button
					styles='secondary icon circle outline'
					onClick={handleClick}
				>
					<ArrowPathRoundedSquareIcon />
					<span className='sr-only'>Repeat</span>
				</Button>

				<Button
					styles='info icon circle outline'
					onClick={handleClick}
				>
					<ArrowDownOnSquareIcon />
					<span className='sr-only'>Download</span>
				</Button>

				<Button
					styles='success icon circle outline'
					onClick={handleClick}
				>
					<CheckIcon />
					<span className='sr-only'>Success</span>
				</Button>

				<Button
					styles='warning icon circle outline'
					onClick={handleClick}
				>
					<StarIcon />
					<span className='sr-only'>Warning</span>
				</Button>

				<Button
					styles='danger icon circle outline'
					onClick={handleClick}
				>
					<TrashIcon />
					<span className='sr-only'>Delete</span>
				</Button>

				<Button
					styles='dark icon circle outline'
					onClick={handleClick}
				>
					<EllipsisHorizontalIcon />
					<span className='sr-only'>Toggle</span>
				</Button>

				<Button
					styles='light icon circle outline'
					onClick={handleClick}
				>
					<HeartIcon />
					<span className='sr-only'>Like</span>
				</Button>
			</div>
			<h3>Text with Icon</h3>
			<Codeblock language='jsx'>{`<Button
	styles='primary icon circle'
	onClick={handleClick}
>
	<PlayIcon />
	<span className='sr-only'>Play</span>
</Button>

<Button
	styles='danger rounded'
	onClick={handleClick}
>
	<TrashIcon /> Delete
</Button>

<Button
	styles='dark outline'
	onClick={handleClick}
>
	More <EllipsisHorizontalIcon />
</Button>

<Button
	styles='light pill outline'
	onClick={handleClick}
>
	<HeartIcon /> Like
</Button>

<Button
	styles='link'
	onClick={handleClick}
>
	<ArrowDownOnSquareIcon /> Download
</Button>`}</Codeblock>
			<div className='mb-8 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					styles='primary'
					onClick={handleClick}
				>
					<PlayIcon /> Play
				</Button>

				<Button
					styles='danger rounded'
					onClick={handleClick}
				>
					<TrashIcon /> Delete
				</Button>

				<Button
					styles='dark outline'
					onClick={handleClick}
				>
					More <EllipsisHorizontalIcon />
				</Button>

				<Button
					styles='light pill outline'
					onClick={handleClick}
				>
					<HeartIcon /> Like
				</Button>

				<Button
					styles='link'
					onClick={handleClick}
				>
					<ArrowDownOnSquareIcon /> Download
				</Button>
			</div>

			<h2>Sizes</h2>

			<Codeblock language='jsx'>{`size='xs'
size='sm'
size='lg'
size='xl'`}</Codeblock>

			<div className='align-center mb-0 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					size='xs'
					styles='primary m-auto'
					onClick={handleClick}
				>
					X-Small
				</Button>

				<Button
					size='sm'
					styles='secondary m-auto'
					onClick={handleClick}
				>
					Small
				</Button>

				<Button
					styles='info m-auto'
					onClick={handleClick}
				>
					Default
				</Button>

				<Button
					size='lg'
					styles='success m-auto'
					onClick={handleClick}
				>
					Large
				</Button>

				<Button
					size='xl'
					styles='warning m-auto'
					onClick={handleClick}
				>
					X-Large
				</Button>
			</div>
			<div className='align-center mb-0 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					size='xs'
					styles='primary pill outline m-auto'
					onClick={handleClick}
				>
					X-Small
				</Button>

				<Button
					size='sm'
					styles='secondary pill outline m-auto'
					onClick={handleClick}
				>
					Small
				</Button>

				<Button
					styles='info pill outline m-auto'
					onClick={handleClick}
				>
					Default
				</Button>

				<Button
					size='lg'
					styles='success pill outline m-auto'
					onClick={handleClick}
				>
					Large
				</Button>

				<Button
					size='xl'
					styles='warning pill outline m-auto'
					onClick={handleClick}
				>
					X-Large
				</Button>
			</div>
			<div className='align-center mb-0 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					size='xs'
					styles='link'
					onClick={handleClick}
				>
					<ArrowDownOnSquareIcon /> X-Small
				</Button>

				<Button
					size='sm'
					styles='link'
					onClick={handleClick}
				>
					<ArrowDownOnSquareIcon /> Small
				</Button>

				<Button
					styles='link'
					onClick={handleClick}
				>
					<ArrowDownOnSquareIcon /> Default
				</Button>

				<Button
					size='lg'
					styles='link'
					onClick={handleClick}
				>
					<ArrowDownOnSquareIcon /> Large
				</Button>

				<Button
					size='xl'
					styles='link'
					onClick={handleClick}
				>
					<ArrowDownOnSquareIcon /> X-Large
				</Button>
			</div>
			<div className='align-center mb-0 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					size='xs'
					styles='btn icon dark circle m-auto'
					onClick={handleClick}
				>
					<PlusIcon />
					<span className='sr-only'>X-Small</span>
				</Button>

				<Button
					size='sm'
					styles='btn icon primary circle m-auto'
					onClick={handleClick}
				>
					<PlusIcon />
					<span className='sr-only'>Small</span>
				</Button>

				<Button
					styles='btn icon info circle m-auto'
					onClick={handleClick}
				>
					<PlusIcon />
					<span className='sr-only'>Play</span>
				</Button>

				<Button
					size='lg'
					styles='btn icon dark circle outline m-auto'
					onClick={handleClick}
				>
					<PlusIcon />
					<span className='sr-only'>Large</span>
				</Button>

				<Button
					size='xl'
					styles='btn icon light circle m-auto'
					onClick={handleClick}
				>
					<PlusIcon />
					<span className='sr-only'>X-Large</span>
				</Button>
			</div>

			<h2>Disabled</h2>

			<Codeblock language='jsx'>{`<Button onClick={handleClick} disabled={disabled}>{label}</Button>`}</Codeblock>

			<div className='mb-8 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					styles='primary m-auto'
					onClick={handleClick}
					disabled={disabled}
				>
					Primary
				</Button>

				<Button
					styles='primary outline pill m-auto'
					onClick={handleClick}
					disabled
				>
					Primary
				</Button>

				<Button
					styles='primary icon circle m-auto'
					onClick={handleClick}
					disabled
				>
					<StarIcon />
					<span className='sr-only'>Star</span>
				</Button>

				<Button
					styles='primary icon outline circle m-auto'
					onClick={handleClick}
					disabled
				>
					<StarIcon />
					<span className='sr-only'>Star</span>
				</Button>

				<Button
					styles='primary pill m-auto'
					onClick={handleClick}
					disabled
				>
					<StarIcon /> Fave
				</Button>

				<Button
					styles='primary pill outline m-auto'
					onClick={handleClick}
					disabled
				>
					<StarIcon /> Fave
				</Button>
			</div>

			<h2>Toggle</h2>

			<Codeblock language='jsx'>
				{`const [toggle, setToggle] = useState(false)

<Button
	styles={\`$\{toggle ? 'light' : 'dark'} pill\`}
	onClick={() => setToggle(!toggle)}
>
	<StarIcon /> Fave
</Button>`}
			</Codeblock>

			<div className='mb-8 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					styles={`${toggle ? 'light' : 'dark'} m-auto`}
					onClick={() => setToggle(!toggle)}
				>
					Toggle
				</Button>

				<Button
					styles={`${toggle ? 'warning' : 'primary'} outline pill m-auto`}
					onClick={() => setToggle(!toggle)}
				>
					Toggle
				</Button>

				<Button
					styles={`${toggle ? 'text-success bg-light' : 'light'} icon circle m-auto`}
					onClick={() => setToggle(!toggle)}
				>
					<StarIcon />
					<span className='sr-only'>Star</span>
				</Button>

				<Button
					styles={`${toggle ? 'light' : 'dark'} icon outline circle m-auto`}
					onClick={() => setToggle(!toggle)}
				>
					<StarIcon />
					<span className='sr-only'>Star</span>
				</Button>

				<Button
					styles={`${toggle ? 'light' : 'dark'} pill m-auto`}
					onClick={() => setToggle(!toggle)}
				>
					<StarIcon /> Fave
				</Button>

				<Button
					styles={`${toggle ? 'success' : 'info'} pill outline m-auto`}
					onClick={() => setToggle(!toggle)}
				>
					<StarIcon /> Fave
				</Button>
			</div>

			<hr />

			<h2>Options</h2>

			<Codeblock language='jsx'>
				{`size: 'xs' | 'sm' | 'lg' | 'xl' | undefined
styles: string | undefined
id: string | undefined
title: string | undefined
type: 'submit' | 'reset' | 'button' | undefined
disabled: boolean | undefined
onClick: function | undefined

<Button
	size='xl'
	styles='secondary icon circle outline' // Any Tailwind classes can be added here
	id='reset'
	title='Reset'
	type='reset'
	onClick={handleClick}
>
	<ArrowPathRoundedSquareIcon />
	<span className='sr-only'>Repeat</span>
</Button>`}
			</Codeblock>
			<div className='mb-8 flex flex-wrap gap-4 bg-gray-300 p-4'>
				<Button
					size='xl'
					styles='secondary icon circle outline'
					id='reset'
					title='Reset'
					type='reset'
					onClick={handleClick}
				>
					<ArrowPathRoundedSquareIcon />
					<span className='sr-only'>Repeat</span>
				</Button>
			</div>
			<h2>CSS</h2>
			<Codeblock language='css'>
				{`.btn {
	@apply flex items-center font-semibold text-white p-[var(--button-p)] text-center text-base uppercase transition cursor-pointer outline-0 tracking-widest shadow;

	/* SIZES */
	&.xs {
		@apply text-xs p-[var(--button-p-xs)];
	}

	&.sm {
		@apply text-sm p-[var(--button-p-sm)];
	}

	&.lg {
		@apply text-2xl p-[var(--button-p-lg)];
	}

	&.xl {
		@apply text-4xl p-[var(--button-p-xl)];
	}

	/* ICON MARGIN - button with icon and text */
	&:not(.icon):has(> svg) {
		@apply flex gap-1;
	}

	/* ICON SIZES */
	& > svg {
		@apply w-8;
	}

	&.xs > svg {
		@apply w-4;
	}

	&.sm > svg {
		@apply w-6;
	}

	&.lg > svg {
		@apply w-10;
	}

	&.xl > svg {
		@apply w-14;
	}

	/* CORNERS */
	&.rounded {
		@apply rounded-md;
	}

	&.pill {
		@apply rounded-full px-[var(--button-p-lg)];
	}

	/* COLOURS */
	&.primary {
		@apply bg-primary;
	}

	&.secondary {
		@apply bg-secondary;
	}

	&.info {
		@apply bg-info;
	}

	&.success {
		@apply bg-success;
	}

	&.warning {
		@apply bg-warning;
	}

	&.danger {
		@apply bg-danger;
	}

	&.dark {
		@apply bg-dark;
	}

	&.light {
		@apply bg-light text-dark;
	}

	&.link {
		@apply bg-transparent text-primary !shadow-none;
	}

	/* OUTLINE */
	&.outline {
		@apply bg-light border-solid border-4 border-current text-current;

		&.primary {
			@apply text-primary;
		}

		&.secondary {
			@apply text-secondary;
		}

		&.info {
			@apply text-info;
		}

		&.success {
			@apply text-success;
		}

		&.warning {
			@apply text-warning;
		}

		&.danger {
			@apply text-danger;
		}

		&.dark {
			@apply text-dark;
		}

		&.light {
			@apply text-light bg-dark;
		}

		/* OUTLINE BORDERS */
		&.xs {
			@apply border;
		}

		&.sm {
			@apply border-2;
		}

		&.lg {
			@apply border-8;
		}

		&.xl {
			@apply border-12;
		}
	}

	/* STATE */
	&:hover {
		@apply scale-105 shadow-lg;
	}

	&:disabled {
		@apply cursor-default scale-100 !text-[var(--disabled-color)] border-[var(--disabled-color)] bg-[var(--neutral-color)] pointer-events-none;
	}

	&:focus {
		@apply scale-110 ring ring-accent;
	}

	&:focus-visible {
		@apply ring ring-accent;
	}

	/* ICONS */
	&.icon {
		@apply aspect-square;

		&.circle {
			@apply rounded-full;
		}                        
	}

}`}
			</Codeblock>
		</>
	)
}

export default ButtonsTemplate
