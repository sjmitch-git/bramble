'use client'

import Link from 'next/link'
import Image from 'next/image'

import Video from '@/components/video'
import Figure from '@/components/figure'
import Gallery from '@/components/gallery'

import dogs from '@/data/dogs.json'

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

			<Gallery
				data={dogs}
				styles='mb-12'
			/>

			{/* 	<div className='mb-8 grid grid-cols-6 gap-4'>
				{dogs.map((dog, index) => (
					<Figure
						caption={dog.name}
						key={index}
						styles='portrait'
					>
						<Image
							fill
							src={`/img/${dog.image}`}
							alt={dog.name}
							title={dog.name}
						/>
					</Figure>
				))}
			</div> */}
		</>
	)
}
