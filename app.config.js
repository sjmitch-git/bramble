// set default app config
const name = 'Next-13 Starter'
const title = 'A UI Design System'
const description = 'Create a short story using the latest in AI technology.'

const config = {
	siteMetadata: {
		name: name,
		title: title,
		titleTemplate: `%s · ${title}`,
		description: description,
		url: 'https://microstory.vercel.app',
		githubRepo: 'https://github.com/sjmitch-git/ministory',
		author: process.env.NEXT_PUBLIC_AUTHOR_NAME || 'Stephen',
		authorUrl: process.env.NEXT_PUBLIC_AUTHOR_URL || 'https://mitch.gatsbyjs.io/',
		authorTwitter: process.env.NEXT_PUBLIC_AUTHOR_TWITTER || 'yourTwitterHandle',
		image: '/logo.png',
		siteLanguage: `en`,
		keywords: [
			'OpenAI',
			'Story Generator',
			'AI Technology',
			'TailwindCSS',
			'jsx',
			'Next.js',
			'ReactJS',
			'Jest',
		],
	},
	labels: {
		homeLabel: 'Home',
		videoFallback: `Your browser does not support the video tag.`,
	},
	siteLinks: [
		{
			href: '/',
			label: 'Home',
		},
		{
			href: '/components',
			label: 'Components',

			links: [
				{
					href: '/components/accordian',
					label: 'Accordian',
				},
				{
					href: '/components/alert',
					label: 'Alert',
				},
				{
					href: '/components/badge',
					label: 'Badge',
				},
				{
					href: '/components/breadcrumbs',
					label: 'Breadcrumbs',
				},
				{
					href: '/components/buttons',
					label: 'Buttons',

					links: [
						{
							href: '/components/buttons/button_group',
							label: 'Button Group',
						},
						{
							href: '/components/buttons/close_button',
							label: 'Close Button',
						},
					],
				},
				{
					href: '/components/card',
					label: 'Card',
				},
				{
					href: '/components/carousel',
					label: 'Carousel',
				},
				{
					href: '/components/codeblock',
					label: 'Codeblock',
				},
				{
					href: '/components/dialog',
					label: 'Dialog',
				},
				{
					href: '/components/figure',
					label: 'Figure',
				},
				{
					href: '/components/gallery',
					label: 'Gallery',
				},
				{
					href: '/components/modal',
					label: 'Modal',
				},
				{
					href: '/components/navbar',
					label: 'Navbar',
				},
				{
					href: '/components/pagination',
					label: 'Pagination',
				},
				{
					href: '/components/ratings',
					label: 'Ratings',
				},
				{
					href: '/components/select',
					label: 'Select',
				},
				{
					href: '/components/video',
					label: 'Video',

					links: [
						{
							href: '/components/video/video_player',
							label: 'Video Player',
						},
					],
				},
			],
		},
		{
			href: '/posts',
			label: 'Posts',
		},
	],
	manifest_options: {
		name: `${title} - ${description}`,
		short_name: title,
		description: description,
		start_url: `/`,
		background_color: `#f9fafb`,
		theme_color: `#fafafa`,
		display: `standalone`,
		icon: '/brand.png',
	},
}

export default config
