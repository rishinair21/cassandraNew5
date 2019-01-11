import React from "react";
import { graphql, Link } from "gatsby";
import Layout from '../components/layout'
import {Card} from "../components/card";


const VideoListPage = ({ data, pageContext }) => (
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

export default VideoListPage;

export const pageQuery = graphql`
    query VideoListQuery($skip: Int, $limit: Int) {
        videos: allAnantCassandralinks(
            skip: $skip
            limit: $limit
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
    }
`;
