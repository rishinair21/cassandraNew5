import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import { FirstColumn, SecondColumn, ThirdColumn } from "../components/card";

class IndexPage extends React.Component {
    render() {
        const data = this.props.data.all.edges;
        const videos = this.props.data.videos.edges;
        const github = this.props.data.github.edges;
        const featured = this.props.data.featured.edges
        return (
            <Layout>
                <div>
                    <div className="home-structure">
                        <div className="header-heading">It's all about<br/>Cassandra History</div>
                        {/* <FaturedGrid obj={featured}/> */}

                        <div className="three-cl">
                            <div className="card card1">
                                <FirstColumn obj={videos}/>  
                            </div>
                            <div className="card card2">
                                <SecondColumn obj={github}/>
                            </div>
                            <div className="card card3">
                                <ThirdColumn obj={data}/> 
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
        featured: allAnantCassandralinks(limit: 3) {
            edges {
                node {
                    title
                    alternative_id
                    preview_picture
                    domain_name
                }
            }
        }
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
            limit: 20
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
            limit: 20
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
