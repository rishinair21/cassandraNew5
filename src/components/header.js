import React from 'react'
import { Link } from 'gatsby'
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="header">
    <div
      style={{
        margin: '0 auto',
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#070707',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h2>
    </div>
  </div>
)

export default Header
