import Data from '@/data/dogs.json'

import Carousel from '@/components/carousel'
import Codeblock from '@/components/codeblock'

const CarouselTemplate = () => {
	return (
		<>
			<h2>Usage</h2>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import Data from '@/data/dogs.json'
import Carousel from '@/components/carousel''

/* Data example
[
	{
		"name": "akita",
		"src": "/img/dogs/akita.jpg",
		"description": "The Akita is a Japanese dog breed of large size...",
		"link": "https://en.wikipedia.org/wiki/Akita_(dog)"
	},
	...
] */

<Carousel
    data={Data}
    caption={true}
	gallery={true}
/>`}
				</Codeblock>
			</div>

			<h2>Gallery</h2>

			<div>
				<Carousel
					data={Data}
					caption={true}
					gallery={true}
				/>
			</div>

			<h2>Autoplay</h2>

			<div>
				<Carousel
					data={Data}
					autoplay={true}
					gallery={true}
				/>
			</div>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<Carousel
    data={Data}
	autoplay={true}
	gallery={true}
/>`}
				</Codeblock>
			</div>

			<h2>Cards</h2>

			<div className=''>
				<Carousel
					data={Data}
					theme='light'
				/>
			</div>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<Carousel
    data={Data}
	theme='light'
/>`}
				</Codeblock>
			</div>

			<h2>Cards - Autoplay</h2>

			<div className=''>
				<Carousel
					data={Data}
					autoplay={true}
					theme='light'
				/>
			</div>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<Carousel
    data={Data}
	autoplay={true}
	theme='light'
/>`}
				</Codeblock>
			</div>

			<h2>RTL</h2>

			<div
				className=''
				dir='rtl'
			>
				<Carousel
					data={Data}
					theme='light'
					rtl={true}
				/>
			</div>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<div dir='rtl'>
	<Carousel
		data={Data}
		theme='light'
		rtl={true}
	/>
</div>`}
				</Codeblock>
			</div>

			<hr />
		</>
	)
}

export default CarouselTemplate
