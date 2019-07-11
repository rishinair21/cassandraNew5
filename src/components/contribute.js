import React from 'react'
import { Link } from 'gatsby'
import { Form, Button } from 'react-bootstrap'

import './style/contribute.scss'

function Contributor() {
    return (
        <div className="contribute-box">
            <div className="title">Contributor</div>
            <div className="sub-title">It's a open source project. Let's share your knowledge with the community</div>
            <div className="btn-01">
                <Link to="/">
                    <span>Share</span>
                </Link>
            </div>
        </div>
    )
}

export default Contributor
