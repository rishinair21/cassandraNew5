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
                    <a href="#" target="_blank">Cassandra</a>
                    <a href="#" target="_blank">Docker</a>
                    <a href="#" target="_blank">Elasticsearch</a>
                    <a href="#" target="_blank">Architecture</a>
                    <a href="#" target="_blank">api</a>
                    <a href="#" target="_blank">videos</a>
                </div>
            </div>
)

export default Header
