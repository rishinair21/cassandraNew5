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
  const pageTemplate = path.resolve(
    `src/templates/cassandra-page-template.js`
  );

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
      })
    );
  });
};
