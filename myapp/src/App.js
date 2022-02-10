import React  from 'react'
import {BrowserRouter as Router,Routes , Route} from 'react-router-dom'
import './App.css' 
import Header from './elements/Header'
import Home from './pages/Home'
import Movimentacoes from './pages/Movimentacoes'

// THIS REST turned about init
//import REST from './rest'
//const BaseUrl ='https://build-api-8a54e-default-rtdb.firebaseio.com/'

//const {UseGet,UsePost, useDelete} = REST(BaseUrl)


const Together= () =>{
  return <h1><Header/> </h1>
       
}


function App() {
                  
  return (
    <React.Fragment>
    <Header/>
    <Router>
      <Routes>
         <Route path="/" exact element={<Home />} />
         <Route path='/together' exact element= {<Together />} />
         <Route path ='/movimentacoes/:data' exact element= {<Movimentacoes/>} />
     </Routes>
  </Router>
  </React.Fragment>
);
  }

export default App;
