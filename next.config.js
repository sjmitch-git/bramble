/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: { appDir: true },
	webpack(config) {
		config.experiments = { ...config.experiments, topLevelAwait: true }

		/* const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))

		config.module.rules.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/,
			},

			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				resourceQuery: { not: /url/ },
				use: ['@svgr/webpack'],
			}
		)

		fileLoaderRule.exclude = /\.svg$/i */

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
