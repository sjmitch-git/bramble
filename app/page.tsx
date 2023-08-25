import { Metadata } from 'next'

import { Dropdown } from '@/components'

import config from '@/app.config'

const title = config.siteMetadata.title
const description = config.siteMetadata.description
const keywords = config.siteMetadata.keywords

export const metadata: Metadata = {
	title: title,
	description: description,
	keywords: keywords,
}

export default function Home() {
	const { siteLinks } = config

	return (
		<>
			<div className='mx-auto mb-12 flex flex-col justify-center gap-4'>
				<h1 className='brand text-center text-4xl md:hidden'>{title}</h1>
				<p className='lead mx-auto max-w-lg text-center'>{description}</p>
				<div className='mb-12 flex justify-center'>
					<Dropdown
						className='btn pill dark text-light'
						button='bg-secondary circle icon ms-2'
						size='lg'
						links={[siteLinks[0]]}
					/>
				</div>

				<hr />

				<p>
					This application uses the following technologies: <a href='#reactjs'>ReactJS</a>
					, <a href='#nextjs'>NextJS</a>, <a href='#tailwindcss'>TailwindCSS</a>.
				</p>

				<h2
					id='reactjs'
					className='normal-case'
				>
					ReactJS
				</h2>
				<p className='italic'>What is ReactJS?</p>
				<p>
					ReactJS is a popular JavaScript library used for building user interfaces. It
					allows developers to create reusable UI components and efficiently update the
					interface when the data changes. ReactJS is known for its component-based
					architecture and virtual DOM (Document Object Model) manipulation.
				</p>
				{/* <p>
					ReactJS, often referred to simply as React, is an open-source JavaScript library
					for building user interfaces (UIs) and managing the dynamic view layer of web
					applications. It was developed by Facebook and is widely used by developers to
					create interactive and reusable UI components.
				</p> */}
				{/* <p>React was designed with the following principles in mind:</p>
				<ol className='mx-8 mb-12 flex max-w-lg list-decimal flex-col gap-4'>
					<li>
						<strong>Component-Based Architecture:</strong> React allows developers to
						break down user interfaces into smaller, reusable components. Each component
						manages its own state and can be composed to create complex UIs.
					</li>
					<li>
						<strong>Virtual DOM:</strong> React introduces a concept called the Virtual
						DOM, which is a lightweight representation of the actual DOM (Document
						Object Model). When the data or state of a component changes, React
						calculates the minimal set of updates needed and then efficiently updates
						the actual DOM, resulting in improved performance.
					</li>
					<li>
						<strong>Declarative Syntax:</strong> React uses a declarative syntax, which
						means developers describe what the UI should look like based on the current
						state, and React automatically updates the UI to match that state. This is
						in contrast to imperative programming, where developers would specify each
						step to take in response to changes.
					</li>
					<li>
						<strong>One-Way Data Flow:</strong> React follows a unidirectional data
						flow, where data flows from parent components to child components. This
						helps maintain a predictable and easier-to-debug application structure.
					</li>
					<li>
						<strong>Reusability:</strong> React's component-based approach promotes code
						reusability. Developers can create custom components and reuse them across
						different parts of their application, which helps in maintaining a
						consistent design and behavior.
					</li>
				</ol>
				<p>
					React is not a full-fledged framework like Angular or Vue.js, but rather a
					library that focuses specifically on the view layer. This makes it highly
					adaptable and allows developers to integrate it with other libraries and tools
					to build complete web applications.
				</p>
				<p>
					React has gained significant popularity in the web development community due to
					its efficient rendering, modular structure, and strong community support. It's
					often used in combination with other technologies, such as state management
					libraries (e.g., Redux or MobX) and build tools (e.g., Webpack or Babel), to
					create powerful and feature-rich web applications.
				</p> */}

				<h2
					id='nextjs'
					className='normal-case'
				>
					NextJS
				</h2>
				<p className='italic'>What is NextJS?</p>
				<p>
					NextJS is a framework built on top of ReactJS. It provides additional features
					like server-side rendering, automatic code splitting, and simplified routing.
					NextJS is commonly used for building server-rendered React applications.
				</p>

				<h2
					id='tailwindcss'
					className='normal-case'
				>
					TailwindCSS
				</h2>
				<p className='italic'>What is TailwindCSS?</p>
				<p>
					TailwindCSS is a utility-first CSS framework that provides a set of pre-defined
					classes to style HTML elements. It aims to give developers more control over the
					design by providing a highly customizable utility class approach. It is often
					used in conjunction with ReactJS or other frontend frameworks.
				</p>
			</div>
		</>
	)
}
