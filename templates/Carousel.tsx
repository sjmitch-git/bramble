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
{
    "name": "akita",
    "src": "/img/dogs/akita.jpg",
    ...
} */

<Carousel
    data={Data}
    caption={true}
/>`}
				</Codeblock>
			</div>

			<h2>Output</h2>

			<div>
				<Carousel
					data={Data}
					caption={true}
				/>
			</div>

			<h2>Autoplay</h2>

			<div>
				<Carousel
					data={Data}
					autoplay={true}
				/>
			</div>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<Carousel
    data={Data}
    autoplay={true}
/>`}
				</Codeblock>
			</div>

			<hr />
		</>
	)
}

export default CarouselTemplate
