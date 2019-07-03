import React from 'react'
import _ from 'lodash'

import './style/featured-articles.scss'

function FeaturedArticles({ wallabagList }) {
    return (
        <div className="featured-article-section">
            {_.map(wallabagList, (value, key) => (
                <div key={key}>
                    {value.title}
                    {/* <img src={value.preview_picture} width="150" /> */}
                </div>
            ))}
        </div>
    )
}

export default FeaturedArticles
