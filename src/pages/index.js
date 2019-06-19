import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import { FirstColumn, SecondColumn, ThirdColumn } from "../components/card";
import './main.css';
/* global graphql */

class IndexPage extends React.Component {
    render() {
        const data = this.props.data.all.edges;
        const videos = this.props.data.videos.edges;
        const github = this.props.data.github.edges;
        const ttrss = this.props.data.ttrss.edges;
        return (
            <Layout>
                <div className="typewriter-p">
                    <div class="line-1 anim-typewriter">Knowledge Base</div>
                </div>

                <section class="section">
                <div>
                    <div className="home-structure">
                        {/* <FaturedGrid obj={featured}/> */}
                        <div className="three-cl">
                            <div className="card card1">
                                <nav class="panel">
                                    <p class="panel-heading has-text-centered">
                                        Videos
                                    </p>
                                    <FirstColumn obj={videos}/>
                                </nav>
                            </div>
                            <div className="card card2">
                                <nav class="panel is-dark">
                                    <p class="panel-heading has-text-centered">
                                        Blogs
                                    </p>
                                    <ThirdColumn obj={ttrss}/>
                                </nav>
                            </div>
                            <div className="card card3">
                                <nav class="panel">
                                    <p class="panel-heading has-text-centered">
                                        Github
                                    </p>
                                    <SecondColumn obj={github}/>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="view-more">
                        <Link to="/page/1">View More</Link>
                    </div>
                </div>
                </section>
            </Layout>
        );
    }
}

export default IndexPage;

export const IndexQuery = graphql`
    query {
        featured: allAnantCassandralinks(
            filter: { domain_name: { eq: "www.youtube.com"} }
            limit: 10
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
        ttrss: allFeedTtrs(limit: 10) {
            edges {
                node {
                    title
                    link
                    id
                    pubDate
                    author
                    content
                }
            }
        }
        all: allAnantCassandralinks(limit: 10) {
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
        videos: allAnantCassandralinks(
            filter: { domain_name: { eq: "www.youtube.com"} }
            limit: 10
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
        github: allAnantCassandralinks(
            filter: { domain_name: { eq: "github.com"} }
            limit: 10
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