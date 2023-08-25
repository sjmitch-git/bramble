import useMetadata from '@/hooks/useMetadata'

import FigureTemplate from '@/templates/Figure'

const title = 'Figure'
const description =
	"Present visual content elegantly with Bramble UI's figure component. Elevate your web design with modern figure layouts and immersive visuals."
const keywords =
	'Bramble UI figure component, Visual content presentation, Modern figure layouts, Web design enhancement, Immersive visuals, User-friendly interfaces, Web development resources, Interactive UI elements, Bramble UI showcase, Engaging user experiencest'
const url = 'ui/figure'

export let metadata: any

export default function Figure() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<FigureTemplate />
			</div>
		</>
	)
}
