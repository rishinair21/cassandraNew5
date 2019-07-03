import React from 'react'
import _ from 'lodash'

import './style/featured-videos.scss'

function FeaturedVideos({ videoList }) {
    return (
        <div className="featured-video-section">
            {_.map(videoList, (value, key) => (
                <div key={key}>{value.title}</div>
            ))}
        </div>
    )
}

export default FeaturedVideos
