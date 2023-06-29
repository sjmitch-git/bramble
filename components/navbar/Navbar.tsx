import Navlinks from './Navlinks'
import Navbrand from './Navbrand'

const Navbar = () => {
	return (
		<nav className={`navbar`}>
			<Navbrand />
			<Navlinks />
		</nav>
	)
}

export default Navbar
