import React  from 'react'
import './App.css'
import UseGet from './useget'
import usePost from './usePost'
import axios from 'axios'

// the different among post and get, that post he create one key in firebase.
//practice firebase of way firebase api
//axios
//.get('https://practice-more-api-default-rtdb.firebaseio.com/Felipe.json')
//.then(res => {
 // console.log(res)
//})

const Url = 'https://practice-more-api-default-rtdb.firebaseio.com/movimentacoes/2022-01.json'

function App() {
  const  data = UseGet (Url)
 
   
 //create one function to save post
 const Savepost = ()=> {
  post({value:'10', descricao:'ola'})
 }

  return (
    <div>
    <h1> My money practice more about axios and Api and remeber practice more always!!!</h1>
     {JSON.stringify(data)}
     {data.loading && <p>Loading...</p>}
     <br/>
     

     <button onClick={Savepost} >Salvar</button>
     
    </div>
);
}

export default App;
