import React  from 'react'
import './App.css'
import Header from './elements/Header'
import Month from './Meses'
import AddingMo from './Adding.mon' 

// THIS REST turned about init
import REST from './rest'
const BaseUrl ='https://build-api-8a54e-default-rtdb.firebaseio.com/'

const {UseGet,UsePost, useDelete} = REST(BaseUrl)


function App() {
                  
  const  data = UseGet ('meses')

//const [postData, post] =  UsePost('movimentacao/2022-01')
//const [Deletdata, remove] = useDelete()
// i have delete way whole


 //const Doremove = () => {
  // i have delete way whole
   //remove('movimentacao/2022-01/-MuhE8AHOBl46uBwFRHX')
// }

  //const Savenovo = () =>{
    //post({ valor: 10 , descricao: 'olá'})
 // }

  return (
    <div>
    <Header/>
    <div className='container'> 
   
    <AddingMo/>
    <Month/>
    
   </div>
    </div>
);
  }

export default App;
