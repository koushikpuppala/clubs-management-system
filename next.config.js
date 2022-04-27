/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	experimental: { images: { layoutRaw: true } },
	images: {
		domains: ['lh3.googleusercontent.com'],
	},
	// webpack: (config, { isServer }) => {
	// 	if (!isServer) {
	// 		config.resolve.fallback = {
	// 			fs: false,
	// 			path: false,
	// 			os: false,
	// 			querystring: false,
	// 			url: false,
	// 			stream: false,
	// 			util: false,
	// 			assert: false,
	// 			buffer: false,
	// 			child_process: false,
	// 			cluster: false,
	// 			crypto: false,
	// 			dgram: false,
	// 			dns: false,
	// 			http: false,
	// 			https: false,
	// 			net: false,
	// 		}
	// 	}
	// 	config.externals = ['pg', 'sqlite3', 'tedious', 'pg-hstore']

	// 	return config
	// },
}

module.exports = nextConfig
