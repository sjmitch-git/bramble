const BreadcrumbsTemplate = () => {
	return (
		<>
			<h1>Breadcrumbs</h1>

			<div className='mb-8 flex max-w-4xl bg-gray-300 p-4'>
				<nav
					className='breadcrumbs'
					aria-label='breadcrumb'
				>
					<ol>
						<li
							className='active'
							aria-current='page'
						>
							Home
						</li>
					</ol>
				</nav>
			</div>

			<div className='mb-8 flex max-w-4xl bg-gray-300 p-4'>
				<nav
					className='breadcrumbs'
					aria-label='breadcrumb'
				>
					<ol>
						<li>
							<a href='#'>home</a>
						</li>
						<li>
							<a href='#'>Library</a>
						</li>
						<li
							className='active'
							aria-current='page'
						>
							Data
						</li>
					</ol>
				</nav>
			</div>

			<h2>Small</h2>

			<div className='mb-8 flex max-w-4xl bg-gray-300 p-4'>
				<nav
					className='breadcrumbs sm'
					aria-label='breadcrumb'
				>
					<ol>
						<li>
							<a href='#'>Home</a>
						</li>
						<li>
							<a href='#'>Library</a>
						</li>
						<li
							className='active'
							aria-current='page'
						>
							Data
						</li>
					</ol>
				</nav>
			</div>

			<h2>Large</h2>

			<div className='mb-8 flex max-w-4xl bg-gray-300 p-4'>
				<nav
					className='breadcrumbs lg'
					aria-label='breadcrumb'
				>
					<ol>
						<li>
							<a href='#'>Home</a>
						</li>
						<li>
							<a href='#'>Library</a>
						</li>
						<li
							className='active'
							aria-current='page'
						>
							Data
						</li>
					</ol>
				</nav>
			</div>

			<h2>RTL</h2>

			<div
				className='mb-8 flex max-w-4xl bg-gray-300 p-4'
				dir='rtl'
			>
				<nav
					className='breadcrumbs lg'
					aria-label='breadcrumb'
				>
					<ol>
						<li>
							<a href='#'>بيت</a>
						</li>
						<li>
							<a href='#'>مكتبة</a>
						</li>
						<li
							className='active'
							aria-current='page'
						>
							بيانات
						</li>
					</ol>
				</nav>
			</div>
		</>
	)
}

export default BreadcrumbsTemplate
