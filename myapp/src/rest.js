// here i going addinng useget, usepost, useget
//here going center of hoocks
import { useReducer, useEffect } from "react";
import axios from "axios";

const reducer = (state, action) => {
    // I go handling my state!!
    // how use reducer ?
    if(action.type === 'REQUEST'){
       return {
         ...state ,
         loading : true
       }
    }
    if(action.type ==='SUCCESS'){
      return { 
        ...state ,
        loading: false ,
        data: action.data
      }
    }
   // handling state
     return state
   }

   // here i am caught kind url to getting make rearrange
   const BaseUrl ="https://practice-more-api-default-rtdb.firebaseio.com"

   const UseGet = resource => {
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
   .get(BaseUrl + resource + '.json')
   .then(res => {
     dispatch({type:'SUCCESS', data: res.data})
   }) 
 }, [])
    return data
 }  


 export default UseGet