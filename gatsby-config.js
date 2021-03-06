module.exports = {
  siteMetadata: {
    title: 'Arya Murthi',
    author: 'Arya Murthi',
    description: 'A Gatsby.js V2 Starter based on Dimension by HTML5 UP',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/graduation-icon.png', // This path is relative to the root of the site.
      },
    },

    {resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: 'aryamurthi.info'
      },
    },
    'gatsby-plugin-sass',
  ],
}
