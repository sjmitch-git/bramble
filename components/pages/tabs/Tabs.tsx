'use client'

import { Codeblock, Tabs, Login, Register } from '@/ui'

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
