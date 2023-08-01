import { Navbar } from '@/components'
import { Codeblock, Brand } from '@/components'

const NavbarTemplate = () => {
	return (
		<>
			<h2>Usage</h2>

			<div className='mb-8 border p-4'>
				<header className='header demo'>
					<Navbar>
						<Brand className='text-4xl' />
					</Navbar>
				</header>
			</div>

			<Codeblock language='jsx'>
				{`import {Navbar, Brand} from '@/components'
				
<header className='header'>
	<Navbar>
		<Brand className='text-4xl' />
	</Navbar>
</header>`}
			</Codeblock>
		</>
	)
}

export default NavbarTemplate
