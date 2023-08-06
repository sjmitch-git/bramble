/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: false,
	disable: process.env.NODE_ENV === 'development',
})

const nextConfig = {
	experimental: { appDir: true },
	webpack(config) {
		config.experiments = { ...config.experiments, topLevelAwait: true }

		return config
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.dog.ceo',
				port: '',
				pathname: '/breeds/**',
			},
			{
				protocol: 'https',
				hostname: 'images-na.ssl-images-amazon.com',
				port: '',
				pathname: '/images/**',
			},
		],
	},
}

//module.exports = nextConfig
module.exports = withPWA({
	...nextConfig,
	reactStrictMode: true,
})
