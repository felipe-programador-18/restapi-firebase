import { useReducer, useEffect } from "react"
import axios from "axios"

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
   
   //create hoock personalies
   const UseGet = Url => {
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
   },[])
      return data
   }






export default UseGet