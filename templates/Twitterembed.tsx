'use client'

import dynamic from 'next/dynamic'

import { Codeblock, Spinner, Alert } from '@/components'

const TwitterEmbed = dynamic(() => import('@/components/twitterembed/TwitterEmbed'), {
	ssr: false,
	loading: () => <Spinner className='aspect-square w-11 text-info' />,
})

const TwitterembedTemplate = () => {
	return (
		<>
			<h2>Single Tweet</h2>
			<p>
				Use <code>dynamic</code> lazy loading.
			</p>
			<Codeblock language='jsx'>
				{`import dynamic from 'next/dynamic'

import { Spinner } from '@/components'

const TwitterEmbed = dynamic(() => import('@/components/twitterembed/TwitterEmbed'), {
	ssr: false,
	loading: () => <Spinner className='aspect-square w-11 text-info' />,
})
                
<TwitterEmbed
    handle='nextjs'
    status='1672021371919175682'
/>`}
			</Codeblock>
			<h3>Output</h3>
			<div className='mb-12 flex justify-center'>
				<TwitterEmbed
					handle='nextjs'
					status='1672021371919175682'
				/>
			</div>
			<h2>Options</h2>

			<div className='mb-12 flex justify-center'>
				<table className='table max-w-3xl border'>
					<thead>
						<tr>
							<th>Option</th>
							<th>Values</th>
							<th>Default</th>
							<th>Notes</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<code>theme</code>
							</td>
							<td>
								<code>dark</code>
							</td>
							<td>
								<code>light</code>
							</td>
							<td>Display light text on a dark background</td>
						</tr>
						<tr>
							<td>
								<code>lang</code>
							</td>
							<td>
								<table className='fixed-height table table-fixed'>
									{/* <thead>
										<tr>
											<th>Lang</th>
											<th>Language</th>
										</tr>
									</thead> */}
									<tbody className='h-10'>
										<tr>
											<td>
												<code>en</code>
											</td>
											<td>English</td>
										</tr>
										<tr>
											<td>
												<code>ar</code>
											</td>
											<td>Arabic</td>
										</tr>
										<tr>
											<td>
												<code>bn</code>
											</td>
											<td>Bengali</td>
										</tr>
										<tr>
											<td>
												<code>zh-cn</code>
											</td>
											<td>Chinese (Simplified)</td>
										</tr>
										<tr>
											<td>
												<code>zh-tw</code>
											</td>
											<td>Chinese (Traditional)</td>
										</tr>
										<tr>
											<td>
												<code>cs</code>
											</td>
											<td>Czech</td>
										</tr>
										<tr>
											<td>
												<code>da</code>
											</td>
											<td>Danish</td>
										</tr>
										<tr>
											<td>
												<code>nl</code>
											</td>
											<td>Dutch</td>
										</tr>
										<tr>
											<td>
												<code>fil</code>
											</td>
											<td>Filipino</td>
										</tr>
										<tr>
											<td>
												<code>fi</code>
											</td>
											<td>Finnish</td>
										</tr>
										<tr>
											<td>
												<code>fr</code>
											</td>
											<td>French</td>
										</tr>
										<tr>
											<td>
												<code>de</code>
											</td>
											<td>German</td>
										</tr>
										<tr>
											<td>
												<code>el</code>
											</td>
											<td>Greek</td>
										</tr>
										<tr>
											<td>
												<code>he</code>
											</td>
											<td>Hebrew</td>
										</tr>
										<tr>
											<td>
												<code>hi</code>
											</td>
											<td>Hindi</td>
										</tr>
										<tr>
											<td>
												<code>hu</code>
											</td>
											<td>Hungarian</td>
										</tr>
										<tr>
											<td>
												<code>id</code>
											</td>
											<td>Indonesian</td>
										</tr>
										<tr>
											<td>
												<code>it</code>
											</td>
											<td>Italian</td>
										</tr>
										<tr>
											<td>
												<code>ja</code>
											</td>
											<td>Japanese</td>
										</tr>
										<tr>
											<td>
												<code>ko</code>
											</td>
											<td>Korean</td>
										</tr>
										<tr>
											<td>
												<code>msa</code>
											</td>
											<td>Malay</td>
										</tr>
										<tr>
											<td>
												<code>no</code>
											</td>
											<td>Norwegian</td>
										</tr>
										<tr>
											<td>
												<code>fa</code>
											</td>
											<td>Persian</td>
										</tr>
										<tr>
											<td>
												<code>pl</code>
											</td>
											<td>Polish</td>
										</tr>
										<tr>
											<td>
												<code>pt</code>
											</td>
											<td>Portuguese</td>
										</tr>
										<tr>
											<td>
												<code>ro</code>
											</td>
											<td>Romanian</td>
										</tr>
										<tr>
											<td>
												<code>ru</code>
											</td>
											<td>Russian</td>
										</tr>
										<tr>
											<td>
												<code>es</code>
											</td>
											<td>Spanish</td>
										</tr>
										<tr>
											<td>
												<code>sv</code>
											</td>
											<td>Swedish</td>
										</tr>
										<tr>
											<td>
												<code>th</code>
											</td>
											<td>Thai</td>
										</tr>
										<tr>
											<td>
												<code>tr</code>
											</td>
											<td>Turkish</td>
										</tr>
										<tr>
											<td>
												<code>uk</code>
											</td>
											<td>Ukrainian</td>
										</tr>
										<tr>
											<td>
												<code>ur</code>
											</td>
											<td>Urdu</td>
										</tr>
										<tr>
											<td>
												<code>vi</code>
											</td>
											<td>Vietnamese</td>
										</tr>
									</tbody>
								</table>
							</td>
							<td>English</td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>

			<h3>
				Arabic Example <small>(RTL)</small>
			</h3>
			<Codeblock language='jsx'>
				{`<TwitterEmbed
    handle='PLinArabic'
    status='1680161970698215424'
    lang='ar'
/>`}
			</Codeblock>
			<div className='mb-4 flex justify-center'>
				<TwitterEmbed
					handle='PLinArabic'
					status='1680161970698215424'
					lang='ar'
				/>
			</div>

			<h2>Dark Theme</h2>
			<Codeblock language='jsx'>
				{`<TwitterEmbed
    handle='adamwathan'
	status='1676979739444011012'
    theme='dark'
/>`}
			</Codeblock>
			<div className='mb-4 flex justify-center'>
				<TwitterEmbed
					handle='adamwathan'
					status='1676979739444011012'
					theme='dark'
				/>
			</div>

			<hr />

			<h2>Timeline</h2>

			<p>View latest 10 tweets.</p>

			<Codeblock language='jsx'>
				{`<TwitterEmbed
    handle='elonmusk'
	height={400}
/>
`}
			</Codeblock>

			<div className='mb-12 flex justify-center'>
				<TwitterEmbed
					handle='elonmusk'
					height={400}
				/>
			</div>

			<h2>Timeline Options</h2>

			<div className='mb-12 flex justify-center'>
				<table className='table max-w-3xl border'>
					<thead>
						<tr>
							<th>Option</th>
							<th>Values</th>
							<th>Default</th>
							<th>Notes</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<code>chrome</code>
							</td>
							<td>
								<code>noheader, nofooter, noborders, transparent, noscrollbar</code>
							</td>
							<td>
								<code>undefined</code>
							</td>
							<td>
								Toggle the display of design elements in the widget. This parameter
								is a space-separated list of values
							</td>
						</tr>
						<tr>
							<td>
								<code>theme</code>
							</td>
							<td>
								<code>dark</code>
							</td>
							<td>
								<code>light</code>
							</td>
							<td>Display light text on a dark background</td>
						</tr>
						<tr>
							<td>
								<code>height</code>
							</td>
							<td>
								<code>number (px)</code>
							</td>
							<td>
								<code>undefined</code>
							</td>
							<td>Height will display scrollbar</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}

export default TwitterembedTemplate
