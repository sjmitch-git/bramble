import Codeblock from '@/components/codeblock'

const CodeblockTemplate = () => {
	return (
		<>
			<h2>Usage</h2>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import Codeblock from '@/components/codeblock'

return (			
	<Codeblock language=\'jsx'>
        {\`<Breadcrumbs size='sm' />\`}
    </Codeblock>
)`}
				</Codeblock>
				<h3>Output</h3>
				<Codeblock language='jsx'>{`<Breadcrumbs size='sm' />`}</Codeblock>
			</div>

			<hr />

			<h2>Prism.js</h2>
			<p>
				<a
					href='https://prismjs.com/'
					target='_blank'
				>
					Prism
				</a>{' '}
				is a lightweight, extensible syntax highlighter.
			</p>
			<h3>Install</h3>
			<div className='mb-0'>
				<Codeblock language='powershell'>{`npm i prismjs`}</Codeblock>
				<Codeblock language='powershell'>{`npm i --save @types/prismjs`}</Codeblock>
			</div>

			<h3>Theme</h3>
			<div className='mb-0'>
				<Codeblock language='jsx'>{`import '../className/index.css'
// Add below line to layout.tsx
import 'prismjs/themes/prism-tomorrow.min.css'`}</Codeblock>
			</div>

			<hr />

			<h2>Source Code</h2>
			<div className='mb-0'>
				<Codeblock language='jsx'>{`'use client'

import React, { useEffect } from 'react'
import Prism from 'prismjs'

require('prismjs/components/prism-jsx')

interface CodeblockProps {
	children: string
	language: string
}

const Codeblock = ({ language, children }: CodeblockProps) => {
	useEffect(() => {
		Prism.highlightAll()
	}, [children])

	return (
		<pre>
			<code className={\`language-\${language}\`}>
                    {children}
            </code>
		</pre>
	)
}

export default Codeblock
`}</Codeblock>
			</div>
			<hr />
		</>
	)
}

export default CodeblockTemplate
