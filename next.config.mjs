/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [     // for getting your google account image
            {
                protocol: 'https',
                hostname: '*googleusercontent.com',

            },
            {
                protocol: 'https',
                hostname: 'oriental-foods.s3.ap-south-1.amazonaws.com',

            },
        ]
    }
};

export default nextConfig;
