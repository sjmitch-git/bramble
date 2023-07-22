import { ImageResponse } from 'next/server'
import { NextRequest } from 'next/server'

import config from '@/app.config'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
	const host = config.siteMetadata.url
	const { searchParams } = req.nextUrl
	const title = searchParams.get('title')
	const description = searchParams.get('description')

	return new ImageResponse(
		(
			<div
				style={{
					height: '100%',
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					textAlign: 'center',
					color: 'white',
					backgroundColor: 'black',
					backgroundImage: `url(${host}/og-bg.png)`,
					padding: '100px',
					fontFamily: '"Courier Prime" monospace',
				}}
			>
				<h1
					style={{
						fontSize: '6rem',
						opacity: '.8',
					}}
				>
					{title}
				</h1>
				<h2
					style={{
						fontSize: '2rem',
						padding: '0 8rem',
						opacity: '.8',
					}}
				>
					{description}
				</h2>
			</div>
		),
		{
			width: 1200,
			height: 675,
		}
	)
}
