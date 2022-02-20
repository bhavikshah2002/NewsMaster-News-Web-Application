import React, { Component } from 'react'
import load from "../images/load.PNG"
export class NewsItem extends Component {
  render() {
      let {title,despription,imgURL,newsURL,author,date,source}=this.props;
    return (
      <div className='my-3'>
        

        <div className="card" >
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-success" style={{left:"90%",zIndex:1,fontWeight:500}}> {source} </span>
            <img src={imgURL?imgURL:load} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title} </h5>
                <p className="card-text">{despription}</p>
                <a href={newsURL} rel="noopener noreferrer" target="_blank" className="btn  btn-dark container">Read More</a>
                <p className="card-text text-center"><small className="text-muted ">By {(!author)?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
