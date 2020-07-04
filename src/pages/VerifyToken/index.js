import React, {useEffect} from "react";
import ButtonBlue from "../../components/ButtonBlue";
import logo from "../../assets/logo-ml.png";
import {useHistory} from 'react-router-dom'
import "./styles.css";


export default function VerifyToken() {
  const history = useHistory()
  let userData = JSON.parse(localStorage.getItem('userData'))
  let urlParams = new URLSearchParams(window.location.search);

  useEffect(()=>{
    if(urlParams.get('code')){
      userData.mlLogged = true
      userData.mlToken = urlParams.get('code')
      localStorage.setItem('userData',JSON.stringify(userData))
      history.push('/dashboard')
    }
  })
  
  return (
    <>
      <div className="div-content-verify-token">
        <div className="div-verify-token-img">
          <img src={logo} alt="LogoMercadoEntrega" />
        </div>
        <div className="div-verify-token-title-btn">
          <h2>Bem vindo {JSON.parse(localStorage.getItem('userData')).name} !</h2>
          <h4>
            Para continuar, precisamos da sua autorização no mercado livre.
          </h4>
          <div>
           <a href="http://auth.mercadolibre.com/authorization?response_type=code&client_id=7265029258041325"><ButtonBlue title="autenticar"/></a>
          </div>
        </div>
      </div>
    </>
  );
}
