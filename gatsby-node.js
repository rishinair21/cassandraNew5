/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


var path = require("path");
var _ = require("lodash");

var config = require("./src/config");
const PAGE_SIZE = 20;

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve(`src/templates/cassandra-page-template.js`);
  const videoPageTemplate = path.resolve(`src/templates/cassandra-video-page-template.js`);
  const ghPageTemplate = path.resolve(`src/templates/cassandra-gh-page-template.js`);

  const postTemplate = path.resolve(`src/templates/post.js`);

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `query {
            posts: allAnantCassandralinks(
              sort: { order: DESC, fields: [title] }
            ) {
              edges {
                node {
                  alternative_id
                }
              }
            }
          }`
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        // Break the entries into chunks according to
        let chunks = _.chunk(result.data.posts.edges, PAGE_SIZE);

        // For each of the chunks, call createPage()
        chunks.forEach((chunk, index) => {
          if (index == 0) {
            createPage({
				path: `/`,
				component: pageTemplate,
				context: {
					skip: PAGE_SIZE * index,
					limit: PAGE_SIZE,
					pageNumber: index + 1,
					hasNextPage: index != chunks.length - 1,
					hasPreviousPage: index !== 0,
					nextPageLink: `/page/${index + 2}`,
					previousPageLink: `/page/${index}`
				}
            });
          }
          createPage({
            path: `page/${index + 1}`,
            component: pageTemplate,
            context: {
				skip: PAGE_SIZE * index,
				limit: PAGE_SIZE,
				pageNumber: index + 1,
				hasNextPage: index != chunks.length - 1,
				hasPreviousPage: index !== 0,
				nextPageLink: `/page/${index + 2}`,
				previousPageLink: `/page/${index}`
            }
          });
        });
        result.data.posts.edges.forEach(({ node }) => {
          // loop over split pages
			createPage({
				path: `${config.blogRootPath}/${node.alternative_id}`,
				component: postTemplate,
				context: {
					alternative_id: node.alternative_id
				}
			});
        });

        graphql(
        `query {
            videos: allAnantCassandralinks(
            filter: { domain_name: { eq: "www.youtube.com"} }
        ) {
            edges {
                node {
                    title
                    alternative_id
                    preview_picture
                    domain_name
                }
            }
        }
          }`
      ).then(result => {
        console.log(result)
        if (result.errors) {
          reject(result.errors);
        }

        // Break the entries into chunks according to
        let chunks = _.chunk(result.data.videos.edges, PAGE_SIZE);

        // For each of the chunks, call createPage()
        chunks.forEach((chunk, index) => {
          if (index == 0) {
            createPage({
        path: `/videos`,
        component: videoPageTemplate,
        context: {
          skip: PAGE_SIZE * index,
          limit: PAGE_SIZE,
          pageNumber: index + 1,
          hasNextPage: index != chunks.length - 1,
          hasPreviousPage: index !== 0,
          nextPageLink: `/videos/page/${index + 2}`,
          previousPageLink: `/videos/page/${index}`
        }
            });
          }
          createPage({
            path: `videos/page/${index + 1}`,
            component: videoPageTemplate,
            context: {
        skip: PAGE_SIZE * index,
        limit: PAGE_SIZE,
        pageNumber: index + 1,
        hasNextPage: index != chunks.length - 1,
        hasPreviousPage: index !== 0,
          nextPageLink: `/videos/page/${index + 2}`,
          previousPageLink: `/videos/page/${index}`
            }
          });
        });
      })

      graphql(
        `query {
            github: allAnantCassandralinks(
            filter: { domain_name: { eq: "github.com"} }
        ) {
            edges {
                node {
                    title
                    alternative_id
                    preview_picture
                    domain_name
                }
            }
        }
          }`
      ).then(result => {
        console.log(result)
        if (result.errors) {
          reject(result.errors);
        }

        // Break the entries into chunks according to
        let chunks = _.chunk(result.data.github.edges, PAGE_SIZE);

        // For each of the chunks, call createPage()
        chunks.forEach((chunk, index) => {
          if (index == 0) {
            createPage({
        path: `/github`,
        component: ghPageTemplate,
        context: {
          skip: PAGE_SIZE * index,
          limit: PAGE_SIZE,
          pageNumber: index + 1,
          hasNextPage: index != chunks.length - 1,
          hasPreviousPage: index !== 0,
          nextPageLink: `/github/page/${index + 2}`,
          previousPageLink: `/github/page/${index}`
        }
            });
          }
          createPage({
            path: `github/page/${index + 1}`,
            component: ghPageTemplate,
            context: {
        skip: PAGE_SIZE * index,
        limit: PAGE_SIZE,
        pageNumber: index + 1,
        hasNextPage: index != chunks.length - 1,
        hasPreviousPage: index !== 0,
          nextPageLink: `/github/page/${index + 2}`,
          previousPageLink: `/github/page/${index}`
            }
          });
        });
      })


      })

      
    );
  });
};
