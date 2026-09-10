import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: true,
  },
  transpilePackages: ['@wealthyexpress/shared', '@wealthyexpress/database'],
};

export default nextConfig;
