import Axios from 'axios'
export default Axios.create({
    headers:{
     'Access-Control-Allow-Origin': '*',
     "Authorization" : `Bearer ${localStorage.getItem('token') || ''}`
    },  
    baseURL: 'http://megahack.kaolinhub.com.br/api/'
})