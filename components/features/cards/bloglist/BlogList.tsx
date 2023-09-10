import { Card } from '@/ui'

interface ItemsProps {
	items: {
		title: string
		slug: string
		description: string
	}[]
}

export const BlogList = ({ items }: ItemsProps) => {
	return (
		<>
			<h2>Test</h2>
			<div className='mb-12 grid gap-4 md:grid-cols-3 lg:grid-cols-4'>
				{items
					.map((item: any) => (
						<Card
							title={item.title}
							description={item.description}
							link={`docs/${item.slug}`}
							key={item.title}
						/>
					))
					.reverse()}
			</div>
		</>
	)
}
