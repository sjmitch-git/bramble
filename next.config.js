/** @type {import('next').NextConfig} */
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

module.exports = nextConfig
