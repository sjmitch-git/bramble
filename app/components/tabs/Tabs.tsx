import useMetadata from '@/hooks/useMetadata'

import TabsPage from '@/components/pages/tabs'

const title = 'Tabs'
const description =
	'Examples and usage of the Tabs component, a horizontal menu toggling content display.'
const keywords = 'Tabs Component'
const url = 'components/tabs'

export let metadata: any

const Tabs = () => {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<TabsPage />
			</div>
		</>
	)
}

export default Tabs
