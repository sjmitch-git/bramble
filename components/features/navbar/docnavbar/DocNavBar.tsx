import { DocNavBarProps } from './types'

import NextLink from './NextLink'
import PrevLink from './PrevLink'

export const DocNavBar = ({ index }: DocNavBarProps) => {
	return (
		<nav className='flex items-center justify-between border-t border-neutral px-1 py-8 text-secondary'>
			{/* @ts-expect-error Server Component */}
			<PrevLink index={index} />
			{/* @ts-expect-error Server Component */}
			<NextLink index={index} />
		</nav>
	)
}
