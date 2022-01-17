import React  from 'react'
import './App.css'
import UseGet from './useget'

// the different among post and get, that post he create one key in firebase.
//practice firebase of way firebase api
//axios
//.get('https://practice-more-api-default-rtdb.firebaseio.com/Felipe.json')
//.then(res => {
 // console.log(res)
//})

const Url = 'https://practice-more-api-default-rtdb.firebaseio.com/movimentacoes/2022-01.json'

function App() {
  const  data = UseGet (Url)
  const data2 = UseGet ('http://bin.org/ip')

  return (
    <div>
    <h1> My money practice more about axios and Api and remeber practice more always!!!</h1>
     {JSON.stringify(data)}
     {data.loading && <p>Loading...</p>}
     <br/>
     <pre>{JSON.stringify(data2)}</pre>
     
    </div>
);
}

export default App;
