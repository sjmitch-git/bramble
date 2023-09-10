import { TextToSpeech } from '@/features'

interface DocAsideProps {
	body: string
	keywords: string
}

export const DocAside = ({ body, keywords }: DocAsideProps) => {
	return (
		<aside className='relative order-first col-span-1 bg-light p-2 md:order-none md:col-span-2'>
			<div className='sticky top-4'>
				<TextToSpeech htmlId='post' />
			</div>
		</aside>
	)
}
