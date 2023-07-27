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

import { Button, Codeblock } from '@/components'

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
				<Button onClick={handleClick}>Click</Button>
			</div>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import {Button} from '@/components'

const label = 'Click'

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
					className='primary'
					onClick={handleClick}
				>
					Primary
				</Button>

				<Button
					className='secondary'
					onClick={handleClick}
				>
					Secondary
				</Button>

				<Button
					className='info'
					onClick={handleClick}
				>
					Info
				</Button>

				<Button
					className='success'
					onClick={handleClick}
				>
					Success
				</Button>

				<Button
					className='warning'
					onClick={handleClick}
				>
					Warning
				</Button>

				<Button
					className='danger'
					onClick={handleClick}
				>
					Danger
				</Button>

				<Button
					className='dark'
					onClick={handleClick}
				>
					Dark
				</Button>

				<Button
					className='light'
					onClick={handleClick}
				>
					Light
				</Button>

				<Button
					className='link'
					onClick={handleClick}
				>
					Link
				</Button>
			</div>

			<div className='mb-8'>
				<Codeblock language='jsx'>
					{`<Button 
	className='primary'
	onClick={handleClick}
>
	Primary
</Button>

<Button
	className='secondary'
	onClick={handleClick}
>
	Secondary
</Button>

<Button
	className='info'
	onClick={handleClick}
>
	Info
</Button>

<Button
	className='success'
	onClick={handleClick}
>
	Success
</Button>

<Button
	className='warning'
	onClick={handleClick}
>
	Warning
</Button>

<Button
	className='danger'
	onClick={handleClick}
>
	Danger
</Button>

<Button
	className='dark'
	onClick={handleClick}
>
	Dark
</Button>

<Button
	className='light'
	onClick={handleClick}
>
	Light
</Button>

<Button
	className='link'
	onClick={handleClick}
>
	Link
</Button>`}
				</Codeblock>
			</div>

			<h2>Rounded</h2>

			<Codeblock language='jsx'>{`className='... rounded'`}</Codeblock>

			<div className='mb-8 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					className='primary rounded'
					onClick={handleClick}
				>
					Primary
				</Button>

				<Button
					className='secondary rounded'
					onClick={handleClick}
				>
					Secondary
				</Button>

				<Button
					className='info rounded'
					onClick={handleClick}
				>
					Info
				</Button>

				<Button
					className='success rounded'
					onClick={handleClick}
				>
					Success
				</Button>

				<Button
					className='warning rounded'
					onClick={handleClick}
				>
					Warning
				</Button>

				<Button
					className='danger rounded'
					onClick={handleClick}
				>
					Danger
				</Button>

				<Button
					className='dark rounded'
					onClick={handleClick}
				>
					Dark
				</Button>

				<Button
					className='light rounded'
					onClick={handleClick}
				>
					Light
				</Button>
			</div>

			<h2>Pill</h2>

			<Codeblock language='jsx'>{`className='... pill'`}</Codeblock>

			<div className='mb-8 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					className='primary pill'
					onClick={handleClick}
				>
					Primary
				</Button>

				<Button
					className='secondary pill'
					onClick={handleClick}
				>
					Secondary
				</Button>

				<Button
					className='info pill'
					onClick={handleClick}
				>
					Info
				</Button>

				<Button
					className='success pill'
					onClick={handleClick}
				>
					Success
				</Button>

				<Button
					className='warning pill'
					onClick={handleClick}
				>
					Warning
				</Button>

				<Button
					className='danger pill'
					onClick={handleClick}
				>
					Danger
				</Button>

				<Button
					className='pill dark'
					onClick={handleClick}
				>
					Dark
				</Button>

				<Button
					className='light pill'
					onClick={handleClick}
				>
					Light
				</Button>
			</div>

			<h2>Outline</h2>

			<Codeblock language='jsx'>{`className='... outline'`}</Codeblock>

			<div className='mb-0 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					className='primary outline'
					onClick={handleClick}
				>
					Primary
				</Button>

				<Button
					className='secondary outline'
					onClick={handleClick}
				>
					Secondary
				</Button>

				<Button
					className='info outline'
					onClick={handleClick}
				>
					Info
				</Button>

				<Button
					className='success outline'
					onClick={handleClick}
				>
					Success
				</Button>

				<Button
					className='warning outline'
					onClick={handleClick}
				>
					Warning
				</Button>

				<Button
					className='danger outline'
					onClick={handleClick}
				>
					Danger
				</Button>

				<Button
					className='dark outline'
					onClick={handleClick}
				>
					Dark
				</Button>

				<Button
					className='light outline'
					onClick={handleClick}
				>
					Light
				</Button>
			</div>

			<Codeblock language='jsx'>{`className='... outline rounded'`}</Codeblock>

			<div className='mb-0 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					className='primary rounded outline'
					onClick={handleClick}
				>
					Primary
				</Button>

				<Button
					className='secondary rounded outline'
					onClick={handleClick}
				>
					Secondary
				</Button>

				<Button
					className='info rounded outline'
					onClick={handleClick}
				>
					Info
				</Button>

				<Button
					className='success rounded outline'
					onClick={handleClick}
				>
					Success
				</Button>

				<Button
					className='warning rounded outline'
					onClick={handleClick}
				>
					Warning
				</Button>

				<Button
					className='danger rounded outline'
					onClick={handleClick}
				>
					Danger
				</Button>

				<Button
					className='dark rounded outline'
					onClick={handleClick}
				>
					Dark
				</Button>

				<Button
					className='light rounded outline'
					onClick={handleClick}
				>
					Light
				</Button>
			</div>

			<Codeblock language='jsx'>{`className='... outline pill'`}</Codeblock>

			<div className='mb-8 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					className='primary pill outline'
					onClick={handleClick}
				>
					Primary
				</Button>

				<Button
					className='secondary pill outline'
					onClick={handleClick}
				>
					Secondary
				</Button>

				<Button
					className='info pill outline'
					onClick={handleClick}
				>
					Info
				</Button>

				<Button
					className='success pill outline'
					onClick={handleClick}
				>
					Success
				</Button>

				<Button
					className='warning pill outline'
					onClick={handleClick}
				>
					Warning
				</Button>

				<Button
					className='danger pill outline'
					onClick={handleClick}
				>
					Danger
				</Button>

				<Button
					className='pill dark outline'
					onClick={handleClick}
				>
					Dark
				</Button>

				<Button
					className='light pill outline'
					onClick={handleClick}
				>
					Light
				</Button>
			</div>

			<h2>Icons</h2>

			<Codeblock language='jsx'>{`import { PlayIcon } from '@heroicons/react/24/solid'

<Button
	className='primary icon'
	onClick={handleClick}
>
	<PlayIcon />
	<span className='sr-only'>Play</span>
</Button>`}</Codeblock>

			<div className='mb-0 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					className='primary icon'
					onClick={handleClick}
				>
					<PlayIcon />
					<span className='sr-only'>Play</span>
				</Button>

				<Button
					className='secondary icon'
					onClick={handleClick}
				>
					<ArrowPathRoundedSquareIcon />
					<span className='sr-only'>Repeat</span>
				</Button>

				<Button
					className='info icon'
					onClick={handleClick}
				>
					<ArrowDownOnSquareIcon />
					<span className='sr-only'>Download</span>
				</Button>

				<Button
					className='success icon'
					onClick={handleClick}
				>
					<CheckIcon />
					<span className='sr-only'>Success</span>
				</Button>

				<Button
					className='warning icon'
					onClick={handleClick}
				>
					<StarIcon />
					<span className='sr-only'>Warning</span>
				</Button>

				<Button
					className='danger icon'
					onClick={handleClick}
				>
					<TrashIcon />
					<span className='sr-only'>Delete</span>
				</Button>

				<Button
					className='icon dark'
					onClick={handleClick}
				>
					<EllipsisHorizontalIcon />
					<span className='sr-only'>Toggle</span>
				</Button>

				<Button
					className='light icon'
					onClick={handleClick}
				>
					<HeartIcon />
					<span className='sr-only'>Like</span>
				</Button>
			</div>
			<h3>Circle</h3>
			<Codeblock language='jsx'>{`<Button
	className='primary icon circle'
	onClick={handleClick}
>
	<PlayIcon />
	<span className='sr-only'>Play</span>
</Button>`}</Codeblock>
			<div className='mb-0 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					className='primary icon circle'
					onClick={handleClick}
				>
					<PlayIcon />
					<span className='sr-only'>Play</span>
				</Button>

				<Button
					className='secondary icon circle'
					onClick={handleClick}
				>
					<ArrowPathRoundedSquareIcon />
					<span className='sr-only'>Repeat</span>
				</Button>

				<Button
					className='info icon circle'
					onClick={handleClick}
				>
					<ArrowDownOnSquareIcon />
					<span className='sr-only'>Download</span>
				</Button>

				<Button
					className='success icon circle'
					onClick={handleClick}
				>
					<CheckIcon />
					<span className='sr-only'>Success</span>
				</Button>

				<Button
					className='warning icon circle'
					onClick={handleClick}
				>
					<StarIcon />
					<span className='sr-only'>Warning</span>
				</Button>

				<Button
					className='danger icon circle'
					onClick={handleClick}
				>
					<TrashIcon />
					<span className='sr-only'>Delete</span>
				</Button>

				<Button
					className='icon circle dark'
					onClick={handleClick}
				>
					<EllipsisHorizontalIcon />
					<span className='sr-only'>Toggle</span>
				</Button>

				<Button
					className='light icon circle'
					onClick={handleClick}
				>
					<HeartIcon />
					<span className='sr-only'>Like</span>
				</Button>
			</div>

			<h3>Outline</h3>

			<Codeblock language='jsx'>{`<Button
	className='primary icon outline'
	onClick={handleClick}
>
	<PlayIcon />
	<span className='sr-only'>Play</span>
</Button>`}</Codeblock>
			<div className='mb-0 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					className='primary icon outline'
					onClick={handleClick}
				>
					<PlayIcon />
					<span className='sr-only'>Play</span>
				</Button>

				<Button
					className='secondary icon outline'
					onClick={handleClick}
				>
					<ArrowPathRoundedSquareIcon />
					<span className='sr-only'>Repeat</span>
				</Button>

				<Button
					className='info icon outline'
					onClick={handleClick}
				>
					<ArrowDownOnSquareIcon />
					<span className='sr-only'>Download</span>
				</Button>

				<Button
					className='success icon outline'
					onClick={handleClick}
				>
					<CheckIcon />
					<span className='sr-only'>Success</span>
				</Button>

				<Button
					className='warning icon outline'
					onClick={handleClick}
				>
					<StarIcon />
					<span className='sr-only'>Warning</span>
				</Button>

				<Button
					className='danger icon outline'
					onClick={handleClick}
				>
					<TrashIcon />
					<span className='sr-only'>Delete</span>
				</Button>

				<Button
					className='icon dark outline'
					onClick={handleClick}
				>
					<EllipsisHorizontalIcon />
					<span className='sr-only'>Toggle</span>
				</Button>

				<Button
					className='light icon outline'
					onClick={handleClick}
				>
					<HeartIcon />
					<span className='sr-only'>Like</span>
				</Button>
			</div>
			<h3>Circle Outline</h3>
			<Codeblock language='jsx'>{`<Button
	className='primary circle outline'
	onClick={handleClick}
>
	<PlayIcon />
	<span className='sr-only'>Play</span>
</Button>`}</Codeblock>
			<div className='mb-0 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					className='primary icon circle outline'
					onClick={handleClick}
				>
					<PlayIcon />
					<span className='sr-only'>Play</span>
				</Button>

				<Button
					className='secondary icon circle outline'
					onClick={handleClick}
				>
					<ArrowPathRoundedSquareIcon />
					<span className='sr-only'>Repeat</span>
				</Button>

				<Button
					className='info icon circle outline'
					onClick={handleClick}
				>
					<ArrowDownOnSquareIcon />
					<span className='sr-only'>Download</span>
				</Button>

				<Button
					className='success icon circle outline'
					onClick={handleClick}
				>
					<CheckIcon />
					<span className='sr-only'>Success</span>
				</Button>

				<Button
					className='warning icon circle outline'
					onClick={handleClick}
				>
					<StarIcon />
					<span className='sr-only'>Warning</span>
				</Button>

				<Button
					className='danger icon circle outline'
					onClick={handleClick}
				>
					<TrashIcon />
					<span className='sr-only'>Delete</span>
				</Button>

				<Button
					className='icon circle dark outline'
					onClick={handleClick}
				>
					<EllipsisHorizontalIcon />
					<span className='sr-only'>Toggle</span>
				</Button>

				<Button
					className='light icon circle outline'
					onClick={handleClick}
				>
					<HeartIcon />
					<span className='sr-only'>Like</span>
				</Button>
			</div>
			<h3>Text with Icon</h3>
			<Codeblock language='jsx'>{`<Button
	className='primary icon circle'
	onClick={handleClick}
>
	<PlayIcon />
	<span className='sr-only'>Play</span>
</Button>

<Button
	className='danger rounded'
	onClick={handleClick}
>
	<TrashIcon /> Delete
</Button>

<Button
	className='dark outline'
	onClick={handleClick}
>
	More <EllipsisHorizontalIcon />
</Button>

<Button
	className='light pill outline'
	onClick={handleClick}
>
	<HeartIcon /> Like
</Button>

<Button
	className='link'
	onClick={handleClick}
>
	<ArrowDownOnSquareIcon /> Download
</Button>`}</Codeblock>
			<div className='mb-8 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					className='primary'
					onClick={handleClick}
				>
					<PlayIcon /> Play
				</Button>

				<Button
					className='danger rounded'
					onClick={handleClick}
				>
					<TrashIcon /> Delete
				</Button>

				<Button
					className='dark outline'
					onClick={handleClick}
				>
					More <EllipsisHorizontalIcon />
				</Button>

				<Button
					className='light pill outline'
					onClick={handleClick}
				>
					<HeartIcon /> Like
				</Button>

				<Button
					className='link'
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
					className='primary m-auto'
					onClick={handleClick}
				>
					X-Small
				</Button>

				<Button
					size='sm'
					className='secondary m-auto'
					onClick={handleClick}
				>
					Small
				</Button>

				<Button
					className='info m-auto'
					onClick={handleClick}
				>
					Default
				</Button>

				<Button
					size='lg'
					className='success m-auto'
					onClick={handleClick}
				>
					Large
				</Button>

				<Button
					size='xl'
					className='warning m-auto'
					onClick={handleClick}
				>
					X-Large
				</Button>
			</div>
			<div className='align-center mb-0 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					size='xs'
					className='primary pill m-auto outline'
					onClick={handleClick}
				>
					X-Small
				</Button>

				<Button
					size='sm'
					className='secondary pill m-auto outline'
					onClick={handleClick}
				>
					Small
				</Button>

				<Button
					className='info pill m-auto outline'
					onClick={handleClick}
				>
					Default
				</Button>

				<Button
					size='lg'
					className='success pill m-auto outline'
					onClick={handleClick}
				>
					Large
				</Button>

				<Button
					size='xl'
					className='warning pill m-auto outline'
					onClick={handleClick}
				>
					X-Large
				</Button>
			</div>
			<div className='align-center mb-0 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					size='xs'
					className='link'
					onClick={handleClick}
				>
					<ArrowDownOnSquareIcon /> X-Small
				</Button>

				<Button
					size='sm'
					className='link'
					onClick={handleClick}
				>
					<ArrowDownOnSquareIcon /> Small
				</Button>

				<Button
					className='link'
					onClick={handleClick}
				>
					<ArrowDownOnSquareIcon /> Default
				</Button>

				<Button
					size='lg'
					className='link'
					onClick={handleClick}
				>
					<ArrowDownOnSquareIcon /> Large
				</Button>

				<Button
					size='xl'
					className='link'
					onClick={handleClick}
				>
					<ArrowDownOnSquareIcon /> X-Large
				</Button>
			</div>
			<div className='align-center mb-0 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					size='xs'
					className='btn icon circle dark m-auto'
					onClick={handleClick}
				>
					<PlusIcon />
					<span className='sr-only'>X-Small</span>
				</Button>

				<Button
					size='sm'
					className='btn icon primary circle m-auto'
					onClick={handleClick}
				>
					<PlusIcon />
					<span className='sr-only'>Small</span>
				</Button>

				<Button
					className='btn icon info circle m-auto'
					onClick={handleClick}
				>
					<PlusIcon />
					<span className='sr-only'>Play</span>
				</Button>

				<Button
					size='lg'
					className='btn icon circle dark m-auto outline'
					onClick={handleClick}
				>
					<PlusIcon />
					<span className='sr-only'>Large</span>
				</Button>

				<Button
					size='xl'
					className='btn icon light circle m-auto'
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
					className='primary m-auto'
					onClick={handleClick}
					disabled={disabled}
				>
					Primary
				</Button>

				<Button
					className='primary pill m-auto outline'
					onClick={handleClick}
					disabled
				>
					Primary
				</Button>

				<Button
					className='primary icon circle m-auto'
					onClick={handleClick}
					disabled
				>
					<StarIcon />
					<span className='sr-only'>Star</span>
				</Button>

				<Button
					className='primary icon circle m-auto outline'
					onClick={handleClick}
					disabled
				>
					<StarIcon />
					<span className='sr-only'>Star</span>
				</Button>

				<Button
					className='primary pill m-auto'
					onClick={handleClick}
					disabled
				>
					<StarIcon /> Fave
				</Button>

				<Button
					className='primary pill m-auto outline'
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
	className={\`$\{toggle ? 'light' : 'dark'} pill\`}
	onClick={() => setToggle(!toggle)}
>
	<StarIcon /> Fave
</Button>`}
			</Codeblock>

			<div className='mb-8 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Button
					className={`${toggle ? 'light' : 'dark'} m-auto`}
					onClick={() => setToggle(!toggle)}
				>
					Toggle
				</Button>

				<Button
					className={`${toggle ? 'warning' : 'primary'} pill m-auto outline`}
					onClick={() => setToggle(!toggle)}
				>
					Toggle
				</Button>

				<Button
					className={`${toggle ? 'bg-light text-success' : 'light'} icon circle m-auto`}
					onClick={() => setToggle(!toggle)}
				>
					<StarIcon />
					<span className='sr-only'>Star</span>
				</Button>

				<Button
					className={`${toggle ? 'light' : 'dark'} icon circle m-auto outline`}
					onClick={() => setToggle(!toggle)}
				>
					<StarIcon />
					<span className='sr-only'>Star</span>
				</Button>

				<Button
					className={`${toggle ? 'light' : 'dark'} pill m-auto`}
					onClick={() => setToggle(!toggle)}
				>
					<StarIcon /> Fave
				</Button>

				<Button
					className={`${toggle ? 'success' : 'info'} pill m-auto outline`}
					onClick={() => setToggle(!toggle)}
				>
					<StarIcon /> Fave
				</Button>
			</div>

			<hr />

			<h2>Options</h2>

			<Codeblock language='jsx'>
				{`size: 'xs' | 'sm' | 'lg' | 'xl' | undefined
className: string | undefined
id: string | undefined
title: string | undefined
onClick?: (e: any) => void | undefined
onBlur?: (e: any) => void | undefined
type?: 'submit' | 'reset' | 'button' | undefined
disabled?: boolean | undefined
tabindex?: number | undefined

<Button
	size='xl'
	className='secondary icon circle outline' // Any Tailwind classes can be added here
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
					className='secondary icon circle outline'
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
