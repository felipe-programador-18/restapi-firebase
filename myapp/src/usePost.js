import axios from 'axios'

const usePost = (Url) => {
    const post = data => {
        axios
        .post(Url, data)
        .then(res =>{
           console.log(res.data)
        })
      }
}

export default usePost