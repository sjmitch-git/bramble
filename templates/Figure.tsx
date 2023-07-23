import Image from 'next/image'

import { Figure, Codeblock, Video } from '@/components'

const FigureTemplate = () => {
	return (
		<>
			<h2>Usage</h2>
			<h3>
				Using <code>img</code>
			</h3>
			<Codeblock language='jsx'>
				{`import Figure from '@/components/figure'
     
<Figure
	caption='Beagle' 	// optional
	className='max-w-sm' 	// set width
>
	<img
		src='/img/dogs/beagle.jpg'
		title='Beagle'
		alt='Beagle'
	/>
</Figure>
`}
			</Codeblock>
			<h4>Output</h4>
			<div className='mb-8 flex flex-wrap justify-center gap-8 bg-gray-300 p-4'>
				<Figure
					caption='Beagle'
					className='m-auto max-w-sm'
				>
					<img
						src='/img/dogs/beagle.jpg'
						title='Beagle'
						alt='Beagle'
					/>
				</Figure>
				<Figure
					caption='Irish Wolfhound'
					className='m-auto max-w-sm'
				>
					<img
						src='/img/dogs/wolfhound.jpg'
						title='Irish Wolfhound'
						alt='Irish Wolfhound'
					/>
				</Figure>
			</div>
			<h3>
				Using Nextjs <code>Image</code> <small>(known dimensions)</small>
			</h3>
			<Codeblock language='jsx'>
				{`import Image from 'next/image'
				
import Figure from '@/components/figure'
     
<Figure
	caption='Beagle'
	className='max-w-sm'
>
	<Image
		width='500'		// set width
		height='320'	// set height
		src='/img/dogs/beagle.jpg'
		title='Beagle'
		alt='Beagle'
	/>
</Figure>
`}
			</Codeblock>
			<h4>Output</h4>
			<div className='mb-8 flex flex-wrap justify-center gap-8 bg-gray-300 p-4'>
				<Figure
					caption='Beagle'
					className='m-auto max-w-sm'
				>
					<Image
						width='500'
						height='320'
						src='/img/dogs/beagle.jpg'
						title='Beagle'
						alt='Beagle'
					/>
				</Figure>
				<Figure
					caption='Irish Wolfhound'
					className='m-auto max-w-sm'
				>
					<Image
						width='333'
						height='500'
						src='/img/dogs/wolfhound.jpg'
						title='Irish Wolfhound'
						alt='Irish Wolfhound'
					/>
				</Figure>
			</div>
			<h3>
				Remote image <small>(size unknown)</small>
			</h3>
			<Codeblock language='jsx'>
				{`<Image
	fill // required
	src='https://images.dog.ceo/breeds/beagle/n02088364_6866.jpg'
	...
/>

<Image
	fill
	src='https://images.dog.ceo/breeds/wolfhound-irish/n02090721_847.jpg'
	...
/>
`}
			</Codeblock>
			<h4>
				Output <small>- default aspect-[4/3]</small>
			</h4>
			<div className='mb-8 flex flex-wrap justify-center gap-8 bg-gray-300 p-4'>
				<Figure
					caption='Beagle'
					className='m-auto max-w-sm'
				>
					<Image
						fill
						src='https://images.dog.ceo/breeds/beagle/n02088364_6866.jpg'
						title='Beagle'
						alt='Beagle'
					/>
				</Figure>
				<Figure
					caption='Irish Wolfhound'
					className='m-auto max-w-sm'
				>
					<Image
						fill
						src='https://images.dog.ceo/breeds/wolfhound-irish/n02090721_847.jpg'
						title='Irish Wolfhound'
						alt='Irish Wolfhound'
					/>
				</Figure>
			</div>

			<h4>
				Output <small>- portrait aspect-[3/4]</small>
			</h4>
			<div className='mb-0 flex flex-wrap justify-center gap-8 bg-gray-300 p-4'>
				<Figure
					caption='Beagle'
					className='portrait m-auto max-w-sm'
				>
					<Image
						fill
						src='https://images.dog.ceo/breeds/beagle/n02088364_6866.jpg'
						title='Beagle'
						alt='Beagle'
					/>
				</Figure>
				<Figure
					caption='Irish Wolfhound'
					className='portrait m-auto max-w-sm'
				>
					<Image
						fill
						src='https://images.dog.ceo/breeds/wolfhound-irish/n02090721_847.jpg'
						title='Irish Wolfhound'
						alt='Irish Wolfhound'
					/>
				</Figure>
			</div>
			<Codeblock language='jsx'>{`<Figure className='... portrait'`}</Codeblock>

			<h4>
				Square <small>- aspect-[1/1]</small>
			</h4>
			<div className='mb-0 flex flex-wrap justify-center gap-8 bg-gray-300 p-4'>
				<Figure
					caption='Beagle'
					className='square m-auto max-w-sm'
				>
					<Image
						fill
						src='https://images.dog.ceo/breeds/beagle/n02088364_6866.jpg'
						title='Beagle'
						alt='Beagle'
					/>
				</Figure>
				<Figure
					caption='Irish Wolfhound'
					className='square m-auto max-w-sm'
				>
					<Image
						fill
						src='https://images.dog.ceo/breeds/wolfhound-irish/n02090721_847.jpg'
						title='Irish Wolfhound'
						alt='Irish Wolfhound'
					/>
				</Figure>
			</div>
			<Codeblock language='jsx'>{`<Figure className='... square'`}</Codeblock>

			<h2>Video</h2>
			<Codeblock language='jsx'>{`<Figure
	caption='Big Buck Bunny'
	className='max-w-lg'
>
	<Video
		src='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
		formats={['mp4', 'webm']}
	/>
</Figure>`}</Codeblock>
			<h4>Output</h4>
			<div className='mb-8 flex flex-wrap justify-center gap-8 bg-black p-4 text-light'>
				<Figure
					caption='Big Buck Bunny'
					className='max-w-lg'
				>
					<Video
						src='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
						formats={['mp4', 'webm']}
					/>
				</Figure>
			</div>

			<hr />

			<h2>Props</h2>
			<Codeblock language='jsx'>
				{`className?: string | undefined
children: React.ReactNode
caption?: string | undefined`}
			</Codeblock>
			<h2>CSS</h2>
			<Codeblock language='css'>
				{` .figure {
	@apply w-full h-auto;

	&:has(.video) {
		@apply aspect-video;
	}

	&:has([data-nimg='fill']) {
		@apply relative aspect-[4/3];

		& img {
			@apply w-full h-full object-cover;
		}

		&.portrait {
			@apply aspect-[3/4];
		}

		&.square {
			@apply aspect-square;
		}

		&:has(.figcaption) {
			@apply mb-8
		}

		.figcaption {
			@apply absolute -bottom-10 w-full;
		}
	}

	.figcaption {
		@apply p-2 text-center;
	}
}
`}
			</Codeblock>
		</>
	)
}

export default FigureTemplate
