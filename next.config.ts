/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      diagnostics: false, // stops OneDrive file-lock crash
    },
  },
};

export default nextConfig;