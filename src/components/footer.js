import React from 'react'
import { Link } from 'gatsby'

import './style/footer.scss'

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer-logo">
                    <img src="/images/footer-logo.png" alt="anant.us" />
                    <a href="https://anant.us" target="_blak" rel="noopener noreferrer">
                        Project By anant.us
                    </a>
                </div>
                <div className="footer-navbar">
                    <ul>
                        <li>
                            <Link to="/">Resources</Link>
                        </li>
                        <li>
                            <Link to="/">News Feeds</Link>
                        </li>
                        <li>
                            <Link to="/">Contribute</Link>
                        </li>
                        <li>
                            <Link to="/">About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
