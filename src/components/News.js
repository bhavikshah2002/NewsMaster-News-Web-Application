import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps={
        country: "in",
        pageSize: "6",
        category:"general"
    }
    static propTypes={
        country: PropTypes.string,
        category: PropTypes.string
    }
    articles=[];
    capitalizeFirstLetter=(str) =>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    constructor(props){
        super(props)
        this.state = {
            articles: [],
            loading:false,
            page: 1   
        }
        document.title =`${this.capitalizeFirstLetter(this.props.category)}-NewsMaster`;
    }
    async componentDidMount(){
        
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ef2b026a45df422384b458bdd2faf7b2&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults,loading:false})
    }
    
    handleNextClick = async ()=>{    
        if ( !(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ef2b026a45df422384b458bdd2faf7b2&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedData = await data.json()
            
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading:false})
        }
    }
        handlePrevClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ef2b026a45df422384b458bdd2faf7b2&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading:false})
        }
        
  render() {
    return (
        <div className='container '>
            <h1 className='m-2 text-center'>NewsMaster - Top Headlines</h1>
            {this.state.loading && <Spinner/>}
            <div className="row ">
                {!(this.state.loading) && this.state.articles.map((element)=>{

                    return <div className="col-md-4"key={element.url}>
                        <NewsItem title={element.title} despription={element.description} imgURL={element.urlToImage} newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>
                })}
            </div>

            <div className="container d-flex justify-content-between ">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
            </div>
        </div>
    )
  }
}

export default News
