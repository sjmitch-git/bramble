'use client'

import React, { useEffect, useRef, useState } from 'react'

import config from '@/app.config'

import VideoLoading from './Videoloading'

import { VideoProps } from './types'

const posterSrc = '/poster.png'
const fallbacktMessage = config.labels.videoFallback

export const Video = ({
	src,
	formats,
	loop = false,
	controls = true,
	poster = posterSrc,
	preload = 'metadata',
	className = '',
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
			if (el) {
				el.currentTime = 0
				if (onEnd) onEnd()
			}
		}

		const handleTimeupdate = () => {
			if (el && onTime) onTime(el.currentTime)
		}

		const handleDurationupdate = () => {
			if (onDuration && el.duration) onDuration(el.duration)
		}

		let el = video.current

		if (el) {
			el.addEventListener('ended', handleEnded, true)

			el.addEventListener('timeupdate', handleTimeupdate)

			if (onDuration && el.duration) onDuration(el.duration)

			setLoading(false)

			el.addEventListener('loadedmetadata', handleDurationupdate, true)

			if (play) el.play()

			if (pause) el.pause()
		}

		return () => {
			document.removeEventListener('ended', handleEnded)
			document.removeEventListener('timeupdate', handleTimeupdate)
			document.removeEventListener('loadedmetadata', handleDurationupdate)
		}
	}, [onEnd, onTime, onDuration, play, pause])

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
				className={`video ${className}`}
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
			{loading && <VideoLoading className='text-light' />}
		</>
	)
}
