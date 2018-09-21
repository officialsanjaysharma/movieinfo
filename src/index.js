import React from "react";
import AppBar from './components/Header'
// import Data from './components/apiFetch'
import FamousMovies from './components/popularMovies'
import ReactDOM from "react-dom";



// console.log(Data.data)
const Index = () => {
    return (<div>
      <AppBar/>
      <FamousMovies/>
     
          </div>);
   
};

ReactDOM.render(<Index/>,document.getElementById("index"));