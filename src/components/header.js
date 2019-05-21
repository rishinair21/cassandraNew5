import React from 'react'
import { Link } from 'gatsby'
import './main.css'

const Header = ({ siteTitle }) => (
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://anant.us">
          <img src="https://www.anant.us/Design/Themes/Theme.Tau/images/anant-logo-white-112.png" width="112" height="28" alt="logo" />
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item is-size-3">
                <Link
                    to="/"
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                        fontWeight: 400
                    }}
                    >
                    {siteTitle}
                </Link>
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-light">
                <Link to="/awesome">
                    .Markdown
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
</nav>
)

export default Header
