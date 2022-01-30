import React  from 'react'
import './App.css'
import useDelete from './useDelete'
//import UseGet from './useget'
import UsePost from './UsePost'

// THIS REST turned about init
import REST from './rest'
const BaseUrl ='https://build-api-8a54e-default-rtdb.firebaseio.com/'

const {UseGet} = REST(BaseUrl)

const Url = 'https://build-api-8a54e-default-rtdb.firebaseio.com/movimentacao/2022-01/despesa.json'

function App() {
  const  data = UseGet ('movimentacao/2022-01')

const [postData, post] =  UsePost(Url)
const [Deletdata, remove] = useDelete()
// i have delete way whole


 const Doremove = () => {
  // i have delete way whole
   remove('https://build-api-8a54e-default-rtdb.firebaseio.com/movimentacao/2022-01/despesa.json/-Muh4Yr2PlJiZWVmSNpi')
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
