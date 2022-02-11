// here i going addinng useget, usepost, useget
//here going center of hoocks
import { useReducer, useEffect } from "react";
import axios from "axios";


const INITIAL_STATE = {
  loading: false, 
  data: {}
}


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


   const init = BaseUrl => {

    const UseGet = resource => {
      // try it flag loading
      // i can seeing this data have conexitons
      //flag reducer
      const [data, dispatch] = useReducer (reducer,INITIAL_STATE)
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

    const UsePost = resource => {
      const [data, dispatch] = useReducer (reducer, INITIAL_STATE)

      const post  = data => {
       dispatch({type: 'REQUEST'})    
      axios
      .post(BaseUrl + resource + '.json', data)
      .then(res => {
          dispatch({type:'SUCCESS', data: res.data})
      })
      }
    return [data, post]
  }

  const useDelete = () => {
    // remember here i can set reducer!!!
    const [data, dispatch] = useReducer (reducer, INITIAL_STATE)
    const remove  = resource => {
     dispatch({type: 'REQUEST'})    
    axios
    .delete(BaseUrl + resource + '.json')
    .then(() => {
        dispatch({type:'SUCCESS'})
    })
    }
  return [data, remove]
}



    //here it is retunr useget that stay inside of function init!!
    return {
      UseGet,
      UsePost,
      useDelete
    }
   }
   // here i am caught kind url to getting make rearrange
 


 export default init