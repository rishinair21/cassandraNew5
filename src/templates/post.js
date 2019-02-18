import React from "react";
import Layout from '../components/layout'
import { Link } from "gatsby";


const LinkPostPage = ({ data }) => (
    <Layout>
        <div className="single-post">
            <div className="back-btn"><Link to="/"><button> &larr; Back</button></Link></div>
            <h2>{data.allAnantCassandralinks.edges[0].node['title']}</h2>
            <div className="post-mata">
                <ul>
                    <li>{data.allAnantCassandralinks.edges[0].node['domain_name']}</li>
                    <li><a href={data.allAnantCassandralinks.edges[0].node['url']} target="_blank">Link</a></li>
                </ul>
            </div> 
            <div className="content" dangerouslySetInnerHTML={{ __html: data.allAnantCassandralinks.edges[0].node['content'] }} />
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
                    domain_name
                    url
                }
            }
        }
    }`;
