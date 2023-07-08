interface VideoTimeProps {
	time: number
	duration: number
}

const VideoTime = ({ time, duration = 0 }: VideoTimeProps) => {
	const toHHMMSS = (secs: any) => {
		let sec_num = parseInt(secs, 10)
		let hours = Math.floor(sec_num / 3600)
		let minutes = Math.floor(sec_num / 60) % 60
		let seconds = sec_num % 60

		return [hours, minutes, seconds]
			.map((v) => (v < 10 ? '0' + v : v))
			.filter((v, i) => v !== '00' || i > 0)
			.join(':')
	}

	return (
		<div className='time'>
			<time>{toHHMMSS(time)}</time>/<time>{toHHMMSS(duration)}</time>
		</div>
	)
}

export default VideoTime
