'use client'

import React, { useCallback } from 'react'

interface TwitterEmbedProps {
	handle: string
	limit?: number
	height?: number
	width?: number
	className?: string
	chrome?: string
	theme?: string
	status?: string
	lang?: string
}

export const TwitterEmbed = ({
	handle,
	limit = 1,
	className = 'w-full max-w-lg',
	chrome = '',
	lang = 'en',
	status,
	theme,
	...props
}: TwitterEmbedProps) => {
	let embedRef = useCallback((embedRefNode: any) => {
		const script = document.createElement('script')
		script.setAttribute('src', 'https://platform.twitter.com/widgets.js')
		script.setAttribute('defer', 'true')
		embedRefNode ? embedRefNode.appendChild(script) : null
	}, [])

	return (
		<>
			<div
				className={`twitter-wrap text-center ${className}`}
				ref={embedRef}
			>
				{status ? (
					<>
						<blockquote
							className='twitter-tweet text-center'
							data-theme={theme}
							data-lang={lang}
						>
							<a href={`https://twitter.com/${handle}/status/${status}`}>@{handle}</a>
						</blockquote>
					</>
				) : (
					<a
						className='twitter-timeline text-center'
						href={`https://twitter.com/${handle}`}
						data-tweet-limit={limit}
						data-chrome={chrome}
						data-theme={theme}
						data-lang={lang}
						data-height={props.height}
					>
						Tweets from @{handle}
					</a>
				)}
			</div>
		</>
	)
}

export default TwitterEmbed
