import { Breadcrumbs } from '@/components'

import { Navbar } from '@/components/navbar'

const Header = () => {
	return (
		<header className='header'>
			<Navbar />
			<Breadcrumbs
				size='lg'
				className='pt-6 md:pt-12'
			/>
		</header>
	)
}

export default Header
