import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import { Card, YTCard, GHCard } from "../components/card";

class IndexPage extends React.Component {
    render() {
        console.log('videos');
        const data = this.props.data.all.edges;
        const videos = this.props.data.videos.edges;
        const github = this.props.data.github.edges;
        return (
            <Layout>
                <div>
                    <div className="home-structure">
                        <div className="all-posts">
                            <h2>Latest Post</h2>
                            <Card obj={data}/>                    
                            <br />
                            <div  className="pagination">
                                <Link to="/page/2">
                                    <small>Next Page</small>
                                </Link>
                            </div>
                        </div>
                        <div className="filter-posts">
                            <div className="yt-videos">
                                <h2>Videos</h2>
                                <YTCard obj={videos}/>                    
                                <br />
                                <div  className="pagination">
                                    <Link to="/videos/page/1">
                                        <small>View More</small>
                                    </Link>
                                </div> 
                            </div>  
                            <div className="github-links">
                                <h2>GitHub Resources</h2>
                                <GHCard obj={github}/>                    
                                <br />
                                <div  className="pagination">
                                    <Link to="/github/page/1">
                                        <small>View More</small>
                                    </Link>
                                </div> 
                            </div>                          
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default IndexPage;

export const IndexQuery = graphql`
    query {
        all: allAnantCassandralinks(limit: 20) {
            edges {
                node {
                    title
                    alternative_id
                    preview_picture
                    domain_name
                }
            }
        }
        videos: allAnantCassandralinks(
            filter: { domain_name: { eq: "www.youtube.com"} }
            limit: 5
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
        github: allAnantCassandralinks(
            filter: { domain_name: { eq: "github.com"} }
            limit: 5
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
