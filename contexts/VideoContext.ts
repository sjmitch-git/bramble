import { createContext } from 'react'

type VideoContextProps = {
	play: boolean
	pause: boolean
}

const defaultState = {
	play: false,
	pause: false,
}

const VideoContext = createContext<VideoContextProps>(defaultState)

export default VideoContext
