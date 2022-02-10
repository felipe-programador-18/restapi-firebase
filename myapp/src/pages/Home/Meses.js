import React from "react"
import {Link} from 'react-router-dom'

// THIS REST turned about init
import REST from '../../rest'
const BaseUrl ='https://build-api-8a54e-default-rtdb.firebaseio.com/'
const {UseGet} = REST(BaseUrl)

const Month = () => {
    const  data = UseGet ('meses')
    if(data.loading){
        return <span>Loading ...</span>
    } 
    if(Object.keys(data.data).length >0){
    return (
            !data.loading &&
            <table className='table'>
            <thead>
            <tr>
            <th>MÊS</th>
            <th>PREVISÃO ENTRADA</th>
            <th>PREVISÃO DE SAIDA</th>
            <th>ENTRADA</th>
            <th>SAIDA</th>
            </tr>
            </thead>
            
             {
               Object
               .keys(data.data)
               .map(mes => {
                 return (
                  <tr key={mes}>
                  <td> <Link to={`/movimentacoes/${mes}`}>{mes} </Link></td>
                  <td>{data.data[mes].previsao_entrada}</td> 
                  <td>{data.data[mes].previsao_saida}</td>  
                  <td>{data.data[mes].entrada}</td>  
                  <td>{data.data[mes].saida}</td>   
                  </tr> )
               }
                )
             }
            <tbody>   
            </tbody>
            </table>
    
            )
        
             }
            return null
        }

      
              //<pre> {JSON.stringify(data)} </pre>



export default Month