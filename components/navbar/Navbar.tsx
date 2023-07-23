import Navlinks from './Navlinks'
import { Navbrand } from './Navbrand'

export const Navbar = () => {
	return (
		<nav className={`navbar`}>
			<Navbrand />
			<Navlinks />
		</nav>
	)
}
