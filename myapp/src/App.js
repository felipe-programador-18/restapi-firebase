import React  from 'react'
import {BrowserRouter as Router,Routes , Route} from 'react-router-dom'
import './App.css' 
import Month from './Meses'
import AddingMo from './Adding.mon' 
import Outro from './elements/Header'

// THIS REST turned about init
//import REST from './rest'
//const BaseUrl ='https://build-api-8a54e-default-rtdb.firebaseio.com/'

//const {UseGet,UsePost, useDelete} = REST(BaseUrl)
const Home =() =>{
  return  <div className='container'> 
    <AddingMo/>
    <Month/>
    
   </div>
}

const Together= () =>{
  return <h1><Outro/> </h1>
}

function App() {
                  
  return (
    <Router>
      <Routes>
      <Route path='/elements/Header' exact element= {<Together/>} />
        <Route path="/" exact element={<Home />} />
     </Routes>
  </Router>
);
  }

export default App;
