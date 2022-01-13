import React, {useState,useEffect} from 'react'
import './App.css'
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
// try it flag loading

const [loading , setloading] = useState(true)
const [data, setdata] = useState({})
//remember i have uses useEffect to caught in the api's because without inside out i dont getting caught

useEffect(() => {
   axios
  .get(Url)
  .then(res => {
     setdata(res.data)
     setloading(false)
  })
}, [])
if(loading){
  return <p>loading...</p>
}


  return (
    <div>
    <h1> My money practice more about axios and Api and remeber practice more always!!!</h1>
     {JSON.stringify(data)}
     {loading}
    </div>
);
}

export default App;
