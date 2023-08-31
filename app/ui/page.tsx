import useMetadata from '@/hooks/useMetadata'
import useSchemaMarkup from '@/hooks/useSchemaMarkup'

import UiPage from '@/components/pages/ui'

const title = 'UI Components'
const description =
	"Explore Bramble UI's interactive components and elevate your web design. Create engaging user interfaces with modern tools and resources."
const keywords =
	'Bramble UI components, Interactive web tools, Modern user interfaces, Web design resources, User experience enhancement, Web development toolkit, UI building blocks, Engaging UI elements, Interactive design elements, Bramble UI showcase, ReactJS, NextJs, Next 13, TailwindCSS'

const url = 'ui'

export let metadata: any

export default function Components() {
	metadata = useMetadata({ title, description, keywords, url })

	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<UiPage />
		</>
	)
}
