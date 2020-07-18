module.exports = {
  siteMetadata: {
    title: "Tony Diaz",
    author: "Tony Diaz",
    // Used for SEO
    description: `Personal website for Tony Diaz`,
    // Used for social links in the root footer
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/t_ony`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/tonydiaz`,
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "tony-diaz",
        short_name: "tony-diaz",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/TD_logo_tiny.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-zopfli",
      options: {
        path: "zopfli",
      },
    },
    "gatsby-plugin-linaria",
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
      },
    },
  ],
};
