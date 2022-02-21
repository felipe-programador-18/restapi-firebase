import React from "react"
import REST from '../utils/rest'
import { useState } from "react"

const BaseUrl ='https://build-api-8a54e-default-rtdb.firebaseio.com/'
const { UseGet } = REST(BaseUrl)




// create new movimentacoes to adding in the another router!!
const Movimentacoes = ({match}) =>{
    // now i going flag in the date

    // controller form is name called to change formulating with HOOCK
    // here i 'm target  value of input in the state, because i have using hookc state!!
    const [ descricao, setdescricao] = useState('')
    const [valor, setvalor] = useState(0.0)
    
    // this function to get date of input that went create, thought about that !!!
    const OnchangeDescricao = evt => {
      setdescricao(evt.target.value)
    }

    const OnchangeValor = evt => {
       setvalor(parseFloat(evt.target.valor))
    }
    
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

            <tr>
            
            <td> <input type='text' value={descricao}  onChange={OnchangeDescricao} /> </td>
            <td> <input type='text'value={valor} onChange={OnchangeValor} />  </td>
            
            </tr>

         </tbody>
        </table>
         
      
        </div>
        )
}


export default Movimentacoes
