'use client'

import React, { useState } from 'react'

import { Video } from '@/ui'
import VideoControls from './controls/'

import { VideoPlayerProps } from './types'

export const VideoPlayer = ({ src, formats, className = '', poster }: VideoPlayerProps) => {
	const [play, setPlay] = useState(false)
	const [pause, setPause] = useState(false)
	const [time, setTime] = useState(0)
	const [currentTime, setCurrentTime] = useState(0)
	const [duration, setDuration] = useState(0)
	const [fullscreen, setFullscreen] = useState(false)
	const [mute, setMute] = useState(false)
	const [volume, setVolume] = useState(5)

	const handleTime = (time: number) => {
		setTime(time)
	}

	const handleVolumeChange = (vol: number) => {
		setVolume(vol)
		setMute(false)
	}

	const handleScrubChange = (time: number) => {
		setCurrentTime(time)
		setTime(time)
	}

	const handlePlay = () => {
		setPlay(true)
		setPause(false)
	}

	const handlePause = () => {
		setPause(true)
		setPlay(false)
	}
	const handleEnd = () => {
		setPause(true)
		setPlay(false)
	}

	const handleFullscreen = () => {
		setFullscreen(!fullscreen)
		if (typeof document !== null) {
			const player = document.getElementById('player')
			if (player) {
				if (!fullscreen) player.requestFullscreen()
				else document.exitFullscreen()
			}
		}
	}

	const handleMute = () => {
		setMute(!mute)
	}

	return (
		<div
			className={`video-player ${className} ${fullscreen ? 'fullscreen' : ''}`}
			id='player'
		>
			<Video
				src={src}
				formats={formats}
				controls={false}
				onPlay={handlePlay}
				play={play}
				onPause={handlePause}
				pause={pause}
				onDuration={setDuration}
				onTime={handleTime}
				onEnd={handleEnd}
				currentTime={currentTime}
				fullscreen={fullscreen}
				mute={mute}
				volume={volume}
				poster={poster}
			/>
			<VideoControls
				onPlay={handlePlay}
				play={play}
				onPause={handlePause}
				pause={pause}
				time={time}
				onTime={handleTime}
				duration={duration}
				onScrubChange={handleScrubChange}
				onFullscreen={handleFullscreen}
				fullscreen={fullscreen}
				onMute={handleMute}
				mute={mute}
				onVolume={handleVolumeChange}
				volume={volume}
			/>
		</div>
	)
}
