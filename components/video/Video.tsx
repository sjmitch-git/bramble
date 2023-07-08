'use client'

import React, { useEffect, useRef, useState } from 'react'

import VideoLoading from './Videoloading'

interface VideoProps {
	src: string
	styles?: string | undefined
	formats?: any[] | undefined
	loop?: boolean | undefined
	controls?: boolean | undefined
	preload?: 'auto' | 'metadata' | 'none' | undefined
	poster?: string | undefined
	fallback?: string | undefined
	play?: boolean | undefined
	onPlay?: () => void | undefined
	pause?: boolean | undefined
	onPause?: () => void | undefined
	onEnd?: () => void | undefined
	onDuration?: (number: number) => void | undefined
	currentTime?: number | undefined
	onTime?: (number: number) => void | undefined
	fullscreen?: boolean
	mute?: boolean
	volume?: number
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
	play,
	onPlay,
	pause,
	onPause,
	onDuration,
	onTime,
	currentTime,
	mute,
	volume,
	onEnd,
}: VideoProps) => {
	const video = useRef<HTMLVideoElement>(null!)

	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (volume) video.current.volume = volume / 10
	}, [volume])

	useEffect(() => {
		if (currentTime && currentTime !== 0) {
			video.current.currentTime = currentTime
		}
	}, [currentTime])

	useEffect(() => {
		if (mute) video.current.muted = mute
	}, [mute])

	useEffect(() => {
		const handleEnded = () => {
			if (el && onEnd) {
				el.currentTime = 0
				onEnd()
			}
		}

		const handleTimeupdate = () => {
			if (el && onTime) onTime(el.currentTime)
		}

		let el = video.current

		if (el) {
			el.addEventListener('ended', handleEnded, true)

			el.addEventListener('timeupdate', handleTimeupdate)

			if (onDuration) onDuration(el.duration)
			setLoading(false)

			if (play) el.play()

			if (pause) el.pause()
		}

		return () => {
			document.removeEventListener('ended', handleEnded)
			document.removeEventListener('timeupdate', handleTimeupdate)
		}
	})

	const clickVideo = () => {
		if (video.current.paused) {
			if (onPlay) onPlay()
			else play = true
		} else {
			if (onPause) onPause()
			else pause = true
		}
	}

	return (
		<>
			<video
				preload={preload}
				poster={poster}
				controls={controls}
				className={`video ${styles}`}
				loop={loop}
				ref={video}
				id='video'
				onClick={clickVideo}
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
			{loading && <VideoLoading styles='text-light' />}
		</>
	)
}

export default Video
