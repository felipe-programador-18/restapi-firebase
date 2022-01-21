import React  from 'react'
import './App.css'
import UseGet from './useget'
import UsePost from './usePost'

const Url = 'https://practice-more-api-default-rtdb.firebaseio.com/movimentacoes/2022-01.json'

function App() {
  const  data = UseGet (Url)
   
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
     
    </div>
);
  }

export default App;
