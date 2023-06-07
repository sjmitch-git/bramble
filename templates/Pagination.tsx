import Pagination from '@/components/pagination'
import Codeblock from '@/components/codeblock'

interface PaginationTemplateProps {
	page: string
}

const PaginationTemplate = ({ page }: PaginationTemplateProps) => {
	return (
		<>
			<h2>Usage</h2>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import Pagination from '@/components/pagination'

return (			
	<Pagination
        size={'base'}   // 'sm' | 'base' | 'lg'
		theme={'dark'}  // 'dark' | 'light'
		results={49}    // total results
        range={12}      // results per page
        page={1}        // current page
    />
)`}
				</Codeblock>
				<h3>Sizes</h3>
				<div className='mb-8 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
					<Pagination
						size='sm'
						theme='dark'
						results={49}
						range={12}
						page={page}
					/>
				</div>
				<div className='mb-8 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
					<Pagination
						size='base'
						theme='light'
						results={49}
						range={12}
						page={page}
					/>
				</div>
				<div className='mb-8 flex flex-wrap justify-center gap-4 bg-gray-300 p-4'>
					<Pagination
						theme='dark'
						size='lg'
						results={49}
						range={12}
						page={page}
					/>
				</div>
			</div>
		</>
	)
}

export default PaginationTemplate
