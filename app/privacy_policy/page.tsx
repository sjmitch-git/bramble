import Link from 'next/link'

import useMetadata from '@/hooks/useMetadata'

import config from '@/app.config'

const title = 'Privacy Policy'
const description = 'A library of reusable components for React'
const keywords = 'Terms and Conditionsr'
const url = 'privacy_policy'

export let metadata: any

export default function Privacy() {
	metadata = useMetadata({ title, description, keywords, url })
	const { siteMetadata } = config
	const { name } = siteMetadata
	return (
		<>
			<h1>{title}</h1>
			<div className='prose'>
				<h2>Introduction</h2>
				<p>
					This privacy policy will explain how <strong>{name}</strong> uses the personal
					data we collect from you when you use our website.
				</p>

				<h2>Personal Data</h2>

				<h3>What data do we collect?</h3>

				<ul>
					<li>Location of IP Address (country, city)</li>
					<li>Pages you have visited on our website</li>
					<li>We collect no personal identification information</li>
				</ul>

				<h3>How do we collect your data?</h3>

				<ul>
					<li>Google Analytics</li>
				</ul>

				<h3>How will we use your data?</h3>

				<ul>
					<li>Improve our services</li>
				</ul>

				<h2>Cookies</h2>

				<p>
					Cookies are text files placed on your computer to collect standard Internet log
					information and visitor behavior information. When you visit our websites, we
					may collect information from you automatically through cookies or similar
					technology
				</p>

				<p>For further information, visit allaboutcookies.org.</p>

				<h3>How do we use cookies?</h3>

				<p>
					We use cookies in a range of ways to improve your experience on our website,
					including:
				</p>

				<ul>
					<li>
						We will retain and evaluate information on your recent visits to our website
						and how you move around different sections of our website for analytics
						purposes to understand how people use our website so that we can make it
						more intuitive
					</li>
				</ul>

				<h2>Privacy policies of other websites</h2>

				<p>
					The <strong>{name}</strong> website contains links to other websites. Our
					privacy policy applies only to our website, so if you click on a link to another
					website, you should read their privacy policy.
				</p>

				<h2>Changes to our privacy policy</h2>

				<p>
					<strong>{name}</strong> keeps its privacy policy under regular review and places
					any updates on this web page. This privacy policy was last updated on 24 July
					2023.
				</p>
			</div>
			<hr />
		</>
	)
}
