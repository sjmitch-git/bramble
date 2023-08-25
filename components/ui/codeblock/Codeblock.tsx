'use client'

import React, { useEffect } from 'react'
import Prism from 'prismjs'

require('prismjs/components/prism-jsx')

interface CodeblockProps {
	children: string
	language: string
}

export const Codeblock = ({ language, children }: CodeblockProps) => {
	useEffect(() => {
		Prism.highlightAll()
	}, [children])

	return (
		<pre
			className={`language-${language}`}
			tabIndex={-1}
		>
			<code className={`language-${language}`}>{children}</code>
		</pre>
	)
}
