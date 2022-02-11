import React from "react"
import REST from '../utils/rest'

const BaseUrl ='https://build-api-8a54e-default-rtdb.firebaseio.com/'
const { UseGet } = REST(BaseUrl)


// create new movimentacoes to adding in the another router!!
const Movimentacoes = ({ match }) =>{
    // now i going flag in the date
    const data = UseGet(`movimentacoes/${match.params.data}`)
    
    return  (
        <div>
        <h1>Movimentacoes</h1>
        <pre> {JSON.stringify(data)} </pre>
        <table  className="table" >
        <thead>
         <tr>
         <th>Descrição</th>
         <th>Valor</th>
         </tr>

        </thead>
        <tbody>
         {
            Object
            .keys(data.data)
            .map(movimentacao => {
                return (
                    <tr>
                      <td>{data.data[movimentacao].descricao}</td>
                      <td>{data.data[movimentacao].valor}</td>
                    </tr>
                )
            })
       
         }
        </tbody>

        </table>

        </div>
        )
}


export default Movimentacoes
