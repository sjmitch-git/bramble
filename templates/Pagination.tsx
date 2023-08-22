'use client'

import { useState, useEffect } from 'react'

import { Codeblock, Pagination } from '@/components'

const PaginationTemplate = () => {
	const [page, setPage] = useState('1')

	useEffect(() => {
		console.log('page useeffect', page)
	}, [page])

	return (
		<>
			<h2>Usage</h2>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import {Pagination} from '@/components'

const [page, setPage] = useState('1')

return (			
	<Pagination
        size={'base'}   	// 'sm' | 'base' | 'lg' | undefined
		theme={'dark'}  	// 'dark' | 'light'
		results={49}    	// total results
        range={12}      	// results per page
		feedback={true} 	// show/hide feedback message. show by default
		vertical={true} 	// vertical orientation. false by default
		minimal={false} 	// minimal display
		icons={false}		// display labels rather than icons
		page={page}			// current page value
		onChange={setPage}	// change page value
    />
)`}
				</Codeblock>
				<h2>Sizes</h2>
				<p>
					Optional. Default size is <code>base</code>.
				</p>
				<div className='mb-4 flex flex-col items-center justify-center gap-4 bg-gray-300 p-4'>
					<p className='mb-0'>
						<code>size='sm'</code>
					</p>
					<Pagination
						size='sm'
						theme='light'
						results={49}
						range={12}
						page={page}
						onChange={setPage}
					/>

					<p className='mb-0 mt-12'>
						<code>size='base'</code>
					</p>
					<Pagination
						size='base'
						theme='light'
						results={49}
						range={12}
						page={page}
						onChange={setPage}
					/>

					<p className='mb-0 mt-12'>
						<code>size='lg'</code>
					</p>
					<Pagination
						size='lg'
						theme='light'
						results={49}
						range={12}
						page={page}
						onChange={setPage}
					/>
				</div>

				<div className='mb-12'>
					<Codeblock language='jsx'>
						{`<Pagination
	size={'sm'}   // 'sm' | 'base' | 'lg' | undefined
	...
/>`}
					</Codeblock>
				</div>

				<h2>Icons</h2>
				<p>
					Optional. Icons are displayed by default. To display labels instead set{' '}
					<code>icons=&#123;false&#125;</code>.
				</p>

				<div className='mb-4 flex flex-col justify-center gap-4 bg-gray-300 p-4'>
					<Pagination
						size='base'
						theme='light'
						results={49}
						range={12}
						page={page}
						onChange={setPage}
						icons={false}
					/>
				</div>
				<div className='mb-12'>
					<Codeblock language='jsx'>
						{`<Pagination
	icons={false} 
	...
/>`}
					</Codeblock>
				</div>

				<h2>Theme</h2>
				<p>
					Themes are <code>light</code> or <code>dark</code>.
				</p>

				<div className='mb-4 flex flex-col justify-center gap-4 bg-gray-300 p-4'>
					<Pagination
						theme='light'
						icons={true}
						results={49}
						range={12}
						page={page}
						onChange={setPage}
					/>
					<br />
					<Pagination
						theme='dark'
						icons={true}
						results={49}
						range={12}
						page={page}
						onChange={setPage}
					/>
				</div>
			</div>

			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`<Pagination
	theme='dark' || 'light'
	...
/>`}
				</Codeblock>
			</div>

			<h3>Vertical</h3>
			<div className='mb-4 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Pagination
					size='sm'
					theme='dark'
					results={49}
					range={12}
					feedback={false}
					vertical={true}
					page={page}
					onChange={setPage}
				/>
			</div>
			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`<Pagination
	vertical={true}
	feedback={false} // remove feedback
	...
/>`}
				</Codeblock>
			</div>

			<h3>Feedback</h3>
			<p>
				Feedback message is displayed by default. To hide use{' '}
				<code>feedback=&#123;false&#125;</code>.
			</p>
			<div className='mb-4 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Pagination
					theme='dark'
					results={49}
					range={12}
					feedback={false}
					page={page}
					onChange={setPage}
				/>
			</div>
			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`<Pagination
	feedback={false} // remove feedback
	...
/>`}
				</Codeblock>
			</div>

			<h3>RTL</h3>
			<div
				className='mb-12 flex flex-col justify-center gap-4 bg-gray-300 p-4'
				dir='rtl'
			>
				<Pagination
					theme='light'
					results={49}
					range={12}
					feedback={false}
					page={page}
					icons={false}
					onChange={setPage}
				/>
			</div>
			<h3>Minimal</h3>
			<p>Minimal layout displays only next and previous buttons.</p>
			<div className='mb-4 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Pagination
					theme='light'
					results={49}
					range={12}
					feedback={false}
					minimal={true}
					page={page}
					onChange={setPage}
				/>
			</div>
			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`<Pagination
	minimal={true} // add this
	...
/>`}
				</Codeblock>
			</div>
		</>
	)
}

export default PaginationTemplate
