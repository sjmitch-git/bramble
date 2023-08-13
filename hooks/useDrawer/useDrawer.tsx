import { useContext } from 'react'
import { DrawerContext } from '@/contexts/drawer.context'

export default function useDrawer() {
	const { setShow, setMessage, setState, setPosition } = useContext(DrawerContext)

	function showDrawer(message: React.ReactNode, state: string, position: string) {
		setMessage(message)
		setState(state)
		setPosition(position)
		document.body.style.overflow = 'hidden'
		setTimeout(() => {
			setShow(true)
		}, 100)
	}

	function reset() {
		setShow(false)
		document.body.style.overflow = ''
		setTimeout(() => {
			setMessage('')
			setState('')
			setPosition('')
		}, 100)
	}

	function closeDrawer() {
		return reset()
	}

	return { showDrawer, closeDrawer }
}
