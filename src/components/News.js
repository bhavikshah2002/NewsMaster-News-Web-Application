import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
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
        this.props.setProgress(0)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(30)
        this.setState({loading:true});
        this.props.setProgress(50)
        let data = await fetch(url);
        this.props.setProgress(70)
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults,loading:false})
        this.props.setProgress(100)
    }
    fetchMoreData = async () =>{
            this.setState({page: (this.state.page + 1)})
            this.props.setProgress(0)
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            this.props.setProgress(30)
            let data = await fetch(url);
            this.props.setProgress(50)
            let parsedData = await data.json()
            this.props.setProgress(70)
            this.setState({articles: this.state.articles.concat(parsedData.articles),totalResults:parsedData.totalResults,loading:false})
            this.props.setProgress(100)
    };
    
        
  render() {
      
    return (
        <>
            <h1 className='m-2 text-center'>NewsMaster - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
            
            <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
            <div className="row">
                {!(this.state.loading) && this.state.articles.map((element)=>{
                    
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
}

export default News
