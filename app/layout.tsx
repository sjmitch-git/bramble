import { Metadata } from 'next'
import Script from 'next/script'

import Providers from '@/utils/provider'

import AppContextProvider from '@/providers/app.provider'

import '@/styles/index.css'
import 'prismjs/themes/prism-tomorrow.min.css'
import { Inter } from 'next/font/google'

import config from '@/app.config'

import { siteName } from '@/shared/metadata/'

const { title, description, url, image } = config.siteMetadata

import Header from '@/components/header'
import SEO from '@/components/seo'
import { Brand, Footer, Breadcrumbs, Navbar } from '@/components'

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
	const { footerLinks } = config
	const { authorName, authorUrl, social } = config.author
	return (
		<html lang='en'>
			<head>
				<Script
					strategy='afterInteractive'
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
				></Script>
				{/* prettier-ignore */}
				<Script
					id='ga-script'
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments)}
                        gtag('js', new Date());

                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`,
					}}
				/>
				<meta
					name='google-site-verification'
					content={`${process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION}`}
				/>
				<SEO />
			</head>
			<body className={inter.className}>
				<AppContextProvider>
					<div className='wrapper'>
						<Header>
							<Navbar>
								<Brand className='text-4xl' />
							</Navbar>
							<Breadcrumbs
								size='lg'
								className='pt-6 md:pt-12'
							/>
						</Header>
						<main>
							<article data-testid='article'>
								<Providers>{children}</Providers>
								<hr />
							</article>
						</main>
						<Footer
							author={authorName}
							authorUrl={authorUrl}
							socialLinks={social}
							footerLinks={footerLinks}
							className=''
						>
							<Brand
								height={180}
								width={180}
								layout='flex flex-col mx-auto'
								className='text-4xl'
							/>
						</Footer>
					</div>
				</AppContextProvider>
			</body>
		</html>
	)
}
