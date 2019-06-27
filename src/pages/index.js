import React from 'react'
import { Container, Alert, Col } from 'react-bootstrap'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
    <Layout>
        <SEO title="Cassandra Links | Anant Corporation Project" />
        <Container>
            <Alert variant="primary">This is just starting.</Alert>
        </Container>
    </Layout>
)

export default IndexPage
