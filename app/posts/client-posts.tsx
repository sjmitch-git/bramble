'use client'

import { usePosts } from '@/hooks/usePosts'
import { Alert, Loading } from '@/components'

export default function ClientPosts() {
	const { data, isLoading, error } = usePosts()

	return (
		<>
			<h1>Posts</h1>

			<div>
				{isLoading ? (
					<div className='mx-auto mb-12 max-w-[6rem]'>
						<Loading
							className='text-info'
							caption='Loading'
						/>
					</div>
				) : error ? (
					<div className='mx-auto mb-12'>
						<Alert
							className='error'
							status='Error'
							message={`error`}
						/>
					</div>
				) : (
					data && (
						<div className='grid grid-cols-4 gap-4'>
							{data?.map((post, index) => (
								<div key={post.id}>
									<span>{index + 1}. </span>
									<a href='#'>{post.title}</a>
								</div>
							))}
						</div>
					)
				)}
			</div>
		</>
	)
}
