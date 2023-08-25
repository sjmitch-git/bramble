import useMetadata from '@/hooks/useMetadata'

import Link from 'next/link'

import config from '@/app.config'

const title = 'UI Components'
const description =
	"Explore Bramble UI's interactive components and elevate your web design. Create engaging user interfaces with modern tools and resources."
const keywords =
	'Bramble UI components, Interactive web tools, Modern user interfaces, Web design resources, User experience enhancement, Web development toolkit, UI building blocks, Engaging UI elements, Interactive design elements, Bramble UI showcase, ReactJS, NextJs, Next 13, TailwindCSS'

const url = 'ui'

export let metadata: any

export default function Components() {
	metadata = useMetadata({ title, description, keywords, url })
	console.log('config', config.siteLinks)
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
			<nav>
				<ul>
					<li>
						<Link href='./ui/accordian'>Accordian</Link>
					</li>
					<li>
						<Link href='./ui/alert'>Alert</Link>
					</li>
					<li>
						<Link href='./ui/badge'>Badge</Link>
					</li>
					<li>
						<Link href='./ui/breadcrumbs'>Breadcrumbs</Link>
					</li>
					<li>
						<Link href='./ui/buttons'>Buttons</Link>
						<ul>
							<li>
								<Link href='./ui/buttons/button_group'>Button Group</Link>
							</li>
							<li>
								<Link href='./ui/buttons/close_button'>Close Button</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link href='./ui/card'>Card</Link>
					</li>
					<li>
						<Link href='./ui/carousel'>Carousel</Link>
					</li>
					<li>
						<Link href='./ui/codeblock'>Codeblock</Link>
					</li>
					<li>
						<Link href='./ui/dialog'>Dialog</Link>
					</li>
					<li>
						<Link href='./ui/figure'>Figure</Link>
					</li>
					<li>
						<Link href='./ui/gallery'>Gallery</Link>
					</li>
					<li>
						<Link href='./ui/modal'>Modal</Link>
					</li>
					<li>
						<Link href='./ui/pagination'>Pagination</Link>
					</li>
					<li>
						<Link href='./ui/ratings'>Ratings</Link>
					</li>
					<li>
						<Link href='./ui/select'>Select</Link>
					</li>
					<li>
						<Link href='./ui/video'>Video</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}
