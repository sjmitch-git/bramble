'use client'

import { Codeblock, Table } from '@/components'

import data from '@/data/carts.json'

const TableTemplate = () => {
	return (
		<>
			<h2>Usage</h2>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import {Table} from '@/components'
import data from '@/data/carts.json'
                    
<Table
    data={data}
    height={200}
    ignore={['id']}
    caption='Shopping Cart'
    dividers={true}
/>`}
				</Codeblock>
			</div>

			<h3>Output</h3>

			<div className='bg-light md:p-4'>
				<Table
					data={data}
					height={200}
					ignore={['id']}
					caption='Shopping Cart'
					dividers={true}
				/>
			</div>

			<h2>Options</h2>

			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`className?: string | undefined
data: any[]
height?: number | undefined
width?: number | undefined
ignore?: string[] | undefined
caption?: string | undefined
dividers?: boolean | undefined
`}
				</Codeblock>
			</div>

			<hr />

			<h2>RTL</h2>

			<div
				className='bg-light md:p-4'
				dir='rtl'
			>
				<Table
					data={data}
					height={200}
					ignore={['id']}
					caption='Shopping Cart'
					dividers={true}
				/>
			</div>

			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`<div dir='rtl'>
    <Table
        data={data}
        height={200}
        ignore={['id']}
        caption='Shopping Cart'
        dividers={true}
    />
</div>`}
				</Codeblock>
			</div>
		</>
	)
}

export default TableTemplate
