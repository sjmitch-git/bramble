import config from '@/app.config'

export default function robots() {
	const url = config.siteMetadata.url
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: '/contact, /about, /terms_and_conditions, /privacy_policy',
			},
		],
		sitemap: `${url}/sitemap.xml`,
		host: url,
	}
}
