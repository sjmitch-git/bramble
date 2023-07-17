import config from '@/app.config'

export default async function sitemap() {
	const url = config.siteMetadata.url
	const siteLinks = config.siteLinks
	const pages: any[] = []

	siteLinks.forEach((link) => {
		pages.push({ url: `${url}${link.href}` })
		if (link.links) {
			link.links.forEach((link) => {
				pages.push({ url: `${url}${link.href}` })
				if (link.links) {
					link.links.forEach((link) => {
						pages.push({ url: `${url}${link.href}` })
					})
				}
			})
		}
	})

	const routes = [''].map((route) => ({
		url: `${url}${route}`,
	}))

	return [...routes, ...pages]
}
