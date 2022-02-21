import './App.css';

import React, { Component  }  from 'react'
import { NavBar } from './components/NavBar.js';
import News from './components/News.js';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export class App extends Component {
  pgSize=6;
  apikey=process.env.REACT_APP_API_KEY;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress});
  }
  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        
        />
        
          <NavBar/>
              
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="generl" pageSize={this.pgSize} country={"in"} category={"general"} />}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={this.pgSize} country={"in"} category={"business"} />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={this.pgSize} country={"in"} category={"entertainment"} />}></Route>
            <Route exact path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={this.pgSize} country={"in"} category={"general"} />}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={this.pgSize} country={"in"} category={"health"} />}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={this.pgSize} country={"in"} category={"science"} />}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={this.pgSize} country={"in"} category={"sports"} />}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={this.pgSize} country={"in"} category={"technology"} />}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}

export default App



