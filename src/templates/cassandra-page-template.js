import React from "react";
import { graphql, Link } from "gatsby";
import Layout from '../components/layout'
import {Card} from "../components/card";


const LinksListPage = ({ data, pageContext }) => (
    <Layout>
        <Card obj={data.posts.edges}/>
        <br/>
        <div  className="pagination">
        {pageContext && pageContext.hasPreviousPage && (
            <Link class="flex items-center" to={pageContext.previousPageLink}>
              <small>Previous page</small>
            </Link>
        )}
        &nbsp;
        &nbsp;
        {pageContext && pageContext.hasNextPage && (
            <Link class="flex items-center" to={pageContext.nextPageLink}>
              <small>Next page</small>
            </Link>
        )}
        </div>
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
                    preview_picture
                    domain_name
                    tags{
                        alternative_id
                        label
                        slug
                      }	
                }
            }
        }
    }
`;
