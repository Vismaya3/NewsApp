import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,url} =this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width:"18rem;"}}>
                    <img src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/106192376-1571639765203gettyimages-1090745214.jpeg?v=1603711328&w=1920&h=1080":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={url} target="blank" className="btn btn-sm btn-primary">Know more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem