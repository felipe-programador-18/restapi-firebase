import React from "react"
import REST from '../utils/rest'
import { useState } from "react"

// import date about month
const BaseUrl ='https://build-api-8a54e-default-rtdb.firebaseio.com/'
const { UseGet, UsePost } = REST(BaseUrl)




// create new movimentacoes to adding in the another router!!
const Movimentacoes = ({match}) =>{
    // now i going flag in the date
    const data = UseGet( `movimentacoes/${ match.params.data}`)
    const [postData, salvar] = UsePost(`movimentacoes/${ match.params.data}`) 

    const [ descricao, setdescricao] = useState('')
    const [valor, setvalor] = useState(0.0)
    
    
    const OnchangeDescricao = evt => {
      setdescricao(evt.target.value)
    }

    const OnchangeValor = evt => {
       setvalor(parseFloat(evt.target.value))
    }
      
    const saveMove  =  async() => {
      await salvar ({
      descricao,
      valor
     })
     setdescricao('')
     setvalor(0.0)
     data.refetch()
    }
    
 
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
            
            <td> <input type='text' value={descricao}  onChange={OnchangeDescricao} />  </td>
            <td> <input type='text' value={valor} onChange={OnchangeValor} /> <button onClick={saveMove}>+</button> </td>
            
            </tr>

         </tbody>
        </table>
         
      
        </div>
        )
}


export default Movimentacoes
