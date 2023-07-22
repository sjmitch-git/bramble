import useMetadata from '@/hooks/useMetadata'

import TableTemplate from '@/templates/Table'

const title = 'Table'
const description = 'Responsive data table with fixed-height option and built-in sorting capability'
const keywords = 'Table Component'
const url = 'components/table'

export let metadata: any

export default function Table() {
	metadata = useMetadata({ title, description, keywords, url })
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<div>
				<TableTemplate />
			</div>
		</>
	)
}
