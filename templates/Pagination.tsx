import Pagination from '@/components/pagination'
import Codeblock from '@/components/codeblock'

const PaginationTemplate = () => {
	return (
		<>
			<h2>Usage</h2>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import Pagination from '@/components/pagination'

return (			
	<Pagination
        size={'base'}   	// 'sm' | 'base' | 'lg' | undefined
		theme={'dark'}  	// 'dark' | 'light'
		results={49}    	// total results
        range={12}      	// results per page
		feedback={true} 	// show feedback message
		vertical={false} 	// vertical orientation
		minimal={false} 	// minimal display
		icons={true}		// display icons rather than labels
    />
)`}
				</Codeblock>
				<h3>Sizes</h3>
				<div className='mb-8 flex flex-col justify-center gap-4 bg-gray-300 p-4'>
					<Pagination
						size='sm'
						theme='dark'
						results={49}
						range={12}
						icons={true}
					/>
				</div>
				<div className='mb-8 flex flex-col justify-center gap-4 bg-gray-300 p-4'>
					<Pagination
						size='base'
						theme='light'
						results={49}
						range={12}
						icons={true}
					/>
					<Pagination
						size='base'
						theme='light'
						results={49}
						range={12}
					/>
				</div>
				<div className='mb-8 flex flex-col justify-center gap-4 bg-gray-300 p-4'>
					<Pagination
						theme='dark'
						size='lg'
						icons={true}
						results={49}
						range={12}
						feedback={true}
					/>
				</div>
			</div>
			<h3>Vertical</h3>
			<div className='mb-8 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Pagination
					size='sm'
					theme='dark'
					results={49}
					range={12}
					feedback={false}
					vertical={true}
				/>
				<Pagination
					size='sm'
					theme='dark'
					results={49}
					range={12}
					feedback={false}
					vertical={true}
					icons={true}
				/>
			</div>
			<h3>RTL</h3>
			<div
				className='mb-8 flex flex-col justify-center gap-4 bg-gray-300 p-4'
				dir='rtl'
			>
				<Pagination
					size='sm'
					theme='dark'
					results={49}
					range={12}
					feedback={false}
				/>

				<Pagination
					size='sm'
					theme='dark'
					results={49}
					range={12}
					feedback={false}
					icons={true}
				/>
			</div>
			<h3>Minimal</h3>
			<div className='mb-8 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
				<Pagination
					theme='light'
					results={49}
					range={12}
					feedback={false}
					icons={true}
					minimal={true}
				/>
			</div>
		</>
	)
}

export default PaginationTemplate
