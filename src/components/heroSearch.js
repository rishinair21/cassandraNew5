import React from 'react'

import './style/hero-search.scss'

function HeroSearch() {
    return (
        <div className="hero-search">
            <div className="hero-search-inner">
                <div className="title">Knowledge Base</div>
                <div className="sub-title">Discover the best resources related with Cassandra</div>
                <input type="text" placeholder="" />
                <div>Project by anant.us</div>
            </div>
        </div>
    )
}

export default HeroSearch
