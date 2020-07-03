import Axios from 'axios'

export default Axios.create({
    headers:{
     'Access-Control-Allow-Origin': '*' 
    },  
    baseURL: 'http://megahack.kaolinhub.com.br/api/'
})