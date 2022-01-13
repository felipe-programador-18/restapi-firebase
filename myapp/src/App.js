import React, {useState,useEffect, useReducer} from 'react'
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

const reducer = (state, action) => {
 // I go handling my state!!
 // how use reducer ?
 if(action.type === 'REQUEST'){
    return {
      ...state ,
      laoding : true
    }
 }
 if(action.type ==='SUCCESS'){
   return { 
     ...state ,
     loading: false ,
     data: action.data
   }
 }

  return state
}

function App() {
// try it flag loading
// i can seeing this data have conexitons

//flag reducer
const [data, dispatch] = useReducer (reducer, {
  loading: true,
  data: {}
})

//remember i have uses useEffect to caught in the api's because without inside out i dont getting caught
useEffect(() => {

  dispatch({type: 'REQUEST'})
   axios
  .get(Url)
  .then(res => {
    dispatch({type:'SUCCESS', data: res.data})
  }) 
}, [])



  return (
    <div>
    <h1> My money practice more about axios and Api and remeber practice more always!!!</h1>
     {JSON.stringify(data)}

     {data.loading && <p>Loading...</p>}
    </div>
);
}

export default App;
