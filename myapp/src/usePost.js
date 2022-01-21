import axios from "axios"
import { useReducer } from "react"
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


const Usepost = (Url) => {
    const [data, dispatch] = useReducer (reducer,
         {loading: false, 
            data: {}}
            )

    const post  = data => {
     dispatch({type: 'REQUEST'})    
    axios
    .post(Url, data)
    .then(res => {
        dispatch({type:'SUCCESS', data: res.data})
    })
    }
  return [data, post]
}

export default Usepost