'use client'

import React, { useState } from 'react'

import Ratings from '@/components/ratings'
import Badge from '@/components/badge'
import Button from '@/components/button'
import Codeblock from '@/components/codeblock'
import { StarIcon } from '@heroicons/react/24/solid'

const RatingsTemplate = () => {
	const [error, setError] = useState('Page could not be found!')

	return (
		<>
			<h2>Usage</h2>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import Ratings from '@/components/ratings'
                    
<h2>
    Savoy Grill
    <Ratings
        className='text-lg'
        badge='text-warning'
        rating={4}
    />
</h2>`}
				</Codeblock>
			</div>

			<div className='mx-auto mb-12 border p-4'>
				<h2>
					Savoy Grill{' '}
					<Ratings
						className='text-lg'
						badge='text-warning'
						rating={4}
					/>
				</h2>
			</div>

			<hr />

			<h2>Icon Options</h2>

			<div className='mb-8 border p-4'>
				<h3>
					Default
					<Ratings
						className='text-lg'
						badge='text-warning'
						rating={4}
						range={5}
					/>
				</h3>
				<h3>
					Smiley
					<Ratings
						className='text-xl'
						icon='smiley'
						badge='text-info'
						rating={2}
					/>
				</h3>
				<h3>
					Heart
					<Ratings
						className='text-2xl'
						icon='heart'
						badge='text-primary'
						rating={4}
					/>
				</h3>
				<h3>
					Thumb
					<Ratings
						className='text-4xl'
						icon='thumb'
						badge='text-danger'
						rating={2}
						range={3}
					/>
				</h3>
			</div>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<h3>
    Default
    <Ratings
        className='text-lg'
        badge='text-warning'
        rating={4}
        range={5}
    />
</h3>
<h3>
    Smiley
    <Ratings
        className='text-xl'
        icon='smiley'
        badge='text-info'
        rating={2}
    />
</h3>
<h3>
    Heart
    <Ratings
        className='text-2xl'
        icon='heart'
        badge='text-primary'
        rating={4}
    />
</h3>
<h3>
    Thumb
    <Ratings
        className='text-4xl'
        icon='thumb'
        badge='text-danger'
        rating={2}
        range={3}
    />
</h3>`}
				</Codeblock>
			</div>

			<hr />

			<h2>RTL</h2>

			<div
				className='mb-12 border px-4'
				dir='rtl'
			>
				<h3>
					ابو السيد
					<Ratings
						className='text-2xl'
						icon='heart'
						badge='text-primary'
						rating={4}
					/>
				</h3>
			</div>

			<hr />
		</>
	)
}

export default RatingsTemplate
