import {
	PlayIcon,
	TrashIcon,
	ArrowPathRoundedSquareIcon,
	ArrowDownOnSquareIcon,
	CheckIcon,
	StarIcon,
	EllipsisHorizontalIcon,
	HeartIcon,
	EnvelopeIcon,
} from '@heroicons/react/24/solid'

const ButtonsTemplate = () => {
	return (
		<>
			<h1>Buttons</h1>

			<h2>Basic</h2>

			<div className='mb-8 flex max-w-4xl flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<button
					type='button'
					className='btn-primary p-4'
				>
					Primary
				</button>
				<button
					type='button'
					className='btn-secondary'
				>
					Secondary
				</button>
				<button
					type='button'
					className='btn-info'
				>
					Info
				</button>
				<button
					type='button'
					className='btn-success'
				>
					Success
				</button>
				<button
					type='button'
					className='btn-warning'
				>
					Warning
				</button>
				<button
					type='button'
					className='btn-danger'
				>
					Danger
				</button>
				<button
					type='button'
					className='btn-dark'
				>
					Dark
				</button>
				<button
					type='button'
					className='btn-light'
				>
					Light
				</button>
				<button
					type='button'
					className='btn-link'
				>
					Link
				</button>
				<button
					type='button'
					className='btn-secondary'
					disabled
				>
					Disabled
				</button>
			</div>

			<h2>Outline Buttons</h2>

			<div className='mb-8 flex max-w-4xl flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<button
					type='button'
					className='btn-outline text-primary'
				>
					Primary
				</button>
				<button
					type='button'
					className='btn-outline text-secondary'
				>
					Secondary
				</button>
				<button
					type='button'
					className='btn-outline text-info'
				>
					Info
				</button>
				<button
					type='button'
					className='btn-outline text-success'
				>
					Success
				</button>
				<button
					type='button'
					className='btn-outline text-warning'
				>
					Warning
				</button>
				<button
					type='button'
					className='btn-outline text-danger'
				>
					Danger
				</button>
				<button
					type='button'
					className='btn-outline text-dark'
				>
					Dark
				</button>
				<button
					type='button'
					className='btn-outline text-light'
				>
					Light
				</button>
				<button
					type='button'
					className='btn-outline text-primary'
					disabled
				>
					Disabled
				</button>
			</div>

			<h2>Sizes</h2>

			<div className='align-center mb-8 flex max-w-4xl flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<button
					type='button'
					className='btn-primary btn-sm m-auto'
				>
					Small
				</button>

				<button
					type='button'
					className='btn-primary m-auto'
				>
					Default
				</button>

				<button
					type='button'
					className='btn-primary btn-lg m-auto'
				>
					Large
				</button>

				<button
					type='button'
					className='btn-primary btn-xl m-auto'
				>
					X-Large
				</button>
			</div>

			<h2>Icons</h2>

			<div className='mb-8 flex max-w-4xl flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<button
					type='button'
					className='btn-primary btn-icon'
				>
					<PlayIcon />
					<span className='sr-only'>Play</span>
				</button>
				<button
					type='button'
					className='btn-secondary btn-icon'
				>
					<ArrowPathRoundedSquareIcon />
					<span className='sr-only'>Repeat</span>
				</button>
				<button
					type='button'
					className='btn-info btn-icon'
				>
					<ArrowDownOnSquareIcon />
					<span className='sr-only'>Download</span>
				</button>
				<button
					type='button'
					className='btn-success btn-icon'
				>
					<CheckIcon />
					<span className='sr-only'>Success</span>
				</button>
				<button
					type='button'
					className='btn-warning btn-icon'
				>
					<StarIcon />
					<span className='sr-only'>Warning</span>
				</button>
				<button
					type='button'
					className='btn-danger btn-icon'
				>
					<TrashIcon />
					<span className='sr-only'>Delete</span>
				</button>
				<button
					type='button'
					className='btn-dark btn-icon'
				>
					<EllipsisHorizontalIcon />
					<span className='sr-only'>Toggle</span>
				</button>
				<button
					type='button'
					className='btn-light btn-icon'
				>
					<HeartIcon />
					<span className='sr-only'>Like</span>
				</button>
				<button
					type='button'
					className='btn-light btn-icon'
				>
					<HeartIcon className='text-success' />
					<span className='sr-only'>Like</span>
				</button>
				<button
					type='button'
					className='btn-danger btn-icon'
					disabled
				>
					<EnvelopeIcon />
					<span className='sr-only'>Mail</span>
				</button>
			</div>

			<h2>Outline Icons</h2>

			<div className='mb-8 flex max-w-4xl flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<button
					type='button'
					className='btn-outline btn-icon text-primary'
				>
					<PlayIcon />
					<span className='sr-only'>Play</span>
				</button>
				<button
					type='button'
					className='btn-outline btn-icon text-secondary'
				>
					<ArrowPathRoundedSquareIcon />
					<span className='sr-only'>Repeat</span>
				</button>
				<button
					type='button'
					className='btn-outline btn-icon text-info'
				>
					<ArrowDownOnSquareIcon />
					<span className='sr-only'>Download</span>
				</button>
				<button
					type='button'
					className='btn-outline btn-icon text-success'
				>
					<CheckIcon />
					<span className='sr-only'>Success</span>
				</button>
				<button
					type='button'
					className='btn-outline btn-icon text-warning'
				>
					<StarIcon />
					<span className='sr-only'>Warning</span>
				</button>
				<button
					type='button'
					className='btn-outline btn-icon text-danger'
				>
					<TrashIcon />
					<span className='sr-only'>Delete</span>
				</button>
				<button
					type='button'
					className='btn-outline btn-icon text-dark'
				>
					<EllipsisHorizontalIcon />
					<span className='sr-only'>Toggle</span>
				</button>
				<button
					type='button'
					className='btn-outline btn-icon text-light'
				>
					<HeartIcon />
					<span className='sr-only'>Like</span>
				</button>
				<button
					type='button'
					className='btn-outline btn-icon text-info'
					disabled
				>
					<EnvelopeIcon />
					<span className='sr-only'>Mail</span>
				</button>
			</div>

			<h2>Icon Sizes</h2>

			<div className='bg-gray-300'>
				<div className='align-center mb-0 flex max-w-4xl flex-wrap justify-center gap-4 p-4'>
					<button
						type='button'
						className='btn-primary btn-icon btn-xs m-auto'
					>
						<PlayIcon />
					</button>

					<button
						type='button'
						className='btn-primary btn-icon btn-sm m-auto'
					>
						<PlayIcon />
					</button>

					<button
						type='button'
						className='btn-primary btn-icon m-auto'
					>
						<PlayIcon />
					</button>

					<button
						type='button'
						className='btn-primary btn-icon btn-lg m-auto'
					>
						<PlayIcon />
					</button>

					<button
						type='button'
						className='btn-primary btn-icon btn-xl m-auto'
					>
						<PlayIcon />
					</button>
				</div>
				<div className='align-center mb-0 flex max-w-4xl flex-wrap justify-center gap-4 p-4'>
					<button
						type='button'
						className='btn-outline btn-icon btn-xs m-auto border text-primary'
					>
						<PlayIcon />
					</button>

					<button
						type='button'
						className='btn-outline btn-icon btn-sm m-auto border-2 text-primary'
					>
						<PlayIcon />
					</button>

					<button
						type='button'
						className='btn-outline btn-icon m-auto text-primary'
					>
						<PlayIcon />
					</button>

					<button
						type='button'
						className='btn-outline btn-icon btn-lg m-auto border-8 text-primary'
					>
						<PlayIcon />
					</button>

					<button
						type='button'
						className='btn-outline btn-icon btn-xl m-auto border-12 text-primary'
					>
						<PlayIcon />
					</button>
				</div>
			</div>
		</>
	)
}

export default ButtonsTemplate
