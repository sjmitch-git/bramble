import { useEffect } from 'react'

const useDisableBackButton = () => {
	useEffect(() => {
		window.history.pushState(null, document.title, window.location.href)

		function onBackButtonEvent(e: Event) {
			e.preventDefault()
		}

		window.addEventListener('popstate', onBackButtonEvent)

		return () => {
			window.removeEventListener('popstate', onBackButtonEvent)
		}
	}, [])
}

export default useDisableBackButton
