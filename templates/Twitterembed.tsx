'use client'

import dynamic from 'next/dynamic'

import { Codeblock, Spinner } from '@/components'

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
			<h3>Options</h3>
			<Codeblock language='jsx'>
				{`handle: string
status: string
theme?: 'light' | 'dark' | undefined = 'light'
className?: string | undefined
lang?: string | undefined = 'English' // see options below`}
			</Codeblock>
			<h3>Language Options</h3>
			<div className='bg-light p-4'>
				<table className='fixed-height table table-fixed'>
					<thead>
						<tr>
							<th>Lang</th>
							<th>Language</th>
						</tr>
					</thead>
					<tbody className='h-40'>
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
			</div>
			<h3>RTL - Arabic</h3>
			<div className='mb-4 flex justify-center'>
				<TwitterEmbed
					handle='PLinArabic'
					status='1680161970698215424'
					lang='ar'
				/>
			</div>
			<Codeblock language='jsx'>
				{`<TwitterEmbed
    handle='PLinArabic'
    status='1680161970698215424'
    lang='ar'
/>`}
			</Codeblock>
			<h3>Dark Theme</h3>
			<div className='mb-4 flex justify-center'>
				<TwitterEmbed
					handle='BBCSport'
					status='1681997467137523714'
					theme='dark'
				/>
			</div>
			<Codeblock language='jsx'>
				{`<TwitterEmbed
    handle='BBCSport'
    status='1681997467137523714'
    theme='dark'
/>`}
			</Codeblock>
			<hr />

			{/* 			<h2>Profile</h2>

			<Alert
				className='error solid'
				status='Nothing to see here yet'
				message=''
			/>

			<div className='mb-4 flex justify-center'>
				<Suspense
					fallback={
						<div className='w-[50px]'>
							<Spinner />
						</div>
					}
				>
					<TwitterEmbed
						handle='bbc'
						chrome='nofooter noheader noborders'
					/>
				</Suspense>
			</div>
			<Codeblock language='jsx'>
				{`<TwitterEmbed
    handle='Sportdum'
    status='1681842721340923904'
    theme='dark'
/>`}
			</Codeblock>
			<hr /> */}
		</>
	)
}

export default TwitterembedTemplate
