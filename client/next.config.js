/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
    dest: 'public',
    register: true,
    sw: 'sw.js',
    disable: process.env.NODE_ENV === 'development',
  },
  reactStrictMode: true,
});
