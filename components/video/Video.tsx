'use client'

import React, { useEffect, useRef, useState } from 'react'

interface VideoProps {
	src: string
	styles?: string | undefined
	formats?: any[] | undefined
	loop?: boolean | undefined
	controls?: boolean | undefined
	preload?: 'auto' | 'metadata' | 'none' | undefined
	poster?: string | undefined
	fallback?: string | undefined
}

const posterSrc = '/poster.png'
const fallbacktMessage = `Your browser does not support the video tag.`

const Video = ({
	src,
	formats,
	loop = false,
	controls = true,
	poster = posterSrc,
	preload = 'metadata',
	styles = '',
	fallback = fallbacktMessage,
}: VideoProps) => {
	const [play, setPlay] = useState(false)
	const [pause, setPause] = useState(false)
	const video = useRef<HTMLVideoElement | null>(null)

	useEffect(() => {
		const handlePlay = () => {
			setPlay(true)
			console.log('play')
		}

		const handlePause = () => {
			setPause(true)
			console.log('pause')
		}

		const handleEnded = () => {
			if (el) el.currentTime = 0
		}

		let el = video.current
		if (el) {
			el.addEventListener('play', handlePlay, true)
			el.addEventListener('pause', handlePause, true)
			el.addEventListener('ended', handleEnded, true)
		}
	}, [])

	return (
		<video
			preload={preload}
			poster={poster}
			controls={controls}
			className={`video ${styles}`}
			loop={loop}
			ref={video}
		>
			{formats?.length ? (
				formats.map((format, index) => (
					<source
						src={`${src.slice(0, src.lastIndexOf('.'))}.${format}`}
						key={index}
						type={`video/${format}`}
					/>
				))
			) : (
				<source
					src={`${src}`}
					type={`video/${src.slice(src.lastIndexOf('.') + 1)}`}
				/>
			)}
			{fallback}
		</video>
	)
}

export default Video
