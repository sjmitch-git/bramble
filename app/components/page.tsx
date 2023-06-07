import Link from 'next/link'

export default function Components() {
	return (
		<>
			<h1>Components</h1>
			<nav>
				<ul>
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
						<Link href='./components/pagination'>Pagination</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}
