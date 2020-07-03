import React, {useState} from "react";
import "./styles.css";
import ButtonBlue from "../../components/ButtonBlue";
import { FiArrowRight } from "react-icons/fi";
import { useHistory  } from 'react-router-dom'
import api from '../../services/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginCard(props) {
  const notify = (message) => toast.error(message)

  const history = useHistory()
  const [formData,setFormData] = useState({
      email:"",
      password:""
  })

  const handleLogin = () => (
    formData.email && formData.password ? RequestLogin(formData) : notify('Preencha todos os campos')
  )

  function RequestLogin(data){
    api.post('/login',data)
      .then((res)=>{
          localStorage.setItem('token',res.data.data.token)
          localStorage.setItem('userData',JSON.stringify(res.data.data.user))

          const userData =  JSON.parse(localStorage.getItem('userData'))
          
          if(userData.type === 'S'){
            return  history.push('/dashboard')
          }else{
            return  history.push('/dashboardDriver')
          }
        })
      .catch(err=>{
        notify(err.response.data.message)
      })    
  }
  return (
    <div className="div-login-card">
      <ToastContainer />
      <div className="div-title-card-login">
        <h2>Faça seu logon</h2>
      </div>
      <div className="div-input-login">
        <input className="input" type="text" placeholder="Email" onChange={(e)=> setFormData({...formData,email:e.target.value}) } />
        <input className="input" type="password" placeholder="Senha" onChange={(e)=> setFormData({...formData,password:e.target.value}) } />
        <a className="link-forgot-password" href="https://google.com">
          esqueci minha senha
        </a>
      </div>
      <div>
        <ButtonBlue title="entrar" onClick={handleLogin} />
      </div>
      <div className="div-go-create-account">
        <span className="link-go-create-account" onClick={props.clickedLink}>
          Criar nova conta
          <FiArrowRight />
        </span>
      </div>
    </div>
  );
}
