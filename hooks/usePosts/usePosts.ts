import ky from 'ky-universal'
import { useQuery } from '@tanstack/react-query'
import { Post } from '@/types/post'

const fetchPosts = async (limit = 10) => {
	const parsed: Post[] = await ky('https://jsonplaceholder.typicode.com/posts').json()
	return parsed.filter((x: { id: number }) => x.id <= limit) as Post[]
}

const usePosts = (limit: number) => {
	return useQuery({
		queryKey: ['posts', limit],
		queryFn: () => fetchPosts(limit),
	})
}

export { usePosts, fetchPosts }
