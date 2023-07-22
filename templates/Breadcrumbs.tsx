import Breadcrumbs from '@/components/breadcrumbs'
import Codeblock from '@/components/codeblock'

const BreadcrumbsTemplate = () => {
	return (
		<>
			<h2>Usage</h2>
			<div className='mb-0'>
				<Codeblock language='jsx'>
					{`import Breadcrumbs from '@/components/breadcrumbs'

return (			
	<Breadcrumbs />
)`}
				</Codeblock>
			</div>

			<div className='mb-8 flex bg-gray-300 p-4'>
				<Breadcrumbs />
			</div>
			<h2>Options</h2>
			<h3>Small</h3>
			<div className='mb-0'>
				<Codeblock language='jsx'>{`<Breadcrumbs size='sm' />`}</Codeblock>
			</div>
			<div className='mb-8 flex bg-gray-300 p-4'>
				<Breadcrumbs size='sm' />
			</div>
			<h2>Large</h2>
			<div className='mb-0'>
				<Codeblock language='jsx'>{`<Breadcrumbs size='lg' />`}</Codeblock>
			</div>
			<div className='mb-8 flex bg-gray-300 p-4'>
				<Breadcrumbs size='lg' />
			</div>
			<h2>RTL</h2>
			<div className='mb-0'>
				<Codeblock language='jsx'>{`dir='rtl'
<Breadcrumbs />`}</Codeblock>
			</div>
			<div
				className='mb-8 flex bg-gray-300 p-4'
				dir='rtl'
			>
				<Breadcrumbs />
			</div>
			<h2>Styling</h2>
			<div className='mb-0'>
				<Codeblock language='jsx'>{`<Breadcrumbs className='invert italic' /> // Add any Tailwind classes`}</Codeblock>
			</div>
			<div className='mb-8 flex bg-gray-900 p-4'>
				<Breadcrumbs className='italic invert' />
			</div>
			<h2>HTML</h2>
			<div className='mb-0'>
				<Codeblock language='html'>{`<nav class="breadcrumbs" aria-label="breadcrumb">
	<ol>
		<li><a href="/">Home</a></li>
		<li><a href="/components">components</a></li>
		<li class="active" aria-current="page">breadcrumbs</li>
	</ol>
</nav>`}</Codeblock>
			</div>
			<h2>CSS</h2>
			<div className='mb-0'>
				<Codeblock language='css'>{`.breadcrumbs {
        
	@apply text-base w-full lg:max-w-6xl mx-auto;

	&.sm {
		@apply text-sm;
	}      

	&.lg {
		@apply text-lg;
	}

	&.xl {
		@apply text-xl;
	}

	& > ol {
		@apply flex;
	}

	& li {
		@apply ps-[var(--breadcrumb-px)] first:ps-0 capitalize;
	}

	& li:not(:first-of-type)::before {
		@apply float-left rtl:float-right content-[var(--breadcrumb-separator)] rtl:content-[var(--breadcrumb-separator-rtl)] pe-[var(--breadcrumb-px)];
	}
                
}`}</Codeblock>
			</div>
			<h2>Variables</h2>
			<div className='mb-0'>
				<Codeblock language='css'>{` // Spacing between
--spacing-3: 0.75rem;
--breadcrumb-px: var(--spacing-3);

// Separator
--breadcrumb-separator: /002F;
--breadcrumb-separator-rtl: /005C;
`}</Codeblock>
			</div>
		</>
	)
}

export default BreadcrumbsTemplate
