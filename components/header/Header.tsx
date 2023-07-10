import Breadcrumbs from '@/components/breadcrumbs'
import Navbar from '@/components/navbar'

const Header = () => {
	return (
		<header className='header'>
			<Navbar />
			<Breadcrumbs
				size='lg'
				className='pt-12'
			/>
		</header>
	)
}

export default Header
