import { Brand, Footer } from '@/ui'

import config from '@/app.config'

export const FooterSection = () => {
	const { footerLinks } = config
	const { authorName, authorUrl, social } = config.author
	return (
		<Footer
			author={authorName !== null ? authorName : undefined}
			authorUrl={authorUrl !== null ? authorUrl : undefined}
			socialLinks={social}
			footerLinks={footerLinks}
			className=''
		>
			<Brand
				height={180}
				width={180}
				layout='flex flex-col mx-auto'
				className='text-4xl'
			/>
		</Footer>
	)
}
