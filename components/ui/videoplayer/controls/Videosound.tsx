'use client'

import React, { useState } from 'react'

import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid'

import { Button, Buttongroup } from '@/ui'

interface VideoSoundProps {
	mute: boolean
	onMute: () => void
	onVolume: (number: number) => void | undefined
}
const VideoSound = ({ mute = false, onMute, onVolume }: VideoSoundProps) => {
	const [volumeLevel, setVolumeLevel] = useState(5)
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		let value = Number(event.target.value)
		setVolumeLevel(value)
		if (onVolume) onVolume(value)
		if (value === 0 && !mute && onMute) onMute()
	}

	const clr1 = '#fff'
	const clr2 = '#333'

	let rangeStyle = {
		backgroundImage: `linear-gradient(to right, ${clr1} 0%, ${clr1} ${
			volumeLevel * 10
		}%, ${clr2} ${volumeLevel * 10}%, ${clr2} 100%)`,
	}

	return (
		<div className='flex items-center gap-2'>
			<Buttongroup>
				{!mute && (
					<Button
						className='sm dark'
						title='Mute'
						onClick={onMute}
					>
						<SpeakerWaveIcon />
						<span className='sr-only'>Mute Sound</span>
					</Button>
				)}
				{mute && (
					<Button
						className='sm dark'
						title='Un-mute'
						onClick={onMute}
					>
						<SpeakerXMarkIcon />
						<span className='sr-only'>Un-mute Sound</span>
					</Button>
				)}
			</Buttongroup>
			<input
				type='range'
				min='0'
				max='10'
				step='1'
				value={volumeLevel}
				onChange={handleChange}
				className='volume-slider'
				style={rangeStyle}
			/>
		</div>
	)
}

export default VideoSound
