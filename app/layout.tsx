import { Metadata } from 'next'

import Providers from '@/utils/provider'
import '@/styles/index.css'
import 'prismjs/themes/prism-tomorrow.min.css'
import { Inter } from 'next/font/google'

import config from '@/app.config'

const title = config.siteMetadata.title
const description = config.siteMetadata.description
const url = config.siteMetadata.url
const image = config.siteMetadata.image

import Header from '@/components/header'
import Footer from '@/components/footer'
import SEO from '@/components/seo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	metadataBase: new URL(`${url}`),
	alternates: {
		canonical: '/',
	},
	title: { default: `${title}`, template: `%s | ${title}` },
	openGraph: {
		title: { default: `${title}`, template: `%s | ${title}` },
		description: `${description}`,
		url: `${url}`,
		siteName: `${title}`,
		images: [
			{
				url: `${image}`,
				width: 429,
				height: 429,
				alt: `${title}`,
			},
		],
		locale: 'en-GB',
		type: 'website',
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const { title } = config.siteMetadata
	return (
		<html lang='en'>
			<head>
				<SEO />
			</head>
			<body className={inter.className}>
				<div className='wrapper'>
					<Header />
					<main>
						<article data-testid='article'>
							<Providers>{children}</Providers>
						</article>
					</main>
					<Footer />
				</div>
			</body>
		</html>
	)
}
