import React from 'react'
import data from "./Components/back/Data/Data"
import Header from './Components/front/header/Header';
import {
  BrowserRouter as Router,
 
} from "react-router-dom";
import Routes from './Components/front/routes/Routes';



const App = () => {
  const {productItem} = data;
  return (
   <div>
      <Router>
        <Header/>
        <Routes productItem={productItem}/>
      </Router>
      
    </div>
  )
}

export default App
