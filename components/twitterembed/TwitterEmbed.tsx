'use client'

import React, { useCallback } from 'react'

interface TwitterEmbedProps {
	handle: string
	limit?: number
	className?: string
	chrome?: string
	theme?: string
	status?: string
	lang?: string
}

const TwitterEmbed = ({
	handle,
	limit = 1,
	className = '',
	chrome = '',
	lang = 'en',
	status,
	theme,
}: TwitterEmbedProps) => {
	const embedRef = useCallback((embedRefNode: any) => {
		const script = document.createElement('script')
		script.setAttribute('src', 'https://platform.twitter.com/widgets.js')
		script.setAttribute('async', 'true')
		embedRefNode ? embedRefNode.appendChild(script) : null
	}, [])

	return (
		<>
			<div
				className={`twitter-wrap ${className}`}
				ref={embedRef}
			>
				{status ? (
					<>
						<blockquote
							className='twitter-tweet'
							data-theme={theme}
							data-lang={lang}
						>
							<a href={`https://twitter.com/${handle}/status/${status}`}>@{handle}</a>
						</blockquote>
					</>
				) : (
					<a
						className='twitter-timeline'
						href={`https://twitter.com/${handle}`}
						data-tweet-limit={limit}
						data-chrome={chrome}
						data-theme={theme}
						data-lang={lang}
					>
						@{handle}
					</a>
				)}
			</div>
		</>
	)
}

export default TwitterEmbed
