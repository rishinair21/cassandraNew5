import React from "react";
import { graphql, Link } from "gatsby";
import _ from "lodash";

import Layout from "../components/layout";

class IndexPage extends React.Component {
    render() {
        const data = this.props.data.allAnantCassandralinks.edges;
        console.log(data);
        return (
            <Layout>
                <div>
                    {_.map(data, (value, key) => {
                        return (
                            <div key={key}>
                                <Link to={`/post/${value.node.alternative_id}`}>
                                    {value.node.title}
                                </Link>
                            </div>
                        );
                    })}
                    <br />
                    <Link class="flex items-center" to="/page/2">
                        <small>Next Page</small>
                    </Link>
                </div>
            </Layout>
        );
    }
}

export default IndexPage;

export const IndexQuery = graphql`
    query {
        allAnantCassandralinks(limit: 20) {
            edges {
                node {
                    title
                    alternative_id
                }
            }
        }
    }
`;
