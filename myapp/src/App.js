import React  from 'react'
import './App.css'
import useDelete from './useDelete'
import UseGet from './useget'
import UsePost from './UsePost'

const Url = 'https://practice-more-api-default-rtdb.firebaseio.com/movimentacoes/2022-01.json'

function App() {
  const  data = UseGet (Url)

const [postData, post] =  UsePost(Url)
const [Deletdata, remove] = useDelete()
// i have delete way whole


 const Doremove = () => {
  // i have delete way whole
   remove('https://practice-more-api-default-rtdb.firebaseio.com/movimentacoes/2022-01/-MtyDNy1oTjERnI5lGLQ.json')
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
