import { useContext } from 'react'
import { SidebarContext } from '@/contexts/sidebar.context'

export default function useSidebar() {
	const { setShow, setMessage, setState, setPosition } = useContext(SidebarContext)

	function showSidebar(message: React.ReactNode, state: string, position: string) {
		setMessage(message)
		setState(state)
		setPosition(position)
		document.body.style.overflow = 'hidden'
		setTimeout(() => {
			setShow(true)
		}, 400)
	}

	function reset() {
		setShow(false)
		document.body.style.overflow = ''
	}

	function closeSidebar() {
		return reset()
	}

	return { showSidebar, closeSidebar }
}
