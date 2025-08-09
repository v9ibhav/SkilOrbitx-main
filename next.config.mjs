/** @type {import('next').NextConfig} */
const nextConfig = {
	// Enable static HTML export so the site can run on shared hosting (no Node.js runtime required)
	output: 'export',
	images: {
		// Next/Image optimization requires a server; disable so exported site works on static hosting
		unoptimized: true,
	},
};

export default nextConfig;
