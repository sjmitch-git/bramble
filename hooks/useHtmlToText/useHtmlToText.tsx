const htmlToText = (html: HTMLElement): string => {
	const textNodes: string[] = []

	function extractTextNodes(element: HTMLElement) {
		for (let i = 0; i < element.childNodes.length; i++) {
			const node = element.childNodes[i]

			if (node.nodeType === Node.TEXT_NODE) {
				if (node.textContent !== null) {
					let textContent = node.textContent.trim()
					if (!textContent.endsWith('.')) {
						textContent += '.'
					}
					textNodes.push(textContent)
				}
			} else if (node.nodeType === Node.ELEMENT_NODE) {
				extractTextNodes(node as HTMLElement)
			}
		}
	}

	if (html) extractTextNodes(html)

	return textNodes.join(' ')
}

export default function useHtmlToText(initialHtml: HTMLElement) {
	return htmlToText(initialHtml)
}
