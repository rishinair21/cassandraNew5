import React from "react";
import { graphql, Link } from "gatsby";
import _ from "lodash";
import Layout from '../components/layout'


const LinksListPage = ({ data, pageContext }) => (
    <Layout>
        {_.map(data.posts.edges, (value, key) => {
            return(
                <div key={key}><Link to={`/post/${value.node.alternative_id}`}>{value.node.title}</Link></div>
            )
        })}
        <br/>
        {pageContext && pageContext.hasPreviousPage && (
            <Link class="flex items-center" to={pageContext.previousPageLink}>
              <small>Previous page</small>
            </Link>
        )}
        <br/>
        {pageContext && pageContext.hasNextPage && (
            <Link class="flex items-center" to={pageContext.nextPageLink}>
              <small>Next page</small>
            </Link>
        )}
    </Layout>
);

export default LinksListPage;

export const pageQuery = graphql`
    query LinksListQuery($skip: Int, $limit: Int) {
        posts: allAnantCassandralinks(
            skip: $skip
            limit: $limit
        ) {
            edges {
                node {
                    title
                    alternative_id
                }
            }
        }
    }
`;
