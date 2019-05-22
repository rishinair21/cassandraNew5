import React from 'react'
import { Link } from 'gatsby'
import './main.css'

const Header = ({ siteTitle }) => (
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://anant.us" target="_blank">
          <img src="https://www.anant.us/Design/Themes/Theme.Tau/images/anant-logo-white-112.png" alt="logo" />
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item is-size-3">{siteTitle}</div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
          <div class="buttons">
                  <a class="button is-dark has-text-white is-size-5" href="https://mailchi.mp/03a1311e4965/cassandranetwork" target="_blank">Subscribe</a>
                </div>
          </div>
        </div>
      </div>
</nav>
)

export default Header
