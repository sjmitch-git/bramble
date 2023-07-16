import { Metadata } from 'next'

import Link from 'next/link'

const title = 'Components'
const description = 'A library of reusable components for React'
const keywords =
	'Components,React,React Components,Accordian,Alert,Badge,Breadcrumbs,Buttons,Button Group,Close Button,Card,Carousel,Dropdown,Codeblock,Dialog,Figure,Gallery,Modal,Navbar,Pagination,Range,Ratings,Select,Video,Video Player'

export const metadata: Metadata = {
	title: title,
	description: description,
	keywords: keywords,
}

export default function Components() {
	return (
		<>
			<h1>Components</h1>
			<nav>
				<ul>
					<li>
						<Link href='./components/accordian'>Accordian</Link>
					</li>
					<li>
						<Link href='./components/alert'>Alert</Link>
					</li>
					<li>
						<Link href='./components/badge'>Badge</Link>
					</li>
					<li>
						<Link href='./components/breadcrumbs'>Breadcrumbs</Link>
					</li>
					<li>
						<Link href='./components/buttons'>Buttons</Link>
						<ul>
							<li>
								<Link href='./components/buttons/button_group'>Button Group</Link>
							</li>
							<li>
								<Link href='./components/buttons/close_button'>Close Button</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link href='./components/card'>Card</Link>
					</li>
					<li>
						<Link href='./components/carousel'>Carousel</Link>
					</li>
					<li>
						<Link href='./components/codeblock'>Codeblock</Link>
					</li>
					<li>
						<Link href='./components/dialog'>Dialog</Link>
					</li>
					<li>
						<Link href='./components/figure'>Figure</Link>
					</li>
					<li>
						<Link href='./components/gallery'>Gallery</Link>
					</li>
					<li>
						<Link href='./components/modal'>Modal</Link>
					</li>
					<li>
						<Link href='./components/pagination'>Pagination</Link>
					</li>
					<li>
						<Link href='./components/ratings'>Ratings</Link>
					</li>
					<li>
						<Link href='./components/select'>Select</Link>
					</li>
					<li>
						<Link href='./components/video'>Video</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}
