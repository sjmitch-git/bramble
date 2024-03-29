import config from '@/app.config'

export default function robots() {
	const url = config.siteMetadata.url
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
			},
			{
				userAgent: '*',
				disallow: '/contact',
			},
			{
				userAgent: '*',
				disallow: '/about',
			},
			{
				userAgent: '*',
				disallow: '/terms_and_conditions',
			},
			{
				userAgent: '*',
				disallow: '/privacy_policy',
			},
			{
				userAgent: '*',
				disallow: '/posts',
			},
			{
				userAgent: '*',
				disallow: '/components',
			},
		],
		sitemap: `${url}/sitemap.xml`,
		host: url,
	}
}
