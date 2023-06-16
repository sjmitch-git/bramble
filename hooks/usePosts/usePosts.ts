import { useQuery } from '@tanstack/react-query'
import { Post } from '@/types/post'

/* const fetchPosts = async (limit = 10) => {
	const parsed: Post[] = await ky('https://jsonplaceholder.typicode.com/posts').json()
	return parsed.filter((x: { id: number }) => x.id <= limit) as Post[]
} */

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
