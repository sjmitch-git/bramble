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
					alignItems: 'center',
					color: 'white',
					backgroundColor: 'black',
					backgroundImage: `url(${host}/og-bg.png)`,
				}}
			>
				<h1>{title}</h1>
				<h2>{description}</h2>
			</div>
		),
		{
			width: 1920,
			height: 1080,
		}
	)
}
