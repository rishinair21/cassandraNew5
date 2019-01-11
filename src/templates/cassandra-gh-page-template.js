import React from "react";
import { graphql, Link } from "gatsby";
import Layout from '../components/layout'
import {Card} from "../components/card";


const GHListPage = ({ data, pageContext }) => (
    <Layout>
        <Card obj={data.videos.edges}/>  
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

export default GHListPage;

export const pageQuery = graphql`
    query GHListQuery($skip: Int, $limit: Int) {
        videos: allAnantCassandralinks(
            skip: $skip
            limit: $limit
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
    }
`;
