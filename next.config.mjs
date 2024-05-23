/** @type {import('next').NextConfig} */
import 'dotenv/config'
const nextConfig = {
    // output: 'export',
    eslint: {
        ignoreDuringBuilds: true,
    },
    env: {
        API_URL: process.env.API_URL,
        // port: process.env.port,
    },
};

export default nextConfig;
