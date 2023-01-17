import React from 'react'
import load from "../images/load.PNG"
const NewsItem=(props)=>  {

      let {title,despription,imgURL,newsURL,author,date,source}=props;
    return (
      <div className='my-3'>
        

        <div className="card" >
          <div className="d-flex justify-content-end position-absolute top-90 right=10"style={{zIndex:1,fontWeight:500}}>
            <span className=" badge rounded-pill bg-success" > {source} </span>

          </div>
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

export default NewsItem
