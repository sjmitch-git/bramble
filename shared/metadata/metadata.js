import config from '@/app.config'

const { title, url, keywords, author } = config.siteMetadata

export const siteName = { siteName: `${title}` }
export const authorName = { author: `${author}` }
export const keyWords = keywords
export const host = url
export const OpenGraph = {
	...siteName,
	locale: 'en-GB',
	type: 'article',
}
