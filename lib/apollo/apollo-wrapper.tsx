'use client'

import { ApolloLink, HttpLink } from '@apollo/client'
import {
	NextSSRApolloClient,
	ApolloNextAppProvider,
	NextSSRInMemoryCache,
	SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr'

import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev'
import { setVerbosity } from 'ts-invariant'

if (process.env.NODE_ENV === 'development') {
	setVerbosity('debug')
	loadDevMessages()
	loadErrorMessages()
}

const contentfulSpaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const contentfulAccessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

function makeClient() {
	const httpLink = new HttpLink({
		uri: `https://graphql.contentful.com/content/v1/spaces/${contentfulSpaceId}`,
		headers: {
			Authorization: `Bearer ${contentfulAccessToken}`,
		},
	})

	return new NextSSRApolloClient({
		cache: new NextSSRInMemoryCache(),
		link:
			typeof window === 'undefined'
				? ApolloLink.from([
						new SSRMultipartLink({
							stripDefer: true,
						}),
						httpLink,
				  ])
				: httpLink,
	})
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
	return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
}
