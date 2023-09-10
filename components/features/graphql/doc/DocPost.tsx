'use client'
import ReactMarkdown from 'react-markdown'

import { DocAside } from './DocAside'
import { DocNavBar } from '@/features'

import { DocResponse } from '@/graphql'

type DocProps = DocResponse['docCollection']['items'][0]

export const DocPost = ({ title, description, body, slug, index, keywords }: DocProps) => {
	return (
		<>
			<div className='prose col-span-1 dark:prose-invert md:prose-lg lg:prose-xl md:col-span-4 xl:col-span-5'>
				<div
					className='mb-20'
					id='post'
				>
					<h1 className='normal-case'>{title}</h1>
					<p>{description}</p>
					<ReactMarkdown>{body}</ReactMarkdown>
				</div>
				{/* <DocNavBar index={index} /> */}
			</div>
			<DocAside
				body={body}
				keywords={keywords}
			/>
		</>
	)
}
