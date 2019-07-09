import React from 'react'
import _ from 'lodash'
import { User } from 'react-feather'

import './style/featured-open-source.scss'

function FeaturedRepo({ openSourceList }) {
    return (
        <div className="featured-repo-section">
            <div className="heading">OSS Projects</div>
            {_.map(openSourceList, (value, key) => (
                <div key={key} className="featured-repo-card">
                    <div className="card-head">
                        <img src={value.preview_picture} alt={value.title} />
                        <div className="title">
                            <a href={value.url} target="_blank" rel="noopener noreferrer">
                                {value.title.split('/')[1]}
                            </a>
                            <span>
                                <User size="12" /> {value.title.split('/')[0]}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FeaturedRepo
