import Navlinks from './Navlinks'
import { Navbrand } from './Navbrand'
import { Brand } from '@/components'

export const Navbar = () => {
	return (
		<nav className={`navbar`}>
			<Brand className='text-4xl' />
			<Navlinks />
		</nav>
	)
}
