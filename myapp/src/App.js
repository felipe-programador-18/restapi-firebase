import React  from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css' 
import Header from './elements/Header'
import AddingMo from '../../myapp/src/pages/Home/Adding.mon'
import Month from './pages/Home/Meses'
import Movimentacoes from './pages/Movimentacoes'

// THIS REST turned about init
//import REST from './rest'
//const BaseUrl ='https://build-api-8a54e-default-rtdb.firebaseio.com/'

//const {UseGet,UsePost, useDelete} = REST(BaseUrl)
const Home = () =>{
  return(
    <div className='container'>
    <AddingMo/>
    <Month/>
    </div>
  )
}

//const Movimentacoes = () =>{
  //return <h1> Movimentacões</h1>
//}



function App() {
                  
  return (
    <React.Fragment>

    <Router>
    <Header/>
        <Route path='/'  exact component={Home}/>
        <Route path='/movimentacoes/:data' exact component={Movimentacoes}   />
        
     </Router>
  </React.Fragment>
);
  }

export default App;
