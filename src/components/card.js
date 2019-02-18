import React, {Component} from 'react'
import { Link } from "gatsby";
import _ from "lodash";
import './card.css'

export class FirstColumn extends Component {
	render() {
		const data = this.props.obj
		return (
			<div className="news-grid">
				{_.map(data, (value, key)=>{
					return (
						<div key={key} className={'news-list news'+(key+1)}>
							<div className="image">
								<img src={value.node.preview_picture} alt={value.node.title} />
							</div>
							<div className="news-list-meta">
								<Link to={`/post/${value.node.alternative_id}`}>
									<div className="title">{value.node.title}</div>
								</Link>
								{/* <div className="domain">{value.node.domain_name}</div> */}
							</div>
						</div>
					)
				})}
			</div>
		)
	}
}

export class SecondColumn extends Component {
	render() {
		const data = this.props.obj
		return (
			<div className="second-grid">
				{_.map(data, (value, key)=>{
					return (
						<div key={key} className={'second-list second'+(key+1)}>
							<div className="image" style={{backgroundImage: `url(${value.node.preview_picture})`}}>
							</div>
							<div className="card-tag">{value.node.tags[0].label}</div>
							<div className="second-list-meta">
								<Link to={`/post/${value.node.alternative_id}`}>
									<div className="title">{value.node.title}</div>
								</Link>
								<div className="domain">{value.node.domain_name}</div>
							</div>
						</div>
					)
				})}
			</div>
		)
	}
}

export class ThirdColumn extends Component {
	render() {
		const data = this.props.obj
		return (
			<div className="second-grid">
				{_.map(data, (value, key)=>{
					return (
						<div key={key} className={'second-list second'+(key+1)}>
							<div className="image" style={{backgroundImage: `url(${value.node.preview_picture})`}}>
							</div>
							<div className="card-tag-right">{value.node.tags[0].label}</div>
							<div className="second-list-meta third-meta-box">
								<Link to={`/post/${value.node.alternative_id}`}>
									<div className="title">{value.node.title}</div>
								</Link>
								<div className="domain">{value.node.domain_name}</div>
							</div>
						</div>
					)
				})}
			</div>
		)
	}
}

export class FaturedGrid extends Component {
	render() {
		const data = this.props.obj
		console.log(data)
		return (
			<div className="featured-grid">
				{_.map(data, (value, key)=>{
					return (
						<div key={key} className={key === 0 ? 'hero' : 'sub-hero'+(key)}>
							<div className="card-box">
								<div className="card-inner" style={{backgroundImage: `url(${value.node.preview_picture})`}}>
									<div className="card-title">
										{key+1} {value.node.title}
									</div>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		)
	}
}

export class Card extends Component {

	render(){
		const data = this.props.obj
		return(			
			<div className="card second-grid all-posts">
				{_.map(data, (value, key)=>{
					return (
						<div key={key} className={'second-list second'+(key+1)}>
							<div className="image" style={{backgroundImage: `url(${value.node.preview_picture})`}}>
							</div>
							<div className="card-tag">{value.node.tags[0].label}</div>
							<div className="second-list-meta">
								<Link to={`/post/${value.node.alternative_id}`}>
									<div className="title">{value.node.title}</div>
								</Link>
								<div className="domain">{value.node.domain_name}</div>
							</div>
						</div>
					)
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