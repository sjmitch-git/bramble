import {
	DevIcon,
	FacebookIcon,
	GithubIcon,
	InstagramIcon,
	LinkedinIcon,
	XIcon,
	YoutubeIcon,
} from '@/ui'

interface SocialLinksProps {
	socialLinks: any[]
}

const SocialLinks = ({ socialLinks }: SocialLinksProps) => {
	const getIcon = (key: string) => {
		switch (key) {
			case 'dev':
				return <DevIcon />
			case 'facebook':
				return <FacebookIcon />
			case 'github':
				return <GithubIcon />
			case 'instagram':
				return <InstagramIcon />
			case 'linkedin':
				return <LinkedinIcon />
			case 'twitter':
				return <XIcon />
			case 'youtube':
				return <YoutubeIcon />
		}
	}

	return (
		<div className='socilallinks'>
			{socialLinks.map((item, index) => (
				<>
					{item.value && (
						<p
							key={item.id}
							className={item.id}
						>
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
