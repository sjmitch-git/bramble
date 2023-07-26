import { FacebookIcon, GithubIcon, LinkedinIcon, TwitterIcon } from '@/components'

interface SocialLinksProps {
	socialLinks: any[]
}

const SocialLinks = ({ socialLinks }: SocialLinksProps) => {
	const getIcon = (key: string) => {
		switch (key) {
			case 'facebook':
				return <FacebookIcon />
			case 'github':
				return <GithubIcon />
			case 'linkedin':
				return <LinkedinIcon />
			case 'twitter':
				return <TwitterIcon />
		}
	}

	return (
		<div className='socilallinks'>
			{socialLinks.map((item, index) => (
				<>
					{item.value && (
						<p key={item.id}>
							<a
								href={item.value}
								className='nobase'
								rel='noopener'
								target='_blank'
								title={item.id}
							>
								<span className='sr-only'>{item.id}</span>
								{getIcon(item.id)}
							</a>
						</p>
					)}
				</>
			))}
		</div>
	)
}

export default SocialLinks
