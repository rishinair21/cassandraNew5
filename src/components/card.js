import React, {Component} from 'react'
import { Link } from "gatsby";
import _ from "lodash";
import './card.css'

export class Card extends Component {

	render(){
		const data = this.props.obj
		return(			
			<div className="card">
				{_.map(data, (value, key) => {
					return (
						<div className="card-inner" key={key}>
							<div className="card-image" style={{backgroundImage: `url(${value.node.preview_picture})`}}></div>
							<small className="domain">{value.node.domain_name}</small>
							<Link to={`/post/${value.node.alternative_id}`}>
								<div className="title">{value.node.title}</div>
							</Link>
						</div>
					);
				})}
            </div>
		)
	}
}

export class YTCard extends Component {

	render(){
		const data = this.props.obj
		return(			
			<div className="yt-card">
				{_.map(data, (value, key) => {
					return (
						<div className="yt-card-inner" key={key}>
							<div className="yt-card-image" style={{backgroundImage: `url(${value.node.preview_picture})`}}>
								<div className="yt-layer">
									<div className="yt-play-btn"><div className="btn"></div></div>
								</div>
							</div>
							<div className="yt-meta">
								<small className="domain">{value.node.domain_name}</small>
								<Link to={`/post/${value.node.alternative_id}`}>
									<div className="title">{value.node.title}</div>
								</Link>
							</div>
						</div>
					);
				})}
            </div>
		)
	}
}


export class GHCard extends Component {

	render(){
		const data = this.props.obj
		return(			
			<div className="yt-card">
				{_.map(data, (value, key) => {
					return (
						<div className="yt-card-inner" key={key}>
							<div className="yt-card-image" style={{backgroundImage: `url(${value.node.preview_picture})`}}>
							</div>
							<div className="yt-meta">
								<small className="domain">{value.node.domain_name}</small>
								<Link to={`/post/${value.node.alternative_id}`}>
									<div className="title">{value.node.title}</div>
								</Link>
							</div>
						</div>
					);
				})}
            </div>
		)
	}
}