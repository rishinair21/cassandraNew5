import React from 'react'
import _ from 'lodash'

import './style/featured-articles.scss'

function FeaturedArticles({ wallabagList }) {
    return (
        <div className="featured-article-section">
            {_.map(wallabagList, (value, key) => (
                <>
                    <small>{value.tags[0].label}</small>
                    <div key={key} className="article-card">
                        <div className="title">{value.title}</div>
                        <div
                            className="card-image"
                            style={{
                                backgroundImage: `url(${
                                    value.preview_picture !== null
                                        ? value.preview_picture
                                        : `https://screenshot-v2.now.sh/${value.url}`
                                })`,
                            }}
                        ></div>
                    </div>
                </>
            ))}
        </div>
    )
}

export default FeaturedArticles
