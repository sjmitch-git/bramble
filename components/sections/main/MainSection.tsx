import Providers from '@/utils/provider'

export const MainSection = ({ children }: { children: React.ReactNode }) => {
	return (
		<main>
			<article data-testid='article'>
				<Providers>{children}</Providers>
				<hr />
			</article>
		</main>
	)
}
