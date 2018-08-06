module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-123486957-1",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'David Stoll',
    description: 'Full stack JavaScript developer',
    keywords: 'full stack, JavaScript, portfolio, personal website',
    url: 'https://www.davidstoll.info'
  }
};
