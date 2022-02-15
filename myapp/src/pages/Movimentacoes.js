import React from "react"
import REST from '../utils/rest'

const BaseUrl ='https://build-api-8a54e-default-rtdb.firebaseio.com/'
const { UseGet } = REST(BaseUrl)




// create new movimentacoes to adding in the another router!!
const Movimentacoes = (props) =>{
    // now i going flag in the date
     return  (
        <div>
        <h1>Movimentacoes</h1>
        <pre> {JSON.stringify(props)} </pre>
        </div>
        )
}


export default Movimentacoes
