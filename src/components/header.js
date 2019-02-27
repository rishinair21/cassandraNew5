import React from 'react'
import { Link } from 'gatsby'
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="nav">
                <div className="nav-header">
                <div className="nav-title">
                <Link
                    to="/"
                    style={{
                        color: '#070707',
                        textDecoration: 'none',
                        fontWeight: 800
                    }}
                    >
                    {siteTitle}
                    </Link>
                </div>
                </div>
                <div className="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <input type="checkbox" id="nav-check"/>
                <div className="nav-links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">Cassandra</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">Docker</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">Elasticsearch</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">Architecture</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">api</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">videos</a>
                </div>
            </div>
)

export default Header
