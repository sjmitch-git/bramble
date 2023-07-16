import config from '@/app.config'

const title = config.siteMetadata.title
const description = config.siteMetadata.description
const url = config.siteMetadata.url
const image = config.siteMetadata.image

export const openGraphImage = { images: ['http://...'] }
export const openGraphImage1 = { images: ['http://...'] }
export const siteName = { siteName: `${title}` }
