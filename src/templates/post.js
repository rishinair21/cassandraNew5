import React from "react";
import Layout from '../components/layout'


const LinkPostPage = ({ data }) => (
    <Layout>
        <div>
            {JSON.stringify(data.allAnantCassandralinks.edges)}
        </div>
    </Layout>
);

export default LinkPostPage;

export const pageQuery = graphql`
    query LinkPostQuery($alternative_id: Int) {
        allAnantCassandralinks(
            filter: { alternative_id: { eq: $alternative_id } }
        ) {
            edges {
                node {
                    title
                    alternative_id
                    content
                }
            }
        }
    }`;
