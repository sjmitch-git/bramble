import { host, home } from '../../shared/metadata'

export type SchemaMarkupProps = {
	title: string
	description: string
	url: string
}

const useSchemaMarkup = ({ title, description, url }: SchemaMarkupProps) => {
	const image = `${host}/api/og?title=${title}&description=${description}`

	const schema = `{
  "@context": "http://schema.org",
  "@type": "WebPage",
  "name": "${title}",
  "description": "${description}",
  "url": "${host + '/' + url}",
  "image": "${image}",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "${home}",
        "item": "${host}"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "${title}",
        "item": "${host + '/' + url}"
      }
    ]
  }
}
`
	return schema
}

export default useSchemaMarkup
