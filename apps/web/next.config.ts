import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typedRoutes: true,
  transpilePackages: ['@wealthyexpress/shared', '@wealthyexpress/database'],
};

export default nextConfig;
