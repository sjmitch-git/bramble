// set default app config
const name = 'Bramble'
const title = 'Bramble UI Component Library'
const description = 'A Next.js 13 boilerplate and library of reusable UI components for React'

const config = {
	siteMetadata: {
		name: name,
		title: title,
		titleTemplate: `%s · ${title}`,
		description: description,
		url: 'https://bramble-ui.vercel.app',
		githubRepo: process.env.NEXT_PUBLIC_AUTHOR_GITHUB_REPO || 'github repo for this site',
		author: process.env.NEXT_PUBLIC_AUTHOR_NAME || 'YOUR NAME',
		authorUrl: process.env.NEXT_PUBLIC_AUTHOR_URL || 'https://mitch.gatsbyjs.io/',
		authorTwitter: process.env.NEXT_PUBLIC_AUTHOR_TWITTER || 'yourTwitterHandle',
		image: '/logo.png',
		siteLanguage: `en`,
		keywords: ['Components', 'Next.js', 'ReactJS', 'TailwindCSS'],
	},
	author: {
		authorName: process.env.NEXT_PUBLIC_AUTHOR_NAME || null,
		authorUrl: process.env.NEXT_PUBLIC_AUTHOR_URL || null,
		authorEmail: process.env.NEXT_PUBLIC_AUTHOR_EMAIL || null,
		social: [
			{
				id: 'twitter',
				value: process.env.NEXT_PUBLIC_AUTHOR_TWITTER || null,
			},
			{
				id: 'github',
				value: process.env.NEXT_PUBLIC_AUTHOR_GITHUB || null,
			},
			{
				id: 'linkedin',
				value: process.env.NEXT_PUBLIC_AUTHOR_LINKEDIN || null,
			},
			{
				id: 'facebook',
				value: process.env.NEXT_PUBLIC_AUTHOR_FACEBOOK || null,
			},
			{
				id: 'dev',
				value: process.env.NEXT_PUBLIC_AUTHOR_DEV || null,
			},
			{
				id: 'instagram',
				value: process.env.NEXT_PUBLIC_AUTHOR_INSTAGRAM || null,
			},
			{
				id: 'youtube',
				value: process.env.NEXT_PUBLIC_AUTHOR_YOUTUBE || null,
			},
		],
	},
	labels: {
		homeLabel: 'Home',
		videoFallback: `Your browser does not support the video tag.`,
	},
	footerLinks: [
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
	],
	siteLinks: [
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
					href: '/components/dropdown',
					label: 'Dropdown',
				},
				{
					href: '/components/figure',
					label: 'Figure',
				},
				{
					href: '/components/footer',
					label: 'Footer',
				},
				{
					href: '/components/gallery',
					label: 'Gallery',
				},
				{
					href: '/components/loading',
					label: 'Loading',
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
					href: '/components/range',
					label: 'Range',
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
					href: '/components/table',
					label: 'Table',
				},
				{
					href: '/components/twitter_embed',
					label: 'Twitter Embed',
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
