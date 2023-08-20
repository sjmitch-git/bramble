import { useContext } from 'react'
import { ToastContext } from '@/contexts/toast.context'

export default function useToast() {
	const { setShow, setState, setMessage, setPosition, setAutohide } = useContext(ToastContext)

	function showToast(
		position: string,
		state: string,
		message: React.ReactNode,
		autohide?: boolean
	) {
		setMessage(message)
		setState(state)
		setPosition(position)
		setAutohide(autohide || false)
		setShow(true)
	}

	function closeToast() {
		setShow(false)
	}

	return { showToast, closeToast }
}
