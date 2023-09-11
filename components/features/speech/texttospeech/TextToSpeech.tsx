'use client'

import { useEffect, useState, ChangeEvent } from 'react'

import { Button, Buttongroup, Select, Range, Dialog } from '@/ui'
import {
	PauseIcon,
	SpeakerWaveIcon,
	EllipsisVerticalIcon,
	StopIcon,
} from '@heroicons/react/24/solid'

let synth: SpeechSynthesis
let text: string

type TextToSpeechProps = {
	htmlId: string
}

function useHtmlToText(htmlId: string) {
	useEffect(() => {
		const node = document.getElementById(htmlId)
		if (node) {
			const textNodes: string[] = []

			const extractTextNodes = (element: HTMLElement) => {
				for (let i = 0; i < element.childNodes.length; i++) {
					const node = element.childNodes[i]

					if (node.nodeType === Node.TEXT_NODE) {
						if (node.textContent !== null) {
							let textContent = node.textContent.trim()
							if (!textContent.endsWith('.')) {
								textContent += '.'
							}
							textNodes.push(textContent)
						}
					} else if (node.nodeType === Node.ELEMENT_NODE) {
						extractTextNodes(node as HTMLElement)
					}
				}
			}

			extractTextNodes(node)
			text = textNodes.join(' ')
		}
	}, [htmlId])
}

export const TextToSpeech = ({ htmlId }: TextToSpeechProps) => {
	const [speaking, setSpeaking] = useState(false)
	const [paused, setPaused] = useState(false)
	const [selectedVoice, setSelectedVoice] = useState<string>('')
	const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
	const [selectedRate, setSelectedRate] = useState(1.0)
	const [selectedVolume, setSelectedVolume] = useState<number>(1)
	const [selectedPitch, setSelectedPitch] = useState<number>(1)

	useHtmlToText(htmlId)

	useEffect(() => {
		const fetchVoices = () => {
			synth = window.speechSynthesis
			const availableVoices = synth.getVoices()
			setVoices(availableVoices)
		}
		fetchVoices()
		window.speechSynthesis.onvoiceschanged = fetchVoices
	}, [])

	useEffect(() => {
		const defaultVoice = voices.find((voice) => voice.default)
		if (defaultVoice) {
			setSelectedVoice(defaultVoice.name)
		}
	}, [voices])

	const handleVoiceChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedVoice(event.target.value)
	}

	const handleRateChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedRate(parseFloat(event.target.value))
	}

	const handleVolumeChange = (value: number) => {
		setSelectedVolume(value)
	}

	const handlePitchChange = (value: number) => {
		setSelectedPitch(value)
	}

	const speak = () => {
		if (!text) return
		const utterance = new SpeechSynthesisUtterance(text)
		const voiceName = voices.find((voice) => voice.name === selectedVoice)
		if (voiceName !== undefined) {
			utterance.voice = voiceName
		}
		utterance.rate = selectedRate
		utterance.volume = selectedVolume
		utterance.pitch = selectedPitch
		synth.speak(utterance)
		setSpeaking(true)
		function handleEndEvent() {
			setSpeaking(false)
		}

		utterance.addEventListener('end', handleEndEvent)
	}

	const pause = () => {
		if (synth.speaking) {
			synth.pause()
		}
		setPaused(true)
	}

	const resume = () => {
		synth.resume()
		setSpeaking(true)
		setPaused(false)
	}

	const stop = () => {
		synth.cancel()
		setSpeaking(false)
		setPaused(false)
	}

	return (
		<div className='relative'>
			<h5 className='sr-only'>Listen to this page</h5>
			<div className='flex justify-between gap-4'>
				<Buttongroup>
					<Button
						className={`icon sm dark ${speaking ? 'active' : ''}`}
						title='Play'
						onClick={speak}
					>
						<SpeakerWaveIcon />
						<span className='sr-only'>Play</span>
					</Button>
					<Button
						className={`icon sm dark ${paused ? 'hidden' : 'block'}`}
						title='Pause'
						onClick={pause}
						disabled={!speaking}
					>
						<PauseIcon />
						<span className='sr-only'>Pause</span>
					</Button>
					<Button
						className={`icon sm dark ${paused ? 'block' : 'hidden'}`}
						title='Resume'
						onClick={resume}
					>
						<PauseIcon />
						<span className='sr-only'>Resume</span>
					</Button>
					<Button
						className={`icon sm dark`}
						title='Stop'
						onClick={stop}
						disabled={!speaking}
					>
						<StopIcon />
						<span className='sr-only'>Stop</span>
					</Button>
				</Buttongroup>
				<Dialog
					title='Speech Options'
					addForm={true}
					btnIcon={<EllipsisVerticalIcon />}
					btnStyles='icon sm circle bg-white text-dark shadow-none'
				>
					<div
						id='speechOptions'
						className={`flex flex-col gap-4 bg-light`}
					>
						<div className='space-around flex gap-2'>
							<div>
								<Select
									id='voiceSelect'
									className='w-full'
									onChange={handleVoiceChange}
									value={selectedVoice}
									label='Select a voice:'
								>
									<option value=''>Select a voice</option>
									{voices.map((voice, index) => (
										<option
											key={index}
											value={voice.name}
										>
											{voice.name}
										</option>
									))}
								</Select>
							</div>
							<div>
								<Select
									id='rateSelect'
									onChange={handleRateChange}
									value={selectedRate}
									label='Rate:'
								>
									<option value={0.75}>Slow</option>
									<option value={1.0}>Normal</option>
									<option value={1.25}>Fast</option>
								</Select>
							</div>
						</div>

						<div className='flex justify-around gap-4'>
							<Range
								id='volumeRange'
								min={0}
								max={1}
								step={0.1}
								initial={selectedVolume}
								label='Volume:'
								onRangeChange={handleVolumeChange}
							/>

							<Range
								id='pitchRange'
								min={0}
								max={1.5}
								step={0.1}
								initial={selectedPitch}
								label='Pitch:'
								onRangeChange={handlePitchChange}
							/>
						</div>
					</div>
					<div className='actions'>
						<Button
							className='dark rounded outline'
							type='submit'
						>
							OK
						</Button>
					</div>
				</Dialog>
			</div>
		</div>
	)
}
