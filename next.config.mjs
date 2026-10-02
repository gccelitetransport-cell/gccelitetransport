/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static site -> deploys on Cloudflare Pages (output dir: out)
  trailingSlash: true, // /routes/ style URLs
  images: { unoptimized: true },
  reactStrictMode: true,
};
export default nextConfig;
