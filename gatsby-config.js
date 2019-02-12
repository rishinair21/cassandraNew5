module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [{
    resolve: 'gatsby-source-apiserver',
    options: {
      // Type prefix of entities from server
      typePrefix: 'anant__',

      // The url, this should be the endpoint you are attempting to pull data from
      url: `http://leaves.anant.us:82/api/entries?access_token=N2Y1YmFlNzY4OTM3ZjE2OGMwODExODQ1ZDhiYmQ5OWYzMjhkZjhiMDgzZWU2Y2YyYzNkYzA5MDQ2NWRhNDIxYw&limit=100&order=desc&page=2&sort=created&tags=cassandra&perPage=200`,

      method: 'get',

      headers: {
        'Content-Type': 'application/json'
      },
  
      // Request body
      data: {

      },

      // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
      // using this name. i.e. posts.json
      name: `cassandralinks`,

      // Nested level of entities in response object, example: `data.posts`
      entityLevel: `_embedded.items`,

      // Define schemaType to normalize blank values
      // example:
      // const postType = {
      //   id: 1,
      //   name: 'String',
      //   published: true,
      //   object: {a: 1, b: '2', c: false},
      //   array: [{a: 1, b: '2', c: false}]
      // }
      // schemaType: postType,

      // Simple authentication, if optional, set it null
      // auth: {
      //   username: 'myusername',
      //   password: 'supersecretpassword1234'
      // },

      // Optional payload key name if your api returns your payload in a different key
      // Default will use the full response from the http request of the url
      // payloadKey: `body`,

      // Optionally save the JSON data to a file locally
      // Default is false
      localSave: true,

      //  Required folder path where the data should be saved if using localSave option
      //  This folder must already exist
      path: `${__dirname}/api/`,

      // Optionally include some output when building
      // Default is false
      verboseOutput: true, // For debugging purposes

      // Optionally skip creating nodes in graphQL.  Use this if you only want
      // The data to be saved locally
      // Default is false
      // skipCreateNode: true, // skip import to graphQL, only use if localSave is all you want
    }
  },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
