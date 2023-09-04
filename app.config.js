// set default app config
const name = 'Bramble'
const title = 'Bramble UI Component Library'
const description =
	'Elevate your web projects with Bramble UI. Explore a collection of interactive components and tools to create modern and engaging user interfaces.'

const config = {
	siteMetadata: {
		name: name,
		title: title,
		titleTemplate: `%s · ${title}`,
		description: description,
		url: process.env.NEXT_PUBLIC_SITE_URL,
		githubRepo: process.env.NEXT_PUBLIC_AUTHOR_GITHUB_REPO || null,
		author: process.env.NEXT_PUBLIC_AUTHOR_NAME || null,
		authorUrl: process.env.NEXT_PUBLIC_AUTHOR_URL || 'https://mitch.gatsbyjs.io/',
		authorTwitter: process.env.NEXT_PUBLIC_AUTHOR_TWITTER || 'yourTwitterHandle',
		image: '/logo.png',
		siteLanguage: `en`,
		keywords:
			'Bramble UI components, Interactive web tools, Modern user interfaces, Web design resources, User experience enhancement, Web development toolkit, UI building blocks, Engaging UI elements, Interactive design elements, Bramble UI showcase, ReactJS, NextJs, Next 13, TailwindCSS',
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
			href: '/ui',
			label: 'Ui',

			links: [
				{
					href: '/ui/accordion',
					label: 'Accordion',
				},
				{
					href: '/ui/autocomplete',
					label: 'Autocomplete',
				},
				{
					href: '/ui/alert',
					label: 'Alert',
				},
				{
					href: '/ui/badge',
					label: 'Badge',
				},
				{
					href: '/ui/breadcrumbs',
					label: 'Breadcrumbs',
				},
				{
					href: '/ui/buttons',
					label: 'Buttons',

					links: [
						{
							href: '/ui/buttons/button_group',
							label: 'Button Group',
						},
						{
							href: '/ui/buttons/close_button',
							label: 'Close Button',
						},
					],
				},
				{
					href: '/ui/card',
					label: 'Card',
				},
				{
					href: '/ui/carousel',
					label: 'Carousel',
				},
				{
					href: '/ui/codeblock',
					label: 'Codeblock',
				},
				{
					href: '/ui/dialog',
					label: 'Dialog',
				},
				{
					href: '/ui/drawer',
					label: 'Drawer',
				},
				{
					href: '/ui/dropdown',
					label: 'Dropdown',
				},
				{
					href: '/ui/figure',
					label: 'Figure',
				},
				{
					href: '/ui/form',
					label: 'Form',
				},
				{
					href: '/ui/footer',
					label: 'Footer',
				},
				{
					href: '/ui/gallery',
					label: 'Gallery',
				},
				{
					href: '/ui/input',
					label: 'Input',
				},
				{
					href: '/ui/loading',
					label: 'Loading',
				},
				{
					href: '/ui/modal',
					label: 'Modal',
				},
				{
					href: '/ui/navbar',
					label: 'Navbar',
				},
				{
					href: '/ui/pagination',
					label: 'Pagination',
				},
				{
					href: '/ui/radiogroup',
					label: 'Radio Group',
				},
				{
					href: '/ui/range',
					label: 'Range',
				},
				{
					href: '/ui/ratings',
					label: 'Ratings',
				},
				{
					href: '/ui/select',
					label: 'Select',
				},
				{
					href: '/ui/sidebar',
					label: 'Sidebar',
				},
				{
					href: '/ui/switch',
					label: 'Switch',
				},
				{
					href: '/ui/table',
					label: 'Table',
				},
				{
					href: '/ui/tabs',
					label: 'Tabs',
				},
				{
					href: '/ui/toast',
					label: 'Toast',
				},
				{
					href: '/ui/twitter_embed',
					label: 'Twitter Embed',
				},
				{
					href: '/ui/video',
					label: 'Video',

					links: [
						{
							href: '/ui/video/video_player',
							label: 'Video Player',
						},
					],
				},
			],
		},
		/* {
			href: '/docs',
			label: 'Docs',
		} */
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
