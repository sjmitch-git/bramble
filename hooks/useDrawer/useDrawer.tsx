import { useContext } from 'react'
import { DrawerContext } from '@/contexts/drawer.context'

export default function useDrawer() {
	const { setShow, setBody, setState, setPosition } = useContext(DrawerContext)

	function showDrawer(body: React.ReactNode, state: string, position: string) {
		setBody(body)
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
			setBody('')
			setState('')
			setPosition('')
		}, 100)
	}

	function closeDrawer() {
		return reset()
	}

	return { showDrawer, closeDrawer }
}
