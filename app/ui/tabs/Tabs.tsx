import useMetadata from '@/hooks/useMetadata'

import TabsPage from '@/components/pages/tabs'

const title = 'Tabs'
const description =
	'Explore interactive tab examples in Bramble UI. Create seamless navigation and organized content with customizable tabs.'
const keywords =
	'Bramble UI tabs, Interactive tab navigation, Customizable tab examples, Organized content display, Web design enhancement, User-friendly navigation, Tabbed user interface, Tab components in Bramble UI, Web development showcase, Tabbed content presentation'
const url = 'ui/tabs'

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
