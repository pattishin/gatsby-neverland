module.exports = {
  siteMetadata: {
    title: 'Neverland project'
  },
  plugins: [
    'gatsby-plugin-glamor',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    }
  ]
}
