import Link from 'next/link'

import Buttongroup from '@/components/buttongroup'
import Button from '@/components/button'
import Pagination from '@/components/pagination'

import {
	PlayIcon,
	TrashIcon,
	ArrowPathRoundedSquareIcon,
	ArrowDownOnSquareIcon,
	CheckIcon,
	StarIcon,
	EllipsisHorizontalIcon,
	HeartIcon,
	PlusIcon,
} from '@heroicons/react/24/solid'

export default function Home() {
	return (
		<>
			<nav className='mb-8'>
				<ul>
					<li>
						<Link href='/components'>Components</Link>
					</li>
				</ul>
			</nav>
			<div className='mb-8 flex justify-center'>
				<Pagination
					results={49}
					range={12}
					page={1}
				/>
			</div>
			<div className='mb-8 flex justify-center'>
				<Buttongroup size='xs'>
					<Button
						styles='dark active'
						tabindex={-1}
					>
						Left
					</Button>
					<Button styles='dark'>Middle</Button>
					<Button styles='dark'>Right</Button>
				</Buttongroup>
			</div>
			<div className='mb-8'>
				<Buttongroup>
					<Button
						styles='secondary'
						title='play'
					>
						<PlayIcon />
					</Button>
					<Button
						styles='secondary active'
						tabindex={-1}
					>
						<StarIcon />
					</Button>
					<Button styles='secondary'>
						<HeartIcon />
					</Button>
				</Buttongroup>
			</div>
			<div className='mb-8'>
				<Buttongroup>
					<Button
						styles='info !gap-2'
						title='Play'
					>
						<PlayIcon /> <span>Play</span>
					</Button>
					<Button
						styles='info !gap-2 active'
						title='Bookmark'
						tabindex={-1}
					>
						<StarIcon /> <span>Bookmark</span>
					</Button>
					<Button
						styles='info !gap-2'
						title='Like'
					>
						<HeartIcon /> <span>Like</span>
					</Button>
				</Buttongroup>
			</div>
			<div className='mb-8'>
				<Buttongroup styles='vertical'>
					<Button
						styles='info'
						title='play'
					>
						<PlayIcon />
					</Button>
					<Button
						styles='info active'
						tabindex={-1}
					>
						<StarIcon />
					</Button>
					<Button styles='info'>
						<HeartIcon />
					</Button>
				</Buttongroup>
			</div>
			<div className='mb-8'>
				<Buttongroup styles='vertical'>
					<Button
						styles='info'
						title='play'
					>
						<PlayIcon /> Play
					</Button>
					<Button styles='info active'>
						<StarIcon /> Star
					</Button>
					<Button styles='info'>
						<HeartIcon /> Heart
					</Button>
				</Buttongroup>
			</div>
			<div className='mb-8'>
				<Buttongroup styles='vertical'>
					<Button
						styles='info outline'
						title='play'
					>
						<PlayIcon /> Play
					</Button>
					<Button styles='info outline active'>
						<StarIcon /> Star
					</Button>
					<Button styles='info outline'>
						<HeartIcon /> Heart
					</Button>
				</Buttongroup>
			</div>
			<div className='mb-8'>
				<Buttongroup size='xl'>
					<Button styles='primary active'>Left</Button>
					<Button>Middle</Button>
					<Button>Right</Button>
				</Buttongroup>
			</div>
			<div className='mb-8'>
				<Buttongroup
					size='xs'
					styles=''
				>
					<Button styles='outline active'>Left</Button>
					<Button styles='outline'>Middle</Button>
					<Button styles='outline'>Right</Button>
				</Buttongroup>
			</div>
			<div className='mb-8'>
				<Buttongroup
					size=''
					styles=''
				>
					<Button styles='outline'>Left</Button>
					<Button styles='outline'>Middle</Button>
					<Button styles='outline'>Right</Button>
				</Buttongroup>
			</div>
			<div className='mb-8'>
				<Buttongroup
					size='xl'
					styles=''
				>
					<Button styles='outline active'>Active</Button>
					<Button styles='outline'>Middle</Button>
					<Button styles='outline'>Right</Button>
				</Buttongroup>
			</div>
			<div className='mb-8'>
				<Buttongroup styles='vertical'>
					<Button styles='active'>Active</Button>
					<Button>Middle</Button>
					<Button>Right</Button>
				</Buttongroup>
			</div>
			<div className='mb-8'>
				<Buttongroup styles='vertical xs'>
					<a
						href='#'
						className='btn link primary active outline'
						aria-current='page'
					>
						Active link
					</a>
					<a
						href='#'
						className='btn link primary outline'
					>
						Link
					</a>
					<a
						href='#'
						className='btn link primary outline'
					>
						Link
					</a>
				</Buttongroup>
			</div>

			<div className='mb-8'>
				<Buttongroup styles='vertical sm'>
					<a
						href='#'
						className='btn link primary active outline'
						aria-current='page'
					>
						Active link
					</a>
					<a
						href='#'
						className='btn link primary outline'
					>
						Link
					</a>
					<a
						href='#'
						className='btn link primary outline'
					>
						Link
					</a>
				</Buttongroup>
			</div>
			<div className='mb-8'>
				<Buttongroup styles='vertical'>
					<a
						href='#'
						className='btn dark outline'
					>
						Link
					</a>
					<a
						href='#'
						className='btn active dark outline'
						aria-current='page'
					>
						Active link
					</a>
					<a
						href='#'
						className='btn dark outline'
					>
						Link 3
					</a>
				</Buttongroup>
			</div>

			<div className='mb-8'>
				<Buttongroup styles='vertical lg'>
					<a
						href='#'
						className='btn link primary active outline'
						aria-current='page'
					>
						Active link
					</a>
					<a
						href='#'
						className='btn link primary outline'
					>
						Link
					</a>
					<a
						href='#'
						className='btn link primary outline'
					>
						Link
					</a>
				</Buttongroup>
			</div>
			<div className='mb-8'>
				<Buttongroup styles='vertical xl'>
					<a
						href='#'
						className='btn link primary outline'
						aria-current='page'
					>
						link
					</a>
					<a
						href='#'
						className='btn link primary active outline'
					>
						Active link
					</a>
					<a
						href='#'
						className='btn link primary outline'
					>
						Link
					</a>
				</Buttongroup>
			</div>
		</>
	)
}
