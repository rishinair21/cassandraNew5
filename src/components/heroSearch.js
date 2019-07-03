import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import { Search } from 'react-feather'

import './style/hero-search.scss'

function HeroSearch() {
    return (
        <div className="hero-search">
            <div className="hero-search-inner">
                <div className="title">Knowledge Base</div>
                <div className="sub-title">Discover the best resources related with Cassandra</div>
                <InputGroup className="mb-3 search-input" style={{ maxWidth: '500px', margin: '0 auto' }}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                            <Search size="16" />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Username" aria-describedby="basic-addon1" />
                </InputGroup>
                <div className="project-by">
                    <a href="https://anant.us" target="_blank">
                        Project by anant.us
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HeroSearch
