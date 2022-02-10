import {useReducer} from "react"
import axios from "axios"

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

const useDelete = () => {
    // remember here i can set reducer!!!
    const [data, dispatch] = useReducer (reducer,
         {loading: false, 
            data: {}}
            )
    const remove  = Url => {
     dispatch({type: 'REQUEST'})    
    axios
    .delete(Url)
    .then(() => {
        dispatch({type:'SUCCESS'})
    })
    }
  return [data, remove]
}

export default useDelete