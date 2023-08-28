import Head from 'next/head'
import Script from 'next/script'

import SEO from '@/components/seo'

export const HeadSection = () => {
	return (
		<Head>
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
		</Head>
	)
}
