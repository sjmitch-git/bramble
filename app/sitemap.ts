import config from '@/app.config'

export default async function sitemap() {
	const url = config.siteMetadata.url
	const siteLinks = config.siteLinks

	const components = siteLinks[0].links.map((page) => ({
		url: `${url}${page.href}`,
	}))

	const routes = ['', '/components'].map((route) => ({
		url: `${url}${route}`,
	}))

	return [...routes, ...components]
}
