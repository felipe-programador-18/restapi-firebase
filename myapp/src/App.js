import React  from 'react'
import {BrowserRouter as Router,Routes , Route} from 'react-router-dom'
import './App.css' 
import Header from './elements/Header'
import Month from './Meses'
import AddingMo from './Adding.mon' 

// THIS REST turned about init
//import REST from './rest'
//const BaseUrl ='https://build-api-8a54e-default-rtdb.firebaseio.com/'

//const {UseGet,UsePost, useDelete} = REST(BaseUrl)
const Home =  () =>{
  
  return  <div className='container'> 
   
    <AddingMo/>
    <Month/>
    
   </div>
}

const Together  = () =>{
  return <h1><Header/></h1>
}

function App() {
                  
  return (
    <Router>
    <Routes>
        <Header/>
        <Route path='/elements/Header' exact element= {<Together/>} />
        <Route path="/" exact element={<Home />} />
         
    </Routes>
  </Router>
);
  }

export default App;
