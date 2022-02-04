import React  from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css' 
import Header from './elements/Header'
import Month from './Meses'
import AddingMo from './Adding.mon' 

// THIS REST turned about init
//import REST from './rest'
//const BaseUrl ='https://build-api-8a54e-default-rtdb.firebaseio.com/'

//const {UseGet,UsePost, useDelete} = REST(BaseUrl)


function App() {
                  
  return (
    <Router>
    <div>
    <Header/>
    <div className='container'> 
   
    <AddingMo/>
    <Month/>
    
   </div>
    </div>
    </Router>
);
  }

export default App;
