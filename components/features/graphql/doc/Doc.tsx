import ReactMarkdown from 'react-markdown'

import { DocAside } from './DocAside'
import { DocNavBar } from '@/features'

import { DocResponse } from '@/graphql'

type DocProps = DocResponse['docCollection']['items'][0]

export const Doc = ({ title, description, body, slug, index, keywords }: DocProps) => {
	return (
		<div className='mb-12 grid grid-cols-1 items-stretch gap-8 md:grid-cols-6'>
			<div className='prose col-span-1 dark:prose-invert md:prose-lg lg:prose-xl md:col-span-4'>
				<div
					className='mb-20'
					id='post'
				>
					<h1 className='normal-case'>{title}</h1>
					<p>{description}</p>
					<ReactMarkdown>{body}</ReactMarkdown>
				</div>
				<DocNavBar index={index} />
			</div>
			<DocAside
				body={body}
				keywords={keywords}
			/>
		</div>
	)
}
