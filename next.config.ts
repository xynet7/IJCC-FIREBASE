
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.ijcc.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.asiancommunitynews.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imgcp.aacdn.jp',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.investindia.gov.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'www.aima.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.aranca.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.ajujapanesehotels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'veenapower.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ahujaresidences.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
