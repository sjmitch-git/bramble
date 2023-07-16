import config from '@/app.config'

export default function robots() {
	const url = config.siteMetadata.url
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
			},
		],
		sitemap: `${url}/sitemap.xml`,
		host: url,
	}
}
