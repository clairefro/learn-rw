/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet-async`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdowns`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-layout`,
  ],
}
