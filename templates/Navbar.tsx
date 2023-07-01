'use client'

import Navbar from '@/components/navbar'
import Codeblock from '@/components/codeblock'

const NavbarTemplate = () => {
	return (
		<>
			<h2>Usage</h2>

			<div className='mb-8 border p-4'>
				<header className='header demo'>
					<Navbar />
				</header>
			</div>

			<Codeblock language='jsx'>
				{`import Navbar from '@/components/navbar'
				
<header className='header'>
	<Navbar />
</header>`}
			</Codeblock>
		</>
	)
}

export default NavbarTemplate
