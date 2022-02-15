import React from "react"
import REST from '../utils/rest'

const BaseUrl ='https://build-api-8a54e-default-rtdb.firebaseio.com/'
const { UseGet } = REST(BaseUrl)




// create new movimentacoes to adding in the another router!!
const Movimentacoes = ({match}) =>{
    // now i going flag in the date
    const data = UseGet( `movimentacoes/${ match.params.data}`)
     return  (
        <div className='container'>
        <h1>Movimentacões</h1>
        <hr/>
        
        <table className="container">
        <thead>
     
          <tr>
            <th>Descrição:</th>
            <th>Valor:</th>
          </tr>
        
         </thead>
        <hr/>
         <tbody>
            { data.data &&
                Object
                .keys(data.data)
                .map(movimentacao => {
                   return (
                       <th>
                      
                          <td className="one"> {data.data[movimentacao].descricao} </td>
                          <td className="test"> {data.data[movimentacao].valor}  </td>                     
                        </th>
                       
                   )
                })
            }
         </tbody>
        </table>
         
      
        </div>
        )
}


export default Movimentacoes
