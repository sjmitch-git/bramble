import { useContext } from 'react'
import { ToastContext } from '@/contexts/toast.context'

export default function useToast() {
	const { setShow, setState, setBody, setPosition, setAutohide } = useContext(ToastContext)

	function showToast(position: string, state: string, body: React.ReactNode, autohide: boolean) {
		setBody(body)
		setState(state)
		setPosition(position)
		setAutohide(autohide)
		setShow(true)
	}

	function closeToast() {
		setShow(false)
	}

	return { showToast, closeToast }
}
