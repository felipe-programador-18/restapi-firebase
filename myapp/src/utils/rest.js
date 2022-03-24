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
      const [data, dispatch] = useReducer (reducer,INITIAL_STATE)
      
      const carregar = async () => {
        dispatch({type: 'REQUEST'})
        const res = await axios
       .get(BaseUrl + resource + '.json')
       dispatch({type:'SUCCESS', data: res.data})
      }
      useEffect(() => {
        carregar()
      }, [])
      return {
        ...data,
        refetch: carregar
      }
    }  

      const UsePost = resource => {
      const [data, dispatch] = useReducer (reducer, INITIAL_STATE)

      const post  = async(data) => {
       dispatch({type: 'REQUEST'})    
      const res = await axios.post(BaseUrl + resource + '.json', data)
         dispatch({
         type:'SUCCESS',
         data: res.data
          })
         return [data, post]
        }
       }


     const useDelete = () => {
        // remember here i can set reducer!!!
      const [data, dispatch] = useReducer (reducer, INITIAL_STATE)
     const remove  = async(resource) => {
     dispatch({type: 'REQUEST'})    
      await axios.delete(BaseUrl + resource + '.json')
    
      dispatch({type:'SUCCESS'})
     }
      return [data, remove]
    }
      return {
      UseGet,
      UsePost,
      useDelete
     }}


// here i am caught kind url to getting make rearrange
export default init