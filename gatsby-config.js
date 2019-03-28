module.exports = {
  siteMetadata: {
    title: 'Cassandra.Link',
  },
  plugins: [
    {
    resolve: 'gatsby-source-apiserver',
    options: {
      // Type prefix of entities from server
      typePrefix: 'anant__',

      // The url, this should be the endpoint you are attempting to pull data from
      url: `http://admin.stage.leaves.anant.us/api/entries?access_token=N2Y1YmFlNzY4OTM3ZjE2OGMwODExODQ1ZDhiYmQ5OWYzMjhkZjhiMDgzZWU2Y2YyYzNkYzA5MDQ2NWRhNDIxYw&limit=100&order=desc&page=2&sort=created&tags=cassandra&perPage=200`,

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
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://192.241.141.6:81/public.php?op=rss&id=-4&limit=500&key=k7ojwf5bd4b2e7638ff`,
        name: `TTRS`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            item: ['entry:summary']
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-657559-21",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        //exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional create only fields (optional)
        //sampleRate: 5,
        //siteSpeedSampleRate: 10,
        //cookieDomain: "example.com",
      },
    },
  ],
}
