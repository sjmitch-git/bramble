import Copyright from './copyright'
import SocialLinks from './sociallinks'
import FooterLinks from './footerlinks'
import { ButtonToTop } from '@/ui'

import { FooterProps } from './types'

export function Footer({
	className = '',
	author,
	authorUrl,
	copyright = true,
	socialLinks,
	footerLinks,
	topButton = true,
	children,
}: FooterProps) {
	return (
		<footer className={`footer ${className}`}>
			<div className='footer-custom'>{children}</div>

			<div className='footer-content'>
				{footerLinks && <FooterLinks footerLinks={footerLinks} />}

				{socialLinks && <SocialLinks socialLinks={socialLinks} />}

				{copyright && (
					<Copyright
						author={author}
						authorUrl={authorUrl}
					/>
				)}
			</div>

			{topButton && <ButtonToTop className='fixed bottom-4 right-4 bg-secondary' />}
		</footer>
	)
}
