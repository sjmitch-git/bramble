import config from '@/app.config'

const { title, url, keywords } = config.siteMetadata

export const siteName = { siteName: `${title}` }
export const keyWords = keywords
export const host = url
export const OpenGraph = {
	url: `${url}`,
	...siteName,
	locale: 'en-GB',
	type: 'article',
}
