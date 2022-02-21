import './App.css';

import React, {  useState  }  from 'react'
import { NavBar } from './components/NavBar.js';
import News from './components/News.js';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export const App =()=> {
  const pgSize=6;
  const apikey=process.env.REACT_APP_API_KEY;
  // const apikey=process.env.REACT_APP_API_KEY2;
  const [progress,setProgg]=useState(0)
  const setProgress=(progress)=>{
    setProgg(progress);
  }
  
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        
        />
        
          <NavBar/>
              
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key="generl" pageSize={pgSize} country={"in"} category={"general"} />}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pgSize} country={"in"} category={"business"} />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pgSize} country={"in"} category={"entertainment"} />}></Route>
            <Route exact path="/general" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pgSize} country={"in"} category={"general"} />}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={pgSize} country={"in"} category={"health"} />}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={pgSize} country={"in"} category={"science"} />}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pgSize} country={"in"} category={"sports"} />}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pgSize} country={"in"} category={"technology"} />}></Route>
        </Routes>
        </Router>
      </div>
    )

}

export default App



