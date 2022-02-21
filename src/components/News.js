import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types'


export const News = (props)=>{
    // articles=[];
    const[articles,setArticles]=useState([]);
    const[page,setPage]=useState(1);
    const[loading,setLoading]=useState(false);
    const[totalResults,setTotalResults]=useState(0);
    const capitalizeFirstLetter=(str) =>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
   
        
    
    
    document.title =`${capitalizeFirstLetter(props.category)}-NewsMaster`;
    useEffect(async ()=>{
        props.setProgress(0)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        props.setProgress(30)
        setLoading(true);
        
        props.setProgress(50);
        let data = await fetch(url);
        props.setProgress(70)
        let parsedData = await data.json();
        setPage(page+1);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        
        props.setProgress(100)
        }
        // eslint-disable-next-line
    ,[]);

    const fetchMoreData = async () =>{
         setPage((page + 1));
        
        props.setProgress(0)
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
            props.setProgress(30)
            let data = await fetch(url);
            props.setProgress(50)
            let parsedData = await data.json()
            props.setProgress(70)
            setArticles(articles.concat(parsedData.articles));
            setTotalResults(parsedData.totalResults);
            setLoading(false);
            
            props.setProgress(100)
    };
    
    
    
        
    return (
        <>
        <div className="container" style={{marginTop: "90px"}}>
            <h1 className='m-2 text-center' >NewsMaster - Top {capitalizeFirstLetter(props.category)} Headlines</h1>

        </div>
            
            <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
          >
          <div className="container">
            <div className="row">
                {!(loading) && articles.map((element)=>{
                    
                    return <div className="col-md-4"key={element.url}>
                        <NewsItem title={element.title} despription={element.description} imgURL={element.urlToImage} newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>
                })}
            </div>
        </div>
        </InfiniteScroll>
            
        </>
    )

}
News.defaultProps={
    country: "in",
    pageSize: "6",
    category:"general"
}
News.propTypes={
    country: PropTypes.string,
    category: PropTypes.string
}

export default News
