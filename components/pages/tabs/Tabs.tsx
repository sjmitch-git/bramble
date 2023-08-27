'use client'

import { Codeblock, Tabs, Login, Register, ReactIcon, NextIcon, TailwindIcon } from '@/ui'

const data = [
	{ name: 'apples', emoji: '🍏', body: '<p>Some content about <strong>apples</strong></p>' },
	{ name: 'bananas', emoji: '🍌', body: '<p>Some content about <strong>bananas</strong></p>' },
	{ name: 'grapes', emoji: '🍇', body: '<p>Some content about <strong>grapes</strong></p>' },
	{ name: 'lemons', emoji: '🍋', body: '<p>Some content about <strong>lemons</strong></p>' },
]

import technologies from '@/data/tech.json'

const TabsPage = () => {
	const handleSubmit = (e: any) => {
		e.preventdefault()
	}

	return (
		<>
			<h2>Usage</h2>

			<div className='mb-4 border bg-light p-4'>
				<Tabs
					className='mx-auto w-full max-w-md pt-12'
					defaultActiveId='tab1'
				>
					<div
						id='tab1'
						title='Tab 1'
						className='active'
					>
						<div>Tab 1 content</div>
					</div>
					<div
						id='tab2'
						title='Tab 2'
					>
						<div>Tab 2 content</div>
					</div>
					<div
						id='tab3'
						title='Tab 3'
					>
						<div>Tab 3 content</div>
					</div>
					<div
						id='tab4'
						title='Tab 4'
					>
						<div>Tab 4 content</div>
					</div>
				</Tabs>
			</div>

			<Codeblock language='jsx'>
				{`import {Tabs } from '@/ui'
				
<Tabs
    className='mx-auto w-full max-w-md pt-12'
    defaultActiveId='tab1'
>
    <div
        id='tab1'
        title='Tab 1'
        className='active'
    >
        <div>Tab 1 content</div>
    </div>
    <div
        id='tab2'
        title='Tab 2'
    >
        <div>Tab 2 content</div>
    </div>
    <div
        id='tab3'
        title='Tab 3'
    >
        <div>Tab 3 content</div>
    </div>
    <div
        id='tab4'
        title='Tab 4'
    >
        <div>Tab 4 content</div>
    </div>
</Tabs>`}
			</Codeblock>

			<h2>Icons</h2>
			<div className='mb-4 border bg-light p-4'>
				<Tabs
					className='mx-auto w-full max-w-lg'
					defaultActiveId='tab0'
					icons={[<ReactIcon />, <NextIcon />, <TailwindIcon />]}
				>
					{technologies.map((item, index) => (
						<div
							id={`tab${index}`}
							key={`tab${index}`}
							title={item.name}
							className={`${index === 0 ? 'active' : ''}`}
						>
							<h3>{item.name}</h3>
							<div dangerouslySetInnerHTML={{ __html: item.body }} />
						</div>
					))}
				</Tabs>
			</div>
			<Codeblock language='jsx'>
				{`import {Tabs, ReactIcon, NextIcon, TailwindIcon } from '@/ui'
				
<Tabs
	className='mx-auto w-full max-w-lg'
	defaultActiveId='tab0'
	icons={[<ReactIcon />, <NextIcon />, <TailwindIcon />]} // add icons in correct order
>
	{data.map((item, index) => (
		<div
			id={\`tab\${index}\`}
			key={\`tab\${index}\`}
			title={item.name}
			className={\`\${index === 0 ? 'active' : ''}\`}
		>
			<h3>{item.name}</h3>
			<div dangerouslySetInnerHTML={{ __html: item.body }} />
		</div>
	))}
</Tabs>`}
			</Codeblock>

			<h2>Emojis</h2>

			<div className='mb-4 border bg-light p-4'>
				<Tabs
					className='mx-auto w-full max-w-md pt-12'
					defaultActiveId='tab0'
					tabStyles='text-3xl'
				>
					{data.map((item, index) => (
						<div
							id={`tab${index}`}
							key={`tab${index}`}
							title={item.emoji}
							className={`${index === 0 ? 'active' : ''}`}
						>
							<h3>{item.name}</h3>
							<div dangerouslySetInnerHTML={{ __html: item.body }} />
						</div>
					))}
				</Tabs>
			</div>

			<Codeblock language='jsx'>
				{`import {Tabs } from '@/ui'

const data = [
	{ name: 'apples', emoji: '🍏', body: '<p>Some content about <strong>apples</strong></p>' },
	{ name: 'bananas', emoji: '🍌', body: '<p>Some content about <strong>bananas</strong></p>' },
	{ name: 'grapes', emoji: '🍇', body: '<p>Some content about <strong>grapes</strong></p>' },
	{ name: 'lemons', emoji: '🍋', body: '<p>Some content about <strong>lemons</strong></p>' },
]
				
<Tabs
	className='mx-auto w-full max-w-md pt-12'
	defaultActiveId='tab0'
	tabStyles='text-3xl'
>
	{data.map((item, index) => (
		<div
			id={\`tab\${index}\`}
			key={\`tab\${index}\`}
			title={item.emoji}
			className={\`\${index === 0 ? 'active' : ''}\`}
		>
			<h3>{item.name}</h3>
			<div dangerouslySetInnerHTML={{__html: item.body}}/>
		</div>
	))}
</Tabs>`}
			</Codeblock>

			<h2>Examples</h2>

			<h3>User Log-in / Register</h3>

			<div className='mb-8 border bg-light p-4'>
				<Tabs
					className='mx-auto w-full max-w-sm pt-12'
					defaultActiveId='LogIn'
				>
					<div
						id='LogIn'
						title='Log In'
						className='active'
					>
						<Login
							method='dialog'
							onSubmit={handleSubmit}
						/>
					</div>
					<div
						id='SignUp'
						title='Sign Up'
					>
						<Register
							method='dialog'
							onSubmit={handleSubmit}
						/>
					</div>
				</Tabs>
			</div>

			<Codeblock language='jsx'>
				{`import {Tabs, Login, Register } from '@/ui'
				
<Tabs
    className='w-full pt-12'
    defaultActiveId='LogIn'
>
    <div
        id='LogIn'
        title='Log In'
        className='active'
    >
        <Login
            method='dialog'
            onSubmit={handleSubmit}
        />
    </div>
    <div
        id='SignUp'
        title='Sign Up'
    >
        <Register
            method='dialog'
            onSubmit={handleSubmit}
        />
    </div>
</Tabs>`}
			</Codeblock>
		</>
	)
}

export default TabsPage
