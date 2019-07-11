import React from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'
import { User } from 'react-feather'
import moment from 'moment'

import './style/news-feed-card.scss'

function NewsFeeds({ newsFeeds }) {
    return (
        <div className="newsfeed-section">
            <div className="heading">News Feeds</div>
            {_.map(newsFeeds, (value, key) => (
                <div key={key} className="news-feed-card">
                    <div className="card-head">
                        <div className="title">
                            <Link to={`/${value.id}`}>{value.title.slice(0, 70)}</Link>
                        </div>
                        <div className="published-date">{moment(value.pubDate).fromNow()}</div>
                    </div>
                </div>
            ))}
            <div className="view-more">
                <Link to="/">View More News Feeds</Link>
            </div>
        </div>
    )
}

export default NewsFeeds
