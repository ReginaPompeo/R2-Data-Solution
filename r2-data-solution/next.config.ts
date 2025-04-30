// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['swiper'],
  
  // Para resolver problemas com Swiper e outros libs que usam browser APIs
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  },
  
  // Configurações de compilação otimizada
  compiler: {
    styledComponents: true, // Se usar styled-components
  },
  
  // Configurações de imagens
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.example.com',
      },
    ],
  },
};

export default nextConfig;