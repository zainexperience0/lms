/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'utfs.io',
            },
            {
                "hostname": "hcm0fvoa2e.ufs.sh",
            }
        ]
    }
};

export default nextConfig;
