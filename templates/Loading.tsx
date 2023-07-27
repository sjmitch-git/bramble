import { Codeblock, Loading, Spinner, Dots, Clock, Bars, Pulse, SpinDots, Wifi } from '@/components'

const LoadingTemplate = () => {
	return (
		<>
			<h2>Basic Usage</h2>
			<Codeblock language='jsx'>
				{`import { Loading, Spinner, Dots, Clock, Bars } from '@/components'
     
<Loading spinner={<Spinner />} />

<Loading spinner={<Dots />} />

<Loading spinner={<Clock />} />

<Loading spinner={<Bars />} />
`}
			</Codeblock>
			<h3>Output</h3>
			<div className='relative mb-12 flex items-center justify-center gap-8'>
				<Loading spinner={<Spinner />} />

				<Loading spinner={<Dots />} />

				<Loading spinner={<Clock />} />

				<Loading spinner={<Bars />} />
			</div>

			<h2>Sizes</h2>
			<Codeblock language='jsx'>
				{`<Loading
    className='w-10'
    spinner={<Spinner />}
/>

<Loading
    className='w-20'
    spinner={<Dots />}
/>

<Loading
    className='w-32'
    spinner={<Clock />}
/>

<Loading
    className='w-40'
    spinner={<Bars />}
/>
`}
			</Codeblock>

			<h4>Output</h4>
			<div className='relative mb-12 flex items-center justify-center gap-8'>
				<Loading
					className='w-10'
					spinner={<Spinner />}
				/>

				<Loading
					className='w-20'
					spinner={<Dots />}
				/>

				<Loading
					className='w-32'
					spinner={<Clock />}
				/>

				<Loading
					className='w-40'
					spinner={<Bars />}
				/>
			</div>

			<h2>Captions</h2>
			<Codeblock language='jsx'>
				{`<Loading
    className='w-10 text-sm'
    caption='Wait'
    spinner={<Spinner />}
/>

<Loading
    className='w-20 text-base'
    caption='Loading'
    spinner={<Dots />}
/>

<Loading
    className='w-32 text-xl'
    caption='Fetching'
    spinner={<Clock />}
/>

<Loading
    className='w-40 text-2xl'
    caption='Buffering'
    spinner={<Bars />}
/>
`}
			</Codeblock>

			<h3>Output</h3>
			<div className='relative mb-12 flex items-center justify-center gap-8'>
				<Loading
					className='w-10 text-sm'
					caption='Wait'
					spinner={<Spinner />}
				/>

				<Loading
					className='w-20 text-base'
					caption='Loading'
					spinner={<Dots />}
				/>

				<Loading
					className='w-32 text-xl'
					caption='Fetching'
					spinner={<Clock />}
				/>

				<Loading
					className='w-40 text-2xl'
					caption='Buffering'
					spinner={<Bars />}
				/>
			</div>

			<h2>Styling</h2>
			<Codeblock language='jsx'>
				{`<Loading
	className='w-10 text-sm text-info'
	caption='Wait'
	spinner={<Spinner />}
/>

<Loading
	className='w-20 text-base text-warning'
	caption='Loading'
	spinner={<Dots />}
/>

<Loading
	className='w-32 text-xl text-danger'
	caption='Fetching'
	spinner={<Clock />}
/>

<Loading
	className='w-40 text-2xl text-primary'
	caption='Buffering'
	spinner={<Bars />}
/>
					
`}
			</Codeblock>

			<h3>Output</h3>
			<div className='relative mb-12 flex items-center justify-center gap-8'>
				<Loading
					className='w-10 text-sm text-info'
					caption='Wait'
					spinner={<Spinner />}
				/>

				<Loading
					className='w-20 text-base text-warning'
					caption='Loading'
					spinner={<Dots />}
				/>

				<Loading
					className='w-32 text-xl text-danger'
					caption='Fetching'
					spinner={<Clock />}
				/>

				<Loading
					className='w-40 text-2xl text-primary'
					caption='Buffering'
					spinner={<Bars />}
				/>
			</div>

			<hr />

			<h2>Spinners</h2>

			<Codeblock language='jsx'>
				{`import { Spinner, Dots, Clock, Bars, Pulse, SpinDots, Wifi } from '@/components'
				
<Spinner />

{<Dots />

<Clock />

<Bars />

<Pulse />

<SpinDots />

<Wifi />
					
`}
			</Codeblock>

			<h3>Output</h3>

			<div className='relative mb-12 flex items-center justify-center gap-8'>
				<Loading
					className='w-20'
					caption='Spinner'
					spinner={<Spinner />}
				/>
				<Loading
					className='w-20'
					caption='Dots'
					spinner={<Dots />}
				/>
				<Loading
					className='w-20'
					caption='Clock'
					spinner={<Clock />}
				/>
				<Loading
					className='w-20'
					caption='Bars'
					spinner={<Bars />}
				/>
				<Loading
					className='w-20'
					caption='Pulse'
					spinner={<Pulse />}
				/>
				<Loading
					className='w-20'
					caption='SpinDots'
					spinner={<SpinDots />}
				/>
				<Loading
					className='w-20'
					caption='Wifi'
					spinner={<Wifi />}
				/>
			</div>

			<h2>Lazy Loading</h2>

			<Codeblock language='jsx'>
				{`import dynamic from 'next/dynamic'
				
import { Spinner } from '@/components'
				
const TwitterEmbed = dynamic(() => import('@/components/twitterembed/TwitterEmbed'), {
	ssr: false,
	loading: () => <Spinner className='aspect-square w-11 text-info' />,
})

return (
	// component will only be loaded on client side
	<TwitterEmbed
		handle='brambleUI'
		status='1681278654268035073'
		className='w-full max-w-lg text-center'
	/>
)
					
`}
			</Codeblock>
		</>
	)
}

export default LoadingTemplate
