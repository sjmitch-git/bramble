'use client'

import React, { useState } from 'react'

import Alert from '@/components/alert'
import Badge from '@/components/badge'
import Button from '@/components/button'
import Codeblock from '@/components/codeblock'
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
    My Latest Blog Post <Badge styles='bg-info'>New</Badge>
</h1>`}
				</Codeblock>
			</div>

			<div className='mx-auto mb-12'>
				<h2>
					My Latest Blog Post <Badge styles='bg-info'>New</Badge>
				</h2>
			</div>

			<hr />

			<h2>Count</h2>

			<div className='mb-8'>
				<Button styles='success'>
					Inbox <Badge styles='bg-warning text-dark count'>99+</Badge>
				</Button>
			</div>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<Button styles='success'>
    Inbox <Badge styles='count bg-warning text-dark'>99+</Badge>
</Button>`}
				</Codeblock>
			</div>

			<hr />

			<h2>Notifications</h2>

			<div className='mb-8'>
				<Button styles='info'>
					Notifications
					<Badge styles='circle bg-warning' />
				</Button>
			</div>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<Button styles='info'>
    Notifications
    <Badge styles='circle bg-warning' />
</Button>`}
				</Codeblock>
			</div>

			<hr />

			<h2>Icons</h2>

			<div className='mb-8'>
				<h2>
					Latest Article
					<Badge styles='bg-transparent text-warning circle icon'>
						<StarIcon />
					</Badge>
				</h2>
			</div>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<h1>
    Latest Article
    <Badge styles='bg-transparent text-warning circle icon'>
        <StarIcon />
    </Badge>
</h1>`}
				</Codeblock>
			</div>

			<hr />

			<h2>Pill</h2>

			<div className='mb-8'>
				<h3>
					Example heading <Badge styles='bg-danger pill'>New</Badge>
				</h3>
			</div>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<h3>
    Example heading <Badge styles='bg-danger pill'>New</Badge>
</h3>`}
				</Codeblock>
			</div>

			<hr />

			<h2>Colours</h2>

			<div className='mb-8'>
				<h3>
					<code>bg-</code> <Badge styles='bg-info'>Info</Badge>{' '}
					<Badge styles='bg-success'>Success</Badge>{' '}
					<Badge styles='bg-warning text-dark'>Warning</Badge>{' '}
					<Badge styles='bg-danger'>Danger</Badge> <Badge styles='bg-dark'>Dark</Badge>{' '}
					<Badge styles='bg-light text-dark'>Light</Badge>
				</h3>
			</div>

			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`<Badge styles='bg-info'>Info</Badge>
<Badge styles='bg-success'>Success</Badge>
<Badge styles='bg-warning text-dark'>Warning</Badge>{' '}
<Badge styles='bg-danger'>Danger</Badge>
<Badge styles='bg-dark'>Dark</Badge>
<Badge styles='bg-light text-dark'>Light</Badge>`}
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
					<Badge styles='bg-transparent text-warning circle icon'>
						<StarIcon />
					</Badge>
				</h2>
			</div>

			<hr />
		</>
	)
}

export default BadgeTemplate
