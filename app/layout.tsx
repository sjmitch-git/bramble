import { Metadata } from 'next'

import AppContextProvider from '@/providers/app.provider'

import '@/styles/index.css'
import 'prismjs/themes/prism-tomorrow.min.css'
import { Inter } from 'next/font/google'

import config from '@/app.config'

import { siteName } from '@/shared/metadata/'

const { title, description, url, image } = config.siteMetadata

import { FooterSection, HeadSection, HeaderSection, MainSection } from '@/sections'

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
		...siteName,
		images: [
			{
				url: `${image}`,
				secureUrl: `${url}${image}`,
				width: 430,
				height: 430,
				alt: `${title}`,
			},
		],
		locale: 'en-GB',
		type: 'website',
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<HeadSection />
			<body className={inter.className}>
				<AppContextProvider>
					<div className='wrapper'>
						<HeaderSection />
						<MainSection>{children}</MainSection>
						<FooterSection />
					</div>
				</AppContextProvider>
			</body>
		</html>
	)
}
