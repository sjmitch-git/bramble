import { Codeblock, Gallery } from '@/components'

import dogs from '@/data/dogs.json'

const GalleryTemplate = () => {
	return (
		<>
			<h2>Usage</h2>
			<Codeblock language='jsx'>
				{`import {Gallery} from '@/components'

import dogs from '@/data/dogs.json'

/* 
{
	"name": "akita",
	"src": "/img/dogs/akita.jpg"
},
*/
                
<Gallery
	data={dogs}
	className='mb-12'
	caption={false} // true | false
	aspect='square' // 'aspect-[4/3]' | 'square' | 'portrait'
/>`}
			</Codeblock>
			<h2>Output</h2>
			<div className='mb-8 flex justify-center'>
				<Gallery
					data={dogs}
					className='mb-12'
				/>
			</div>
			<h3>No Caption</h3>
			<div className='mb-8 flex justify-center'>
				<Gallery
					data={dogs}
					className='mb-12'
					caption={false}
				/>
			</div>
			<h3>Portrait</h3>
			<div className='mb-8 flex justify-center'>
				<Gallery
					data={dogs}
					className='mb-12'
					caption={false}
					aspect='portrait'
				/>
			</div>
			<h3>Square</h3>
			<div className='mb-8 flex justify-center'>
				<Gallery
					data={dogs}
					className='mb-12'
					caption={true}
					aspect='square'
				/>
			</div>

			<hr />

			<h2>Props</h2>
			<Codeblock language='jsx'>
				{`data: {
	name: string
	src: string
}
className?: string | undefined
aspect?: string | undefined
caption?: boolean | undefined`}
			</Codeblock>
			<h2>CSS</h2>
			<Codeblock language='css'>
				{`.gallery {
	@apply grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6;

	figure.portrait {
		@apply aspect-[3/4];
	}
	
	figure.square {
		@apply aspect-square;
	}

	img {
		@apply cursor-zoom-in w-full h-full object-cover;

		&:hover {
			@apply opacity-75;
		}

		&:focus-visible {
			@apply opacity-75 outline-accent outline-8;
		}
	}
}`}
			</Codeblock>

			<hr />
		</>
	)
}

export default GalleryTemplate
