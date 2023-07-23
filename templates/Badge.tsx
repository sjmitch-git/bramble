'use client'

import React, { useState } from 'react'

import { Badge, Button, Codeblock } from '@/components'

import { StarIcon } from '@heroicons/react/24/solid'

const BadgeTemplate = () => {
	const [error, setError] = useState('Page could not be found!')

	return (
		<>
			<h2>Usage</h2>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import Badge from '@/components/badge'
                    
<h1>
    My Latest Blog Post <Badge className='bg-info'>New</Badge>
</h1>`}
				</Codeblock>
			</div>

			<div className='mb-12 border px-4'>
				<h2>
					My Latest Blog Post <Badge className='bg-info'>New</Badge>
				</h2>
			</div>

			<hr />

			<h2>Count</h2>

			<div className='mb-12 border p-4 pt-8'>
				<Button className='success'>
					Inbox <Badge className='count bg-warning text-dark'>99+</Badge>
				</Button>
			</div>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<Button className='success'>
    Inbox <Badge className='count bg-warning text-dark'>99+</Badge>
</Button>`}
				</Codeblock>
			</div>

			<hr />

			<h2>Notifications</h2>

			<div className='mb-12 border p-4 pt-8'>
				<Button className='info'>
					Notifications
					<Badge className='circle bg-warning' />
				</Button>
			</div>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<Button className='info'>
    Notifications
    <Badge className='circle bg-warning' />
</Button>`}
				</Codeblock>
			</div>

			<hr />

			<h2>Icons</h2>

			<div className='mb-12 border px-4'>
				<h2>
					Latest Article
					<Badge className='circle icon bg-transparent text-warning'>
						<StarIcon />
					</Badge>
				</h2>
			</div>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<h1>
    Latest Article
    <Badge className='bg-transparent text-warning circle icon'>
        <StarIcon />
    </Badge>
</h1>`}
				</Codeblock>
			</div>

			<hr />

			<h2>Pill</h2>

			<div className='mb-12 border p-4'>
				<h3>
					Example heading <Badge className='pill bg-danger'>New</Badge>
				</h3>
			</div>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<h3>
    Example heading <Badge className='bg-danger pill'>New</Badge>
</h3>`}
				</Codeblock>
			</div>

			<hr />

			<h2>Colours</h2>

			<div className='mb-8'>
				<h3>
					<code>bg-</code> <Badge className='bg-info'>Info</Badge>{' '}
					<Badge className='bg-success'>Success</Badge>{' '}
					<Badge className='bg-warning text-dark'>Warning</Badge>{' '}
					<Badge className='bg-danger'>Danger</Badge>{' '}
					<Badge className='bg-dark'>Dark</Badge>{' '}
					<Badge className='bg-light text-dark'>Light</Badge>
				</h3>
			</div>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<Badge className='bg-info'>Info</Badge>
<Badge className='bg-success'>Success</Badge>
<Badge className='bg-warning text-dark'>Warning</Badge>
<Badge className='bg-danger'>Danger</Badge>
<Badge className='bg-dark'>Dark</Badge>
<Badge className='bg-light text-dark'>Light</Badge>`}
				</Codeblock>
			</div>

			<hr />

			<h2>RTL</h2>

			<div
				className='mb-12 border px-4'
				dir='rtl'
			>
				<h2>
					Latest Article
					<Badge className='circle icon bg-transparent text-warning'>
						<StarIcon />
					</Badge>
				</h2>
			</div>

			<hr />
		</>
	)
}

export default BadgeTemplate
