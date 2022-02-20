import './App.css';

import React, { Component } from 'react'
import { NavBar } from './components/NavBar.js';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export class App extends Component {
  pgSize=21;
  render() {
    return (
      <div>
        <Router>
          <NavBar/>
              
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={this.pgSize} country={"in"} category={"general"} />}></Route>
            <Route exact path="/business" element={<News key="business" pageSize={this.pgSize} country={"in"} category={"business"} />}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pgSize} country={"in"} category={"entertainment"} />}></Route>
            <Route exact path="/general" element={<News key="general" pageSize={this.pgSize} country={"in"} category={"general"} />}></Route>
            <Route exact path="/health" element={<News key="health" pageSize={this.pgSize} country={"in"} category={"health"} />}></Route>
            <Route exact path="/science" element={<News key="science" pageSize={this.pgSize} country={"in"} category={"science"} />}></Route>
            <Route exact path="/sports" element={<News key="sports" pageSize={this.pgSize} country={"in"} category={"sports"} />}></Route>
            <Route exact path="/technology" element={<News key="technology" pageSize={this.pgSize} country={"in"} category={"technology"} />}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}

export default App



