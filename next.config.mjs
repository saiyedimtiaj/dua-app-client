/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["i.ibb.co"]
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
      },
};

export default nextConfig;
