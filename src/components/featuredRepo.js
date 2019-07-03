import React from 'react'
import _ from 'lodash'

import './style/featured-open-source.scss'

function FeaturedRepo({ openSourceList }) {
    return (
        <div className="featured-repo-section">
            {_.map(openSourceList, (value, key) => (
                <div key={key}>{value.title}</div>
            ))}
        </div>
    )
}

export default FeaturedRepo
