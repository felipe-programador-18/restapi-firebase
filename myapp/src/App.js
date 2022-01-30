import React  from 'react'
import './App.css'

// THIS REST turned about init
import REST from './rest'
const BaseUrl ='https://build-api-8a54e-default-rtdb.firebaseio.com/'

const {UseGet,UsePost, useDelete} = REST(BaseUrl)


function App() {
  const  data = UseGet ('movimentacao/2022-01')

const [postData, post] =  UsePost('movimentacao/2022-01')
const [Deletdata, remove] = useDelete()
// i have delete way whole


 const Doremove = () => {
  // i have delete way whole
   remove('movimentacao/2022-01/-MuhE8AHOBl46uBwFRHX')
 }

  const Savenovo = () =>{
    post({ valor: 10 , descricao: 'olá'})
  }

  return (
    <div>
    <h1> My money practice more about axios and Api and remeber practice more always!!!</h1>
     {JSON.stringify(data)}
     {data.loading && <p>Loading...</p>}
     <br/>
    
     <button onClick={Savenovo} >Salvar</button>

     <pre>
     {JSON.stringify(postData)}      
     </pre>
     
     <button onClick={Doremove}>Delete</button>
     {JSON.stringify(Deletdata)} 
    </div>
);
  }

export default App;
