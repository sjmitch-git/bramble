import Dropdown from '@/components/dropdown'
import Codeblock from '@/components/codeblock'

import config from '@/app.config'

const DropdownTemplate = () => {
	const { siteLinks } = config

	const data = [
		{
			href: '#',
			label: 'Group Link',
			links: [
				{
					href: '#',
					label: 'Sub Link 1',
					links: [
						{
							href: '#',
							label: 'Sub sub link 1',
						},
						{
							href: '#',
							label: 'Sub sub link 2',
						},
					],
				},
				{
					href: '#',
					label: 'Sub Link 2',
				},
				{
					href: '#',
					label: 'Sub Link 3',
				},
			],
		},
	]

	return (
		<>
			<h2>Usage</h2>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import Dropdown from '@/components/dropdown'

const data = [
	{
		href: '#',
		label: 'Group Link',
		links: [
			{
				href: '#',
				label: 'Sub Link 1',
				links: [
					{
						href: '#',
						label: 'Sub sub link 1',
					},
					{
						href: '#',
						label: 'Sub sub link 2',
					},
				],
			},
			{
				href: '#',
				label: 'Sub Link 2',
			},
			{
				href: '#',
				label: 'Sub Link 3',
			},
		],
	},
]
                    
<Dropdown links={data} />

`}
				</Codeblock>
			</div>

			<h2>Default</h2>

			<div className='flex justify-center bg-light p-4'>
				<Dropdown links={data} />
			</div>

			<h2>Styled</h2>

			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`<Dropdown
	className='btn pill dark gap-4 text-light'
	button='bg-secondary icon circle ms-2'
	size='lg'
	...
/>`}
				</Codeblock>
			</div>

			<div className='flex justify-center bg-light p-4'>
				<Dropdown
					className='btn pill dark gap-4 text-light'
					button='bg-secondary icon circle ms-2'
					size='lg'
					links={[siteLinks[0]]}
				/>
			</div>

			<h2>RTL</h2>

			<div
				className='flex justify-center bg-light p-4'
				dir='rtl'
			>
				<Dropdown links={data} />
			</div>

			<div className='mb-12'>
				<Codeblock language='jsx'>
					{`<div dir='rtl'>
	<Dropdown links={data} />
</div>`}
				</Codeblock>
			</div>
			<hr />
		</>
	)
}

export default DropdownTemplate
