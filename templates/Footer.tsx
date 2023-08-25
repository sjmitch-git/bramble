import { Footer, Codeblock } from '@/ui'

import config from '@/app.config'

const FooterTemplate = () => {
	const { footerLinks } = config
	const { authorName, authorUrl, social } = config.author
	return (
		<>
			<h2>Basic Usage</h2>
			<p>
				Add to <code>layout.tsx</code>
			</p>
			<Codeblock language='jsx'>
				{`import {Footer} from '@/ui'
     
<Footer />
`}
			</Codeblock>
			<h3>Output</h3>
			<div className='mb-12 bg-light p-4'>
				<Footer
					topButton={false}
					className='border bg-white'
				></Footer>
			</div>
			<h2>Author</h2>

			<Codeblock language='jsx'>
				{`const authorName = YOUR NAME
     
<Footer
	author={authorName}
/>
`}
			</Codeblock>

			<h3>Output</h3>

			<div className='mb-12 bg-light p-4'>
				<Footer
					author={authorName}
					topButton={false}
					className='border bg-white'
				></Footer>
			</div>

			<h2>Author URL</h2>

			<Codeblock language='jsx'>
				{`const authorName = YOUR NAME
const authorUrl = LINK TO YOUR WEBSITE
     
<Footer
	author={authorName}
	authorUrl={authorUrl}
/>
`}
			</Codeblock>

			<h3>Output</h3>
			<div className='mb-12 bg-light p-4'>
				<Footer
					author={authorName}
					authorUrl={authorUrl}
					topButton={false}
					className='border bg-white'
				></Footer>
			</div>

			<h2>Related Links</h2>

			<Codeblock language='jsx'>
				{`const footerLinks = [
	{
		href: '/about',
		label: 'About',
	},
	{
		href: '/terms_and_conditions',
		label: 'Terms',
	},
	{
		href: '/privacy_policy',
		label: 'Privacy',
	},
	{
		href: '/contact',
		label: 'Contact',
	},
]
     
<Footer
	footerLinks={footerLinks}
/>
`}
			</Codeblock>

			<h3>Output</h3>
			<div className='mb-12 bg-light p-4'>
				<Footer
					footerLinks={footerLinks}
					topButton={false}
					className='border bg-white'
				></Footer>
			</div>

			<h2>Social Links</h2>

			<p>Supported links: Twitter, GitHub, LinkedIn, Facebook, Dev, Instagram, YouTube</p>

			<Codeblock language='jsx'>
				{`const socialLinks = [
	{
		id: // 'twitter' || 'github' || 'linkedin' || 'facebook' || 'dev' || 'instagram' || 'youtube',
		value: URL LINK,
	}
]
     
<Footer
	socialLinks={socialLinks}
/>
`}
			</Codeblock>

			<h3>Output</h3>

			<div className='mb-12 bg-light p-4'>
				<Footer
					socialLinks={social}
					topButton={false}
					className='border bg-white'
				></Footer>
			</div>

			<h2>Custom JSX</h2>

			<Codeblock language='jsx'>
				{`<Footer
	author={authorName}
	authorUrl={authorUrl}
	socialLinks={social}
>
	<!-- Add custom JSX/HTML here -->
	<div className='text-center'>
		<h4>JSX or components may be added here</h4>
	</div>
	<!-- END: Add custom JSX/HTML here -->
</Footer>
`}
			</Codeblock>

			<h3>Output</h3>
			<div className='mb-12 bg-light p-4'>
				<Footer
					author={authorName}
					authorUrl={authorUrl}
					socialLinks={social}
					topButton={false}
					className='border bg-white'
				>
					<div className='text-center'>
						<h4>JSX or components may be added here</h4>
					</div>
				</Footer>
			</div>

			<h2>Back to Top Button</h2>

			<Codeblock language='jsx'>
				{`// Back to top button is added by default
				
<Footer
	topButton={false} // disabled
/>`}
			</Codeblock>
		</>
	)
}

export default FooterTemplate
