'use client'

import { Card, Codeblock } from '@/components'

import Dogs from '@/data/dogs.json'
import Data from '@/data/toasters.json'
import Amazon from '@/data/amazon.json'

const CardTemplate = () => {
	return (
		<>
			<h2>Basic</h2>

			<p>Card with title, description and link.</p>

			<div className='mb-12 grid gap-4 md:grid-cols-4 lg:grid-cols-6'>
				{Dogs.map((dog, index) => (
					<Card
						title={dog.name}
						description={dog.description}
						link={dog.link}
						key={index}
					/>
				))}
			</div>

			<Codeblock language='jsx'>
				{`import {Card} from '@/components'
				
<Card
    title={name}
    description={description}
    link={link}
/>`}
			</Codeblock>

			<h2>Image</h2>

			<p>Card with image and custom link label. Column layout</p>

			<div className='mb-12 grid gap-4 md:grid-cols-4 lg:grid-cols-6'>
				{Dogs.map((dog, index) => (
					<Card
						title={dog.name}
						description={dog.description}
						image={dog.src}
						link={dog.link}
						linkLabel={dog.name}
						layout='column'
						key={index}
					/>
				))}
			</div>

			<Codeblock language='jsx'>
				{`<Card
    title={name}
    description={description}
    image={src}
    link={link}
    linkLabel={name}
    layout='column'
/>`}
			</Codeblock>

			<h2>Row layout</h2>

			<div className='mb-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{Dogs.map((dog, index) => (
					<Card
						title={dog.name}
						description={dog.description}
						image={dog.src}
						link={dog.link}
						layout='row'
						key={index}
					/>
				))}
			</div>

			<Codeblock language='jsx'>
				{`<Card
    title={name}
    description={description}
    image={src}
    link={link}
    layout='row'
/>`}
			</Codeblock>

			<h2>Full layout</h2>

			<div className='mb-12 grid grid-cols-1 gap-4'>
				{Dogs.map(
					(dog, index) =>
						index === 0 && (
							<Card
								title={dog.name}
								description={dog.description}
								image={dog.src}
								link={dog.link}
								layout='full'
								key={index}
							/>
						)
				)}
			</div>

			<Codeblock language='jsx'>
				{`<Card
    title={name}
    description={description}
    image={src}
    link={link}
    layout='full'
/>`}
			</Codeblock>

			<h2>Product Example</h2>

			<p>Column layout</p>

			<div className='mb-12 grid gap-4 md:grid-cols-4 lg:grid-cols-6'>
				{Data.map((item, index) => (
					<Card
						title={item.name}
						description={item.description}
						image={item.src}
						price={item.price}
						cc={item.cc}
						rating={item.rating}
						link={item.link}
						layout='column'
						badge={item.price_previous ? 'Deal!' : ''}
						badgeStyle={item.price_previous ? 'bg-info' : ''}
						key={index}
					/>
				))}
			</div>

			<Codeblock language='jsx'>
				{`[
    {
		"name": "Cusimax 4-slice Toaster",
		"description": "Toaster 4 Slices, Cusimax Stainless Steel Toaster with 4 Extra-Wide Bread Slots and ...",
		"src": "/img/products/Toaster.jpg",
		"price": 24.99,
		"price_previous": 44.99,
		"cc": "GBP",
		"rating": 4.4,
        "range": 5,
		"link": "#"
	}, 
    ...
]
    
<Card
    title={item.name}
    description={item.description}
    image={item.src}
    price={item.price}
    cc={item.cc}
    rating={item.rating}
    link={item.link}
    layout='column'
    badge={item.price_previous ? 'Deal!' : ''}
    badgeStyle={item.price_previous ? 'bg-info' : ''}
/>`}
			</Codeblock>

			<p>Row layout</p>

			<div className='mb-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{Data.map((item, index) => (
					<Card
						title={item.name}
						description={item.description}
						image={item.src}
						price={item.price}
						cc={item.cc}
						rating={item.rating}
						range={item.range}
						link={item.link}
						layout='row'
						badge={item.price_previous ? 'Deal!' : ''}
						badgeStyle={item.price_previous ? 'bg-info' : ''}
						key={index}
					/>
				))}
			</div>

			<Codeblock language='jsx'>
				{`<Card
    title={item.name}
    description={item.description}
    image={item.src}
    price={item.price}
    cc={item.cc}
    rating={item.rating}
    range={item.range}
    link={item.link}
    layout='row'
    badge={item.price_previous ? 'Deal!' : ''}
    badgeStyle={item.price_previous ? 'bg-info' : ''}
/>`}
			</Codeblock>

			<h2>Amazon Example</h2>

			<p>Column layout</p>

			<div className='mb-12 grid gap-4 md:grid-cols-4 lg:grid-cols-6'>
				{Amazon.map((item, index) => (
					<Card
						className='amazon'
						description={item.title}
						image={item.image}
						price={item.price.value}
						cc={item.price.currency}
						rating={item.rating}
						link={item.link}
						layout='column'
						key={index}
					/>
				))}
			</div>

			<Codeblock language='jsx'>
				{`<Card
	className='amazon'
	description={item.title}
	image={item.image}
	price={item.price.value}
	cc={item.price.currency}
	rating={item.rating}
	link={item.link}
	layout='column'
/>`}
			</Codeblock>

			<p>Row layout</p>

			<div className='mb-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{Amazon.map((item, index) => (
					<Card
						className='amazon'
						description={item.title}
						image={item.image}
						price={item.price.value}
						cc={item.price.currency}
						rating={item.rating}
						link={item.link}
						layout='row'
						key={index}
					/>
				))}
			</div>

			<Codeblock language='jsx'>
				{`<Card
	className='amazon'
	description={item.title}
	image={item.image}
	price={item.price.value}
	cc={item.price.currency}
	rating={item.rating}
	link={item.link}
	layout='row'
/>`}
			</Codeblock>

			<h2>Dark theme</h2>

			<div className='mb-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{Data.map((item, index) => (
					<Card
						className='dark'
						title={item.name}
						description={item.description}
						image={item.src}
						price={item.price}
						cc={item.cc}
						rating={item.rating}
						range={item.range}
						link={item.link}
						layout='row'
						badge={item.price_previous ? 'Discount!' : ''}
						badgeStyle={item.price_previous ? 'bg-accent text-dark text-lg' : ''}
						key={index}
					/>
				))}
			</div>

			<Codeblock language='jsx'>
				{`<Card
    className='dark'
    ...
    badge={item.price_previous ? 'Discount!' : ''}
    badgeStyle={item.price_previous ? 'bg-accent text-dark text-lg' : ''}
    ...
/>`}
			</Codeblock>
		</>
	)
}

export default CardTemplate
