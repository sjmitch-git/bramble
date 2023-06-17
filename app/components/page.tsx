import Link from 'next/link'

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
					</li>
					<li>
						<Link href='./components/buttongroup'>Button Group</Link>
					</li>
					<li>
						<Link href='./components/codeblock'>Codeblock</Link>
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
