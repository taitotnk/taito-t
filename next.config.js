const withMDX = require('@next/mdx')({
    extension: /\.mdx$/
  })
  
  module.exports = withMDX(
    {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
    }
  )

  module.exports = {
    env: {
      GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    }
  }
