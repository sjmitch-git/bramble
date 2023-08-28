'use client'

import UseDrawer from '@/hooks/useDrawer'

import { Codeblock, NewsLetter } from '@/ui'

const DrawerTemplate = () => {
	const { showDrawer, closeDrawer } = UseDrawer()

	const onsubmit = (e: any) => {
		e.preventDefault()
		closeDrawer()
		//const data = new FormData(e.target)
		//console.log(Object.fromEntries(data.entries()))
	}

	const oncancel = (e: any) => {
		e.preventDefault()
		closeDrawer()
	}

	return (
		<>
			<h2>Usage</h2>
			<p>
				The <code>drawer</code> component is available globally via the{' '}
				<code>Context API</code> and is imported using a custom hook: <code>useDrawer</code>
				.
			</p>
			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`import UseDrawer from '@/hooks/useDrawer'

import { NewsLetter } from '@/ui' // import component to be added to drawer.

const { showDrawer, closeDrawer } = UseDrawer() // expose functionality from custom hook

// close drawer
const oncancel = (e: any) => {
	e.preventDefault()
	closeDrawer()
}

<button
	className='btn'
	onClick={() =>
		showDrawer(
			<NewsLetter
				layout='row'
				closeLabel='Cancel'
				closeStyles='dark outline'
				onSubmit={onsubmit}
				onclick={oncancel}
			/>,
			'bg-light text-dark',
			'top'
		)
	}
>
	show drawer top
</button>
`}
				</Codeblock>
			</div>
			<h2>Options</h2>

			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`showDrawer(
	// add html or component,
	// add styles,
	// add position 'top' or 'bottom',
)
`}
				</Codeblock>
			</div>

			<h2>Position</h2>
			<h3>Top</h3>
			<div className='mb-12 flex gap-8'>
				<button
					className='btn'
					onClick={() =>
						showDrawer(
							<NewsLetter
								layout='row'
								closeLabel='Cancel'
								closeStyles='dark outline'
								onSubmit={onsubmit}
								onclick={oncancel}
							/>,
							'bg-light text-dark md:px-4',
							'top'
						)
					}
				>
					show drawer top
				</button>
			</div>
			<h3>Bottom</h3>
			<div className='mb-12 flex gap-8'>
				<button
					className='btn'
					onClick={() =>
						showDrawer(
							<NewsLetter
								layout='row'
								closeLabel='Cancel'
								closeStyles='dark outline'
								onSubmit={onsubmit}
								onclick={oncancel}
							/>,
							'bg-light text-dark md:px-4',
							'bottom'
						)
					}
				>
					show drawer bottom
				</button>
			</div>
		</>
	)
}

export default DrawerTemplate
