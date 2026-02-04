/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: Add trailing slashes for better SEO/hosting compatibility
  // trailingSlash: true, 
  // Optional: If your site is in a subdirectory (e.g., github.io/repo-name)
   basePath: '/out',
};

module.exports = nextConfig;