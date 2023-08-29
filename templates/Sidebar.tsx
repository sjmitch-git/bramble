'use client'

import UseSidebar from '@/hooks/useSidebar'

import { Codeblock, NewsLetter, User } from '@/ui'

const SidebarTemplate = () => {
	const { showSidebar, closeSidebar } = UseSidebar()

	const onsubmit = (e: any) => {
		e.preventDefault()
		closeSidebar()
		//const data = new FormData(e.target)
		//console.log(Object.fromEntries(data.entries()))
	}

	const oncancel = (e: any) => {
		e.preventDefault()
		closeSidebar()
	}

	return (
		<>
			<h2>Usage</h2>
			<p>
				The <code>Sidebar</code> component is available globally via the{' '}
				<code>Context API</code> and is imported using a custom hook:{' '}
				<code>UseSidebar</code>.
			</p>
			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`import UseDrawer from '@/hooks/UseSidebar'

import { NewsLetter, User } from '@/ui' // import component to be added to drawer.

const { showSidebar, closeSidebar } = UseSidebar()

// close Sidebar
const oncancel = (e: any) => {
    e.preventDefault()
    closeSidebar()
}

// open Sidebar
showSidebar(
	// add html or component,
	// add styles,
	// add position 'top' or 'bottom',
)
`}
				</Codeblock>
			</div>

			<h2>Position</h2>
			<h3>Right</h3>
			<div className='mb-4 flex gap-8'>
				<button
					className='btn'
					onClick={() =>
						showSidebar(
							<NewsLetter
								layout='column'
								closeLabel='Cancel'
								closeStyles='dark outline'
								onSubmit={onsubmit}
								onclick={oncancel}
							/>,
							'bg-neutral text-dark',
							'right'
						)
					}
				>
					show sidebar right
				</button>
			</div>
			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`<button
    className='btn'
    onClick={() =>
        showSidebar(
            <NewsLetter
                layout='column'
                closeLabel='Cancel'
                closeStyles='dark outline'
                onSubmit={onsubmit}
                onclick={oncancel}
            />,
            'bg-dark text-light',
            'right'
        )
    }
>
    show sidebar right
</button>
`}
				</Codeblock>
			</div>

			<h3>Left</h3>
			<div className='mb-4 flex gap-8'>
				<button
					className='btn'
					onClick={() =>
						showSidebar(
							<User
								layout='column'
								closeLabel='Cancel'
								closeStyles='dark outline'
								onSubmit={onsubmit}
								onclick={oncancel}
							/>,
							'bg-light text-dark',
							'left'
						)
					}
				>
					show sidebar left
				</button>
			</div>
			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`<button
    className='btn'
    onClick={() =>
        showSidebar(
            <User
                layout='column'
                closeLabel='Cancel'
                closeStyles='dark outline'
                onSubmit={onsubmit}
                onclick={oncancel}
            />,
            'bg-light text-dark',
            'left'
        )
    }
>
    show sidebar left
</button>
`}
				</Codeblock>
			</div>
		</>
	)
}

export default SidebarTemplate
