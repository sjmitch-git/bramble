import config from '@/app.config'

const {title, url, image, keywords} = config.siteMetadata

export const siteName = { siteName: `${title}` }
export const keyWords = keywords
export const OpenGraph = {
	url: `${url}`,
	...siteName,
	images: [
		{
			url: `${image}`,
			secureUrl: `${url}${image}`,
			width: 800,
			height: 800,
			alt: `${title}`,
		},
	],
	locale: 'en-GB',
	type: 'article',
}
