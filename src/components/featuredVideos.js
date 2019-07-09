import React from 'react'
import _ from 'lodash'

import './style/featured-videos.scss'

function FeaturedVideos({ videoList }) {
    return (
        <div className="featured-video-section">
            <div className="heading">Talks</div>
            <div className="video-card">
                {_.map(videoList, (value, key) => (
                    <div className="ca-card" key={key}>
                        <div className="card-image" style={{ backgroundImage: `url(${value.preview_picture})` }}>
                            <div className="image-overlay">
                                <div className="play-btn">
                                    <img src="/images/youtube-btn.png" width="50" alt="play button" />
                                </div>
                            </div>
                        </div>
                        <div className="card-title">{value.title}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedVideos
