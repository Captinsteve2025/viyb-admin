import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    'https://3000-kimqdbctszrjryjdgvuvcoeyvopcbpnv.preview.same-app.com',
    'https://3000-qjaogjiwnywohqixaomqcqiqkmfqdrqa.preview.same-app.com',
    'https://3000-sayvgfzlkdtaeyacwzoctjevhesiqfie.preview.same-app.com',
  ],
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }
    return webpackConfig
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
