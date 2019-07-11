import React from 'react'
import { graphql } from 'gatsby'
import { Container, Alert, Row, Col } from 'react-bootstrap'

import Layout from '../components/layout'
import SEO from '../components/seo'
import FeaturedArticles from '../components/featuredArticles'
import NewsLetterBox from '../components/newsletterBox'

function ResourcesSinglePage({ data }) {
    // const wallabagList = data.wallabagList.nodes
    return (
        <Layout>
            <SEO title="Cassandra Links | Anant Corporation Project" />
            <Container>
                <Row>
                    <Col>Helllo</Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default ResourcesSinglePage

// export const pageQuery = graphql`
//     query ResourcesQuery($skip: Int, $limit: Int) {
//         wallabagList: allCassandraLinks(
//             filter: { domain_name: { ne: "github.com" }, content: { ne: null } }
//             sort: { fields: created_at, order: DESC }
//             limit: 18
//             skip: $skip
//             limit: $limit
//         ) {
//             nodes {
//                 is_archived
//                 is_starred
//                 user_name
//                 user_email
//                 user_id
//                 is_public
//                 alternative_id
//                 uid
//                 title
//                 url
//                 created_at
//                 updated_at
//                 published_at
//                 mimetype
//                 language
//                 reading_time
//                 domain_name
//                 preview_picture
//                 tags {
//                     label
//                     slug
//                     alternative_id
//                 }
//             }
//         }
//     }
// `
