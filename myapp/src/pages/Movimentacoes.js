import React from "react"
import REST from '../utils/rest'

const BaseUrl ='https://build-api-8a54e-default-rtdb.firebaseio.com/'
const { UseGet } = REST(BaseUrl)


// create new movimentacoes to adding in the another router!!
const Movimentacoes = ({ match }) =>{
    // now i going flag in the date
    const data = UseGet(match.params.data)

    return  (
        <div>
        <h1>Movimentacoes</h1>
        <pre> {JSON.stringify(data)} </pre>
      
        </div>
        )
}


export default Movimentacoes
