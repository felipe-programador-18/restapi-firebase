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
 
    <nav className='navbar navbar-light bg-primary'>
    <a className='navbar-brand '> My Money Api Rest</a>
    </nav>
    <h1>Project my monet, working firebase with restapi and React!!!</h1>
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
