import useMetadata from '@/hooks/useMetadata'

import DrawerTemplate from '@/templates/Drawer'

const title = 'Drawer'
const description =
	"Utilize Bramble UI's drawer component for efficient content navigation. Create modern and user-friendly web interfaces with dynamic drawer functionality."
const keywords =
	'Bramble UI drawer component, Efficient content navigation, Modern web interfaces, User-friendly UI design, Dynamic drawer functionality, Web development resources, Interactive UI elements, Bramble UI showcase, Seamless user experiences, Web content organizationt'
const url = 'ui/drawer'

export let metadata: any

export default function Drawer() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<DrawerTemplate />
			</div>
		</>
	)
}
