import React from "react";
// THIS REST turned about init
import REST from './rest'
const BaseUrl ='https://build-api-8a54e-default-rtdb.firebaseio.com/'
const {UseGet,UsePost, useDelete} = REST(BaseUrl)

const Month = () => {
    const  data = UseGet ('meses')
    if(data.loading){
        return <span>Loading ...</span>
    } {
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
                  <td> {mes} </td>
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
          }
      
      
          <pre>
          {JSON.stringify(data)}
          </pre>
}



export default Month