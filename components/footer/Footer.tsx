import Copyright from './copyright'
import SocialLinks from './sociallinks'
import FooterLinks from './footerlinks'
import { ButtonToTop } from '@/components'

interface FooterProps {
	children: React.ReactNode
	className?: string | undefined
	author?: string | null
	authorUrl?: string | null
	copywright?: boolean | null
	socialLinks?: any[]
	footerLinks?: any[]
}

const Footer = ({
	className = '',
	author,
	authorUrl,
	copywright = true,
	socialLinks,
	footerLinks,
	children,
}: FooterProps) => {
	return (
		<footer className={`footer ${className}`}>
			<div className='footer-custom'>{children}</div>

			<div className='footer-content'>
				{footerLinks && <FooterLinks links={footerLinks} />}

				{socialLinks && <SocialLinks socialLinks={socialLinks} />}

				{copywright && (
					<Copyright
						author={author}
						authorUrl={authorUrl}
					/>
				)}
			</div>

			<ButtonToTop className='fixed bottom-4 right-4 bg-secondary' />
		</footer>
	)
}

export default Footer
