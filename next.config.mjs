/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        return config;
    },
    images: {  
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's3-inventorymanagement.s3.us-east-2.amazonaws.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;

