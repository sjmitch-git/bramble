import { HttpLink } from '@apollo/client'
import {
	NextSSRInMemoryCache,
	NextSSRApolloClient,
} from '@apollo/experimental-nextjs-app-support/ssr'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'

export const { getClient } = registerApolloClient(() => {
	return new NextSSRApolloClient({
		cache: new NextSSRInMemoryCache(),
		link: new HttpLink({
			uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
			},
		}),
	})
})
