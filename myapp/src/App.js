import React  from 'react'
import './App.css'
import Header from './elements/Header'

// THIS REST turned about init
import REST from './rest'
const BaseUrl ='https://build-api-8a54e-default-rtdb.firebaseio.com/'

const {UseGet,UsePost, useDelete} = REST(BaseUrl)


function App() {
                  
  const  data = UseGet ('meses')

//const [postData, post] =  UsePost('movimentacao/2022-01')
//const [Deletdata, remove] = useDelete()
// i have delete way whole


 //const Doremove = () => {
  // i have delete way whole
   //remove('movimentacao/2022-01/-MuhE8AHOBl46uBwFRHX')
// }

  //const Savenovo = () =>{
    //post({ valor: 10 , descricao: 'olá'})
 // }

  return (
    <div>
    <Header/>
    <div className='container'>
   <h2>Adding month</h2>

    <select>
    <option value='2019'>2019</option>
    <option value='2020'>2020</option>
    <option value='2021'>2021</option>
    </select>

    <select>
    <option value='01'>01</option>
    <option value='02'>02</option>
    <option value='03'>03</option>
    </select>
    <button> adding month</button>
    
    {
      data.loading && <span>Carregando...</span>
    }
    
    {
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
   </div>
    </div>
);
  }

export default App;
