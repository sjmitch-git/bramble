import useMetadata from '@/hooks/useMetadata'

import ToastTemplate from '@/templates/Toast'

const title = 'Toast'
const description = 'Examples and usage of the "Toast" component, which creates push notifications'
const keywords = 'Toast Component, Context Api'
const url = 'components/toast'

export let metadata: any

export default function Toast() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<ToastTemplate />
			</div>
		</>
	)
}
