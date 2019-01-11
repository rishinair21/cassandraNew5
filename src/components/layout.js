import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
          style={{
            backgroundColor: '#f6f5f2'
          }}
        >
        <Helmet
          title="Cassandra.Link | Anant Corporation"
          meta={[
            { name: 'description', content: 'Cassandra.Link | Anant Corporation' },
            { name: 'keywords', content: 'cassandra, links' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle="Cassandra.Link" />
        <div
          style={{
            margin: '0 auto',
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
