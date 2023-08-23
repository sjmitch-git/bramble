import { Header, Breadcrumbs, Brand, Navbar } from '@/components'

export const HeaderSection = () => {
	return (
		<Header>
			<Navbar>
				<Brand className='text-4xl' />
			</Navbar>
			<Breadcrumbs
				size='lg'
				className='pt-6 md:pt-12'
			/>
		</Header>
	)
}
