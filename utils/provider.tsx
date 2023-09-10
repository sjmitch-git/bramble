'use client'

import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { ApolloWrapper } from '@/lib/apollo/apollo-wrapper'

function Providers({ children }: React.PropsWithChildren) {
	const [client] = React.useState(
		new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
	)

	return (
		<ApolloWrapper>
			<QueryClientProvider client={client}>
				{children}
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</ApolloWrapper>
	)
}

export default Providers
