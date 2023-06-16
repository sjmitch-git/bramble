import { useQuery } from '@tanstack/react-query'
import { Post } from '@/types/post'

async function fetchPosts() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const posts = (await res.json()) as Post[]
	return posts
}

const usePosts = () => {
	return useQuery({
		queryKey: ['posts'],
		queryFn: () => fetchPosts(),
	})
}

export { usePosts, fetchPosts }
