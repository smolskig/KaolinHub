import React from "react";
import ButtonBlue from "../../components/ButtonBlue";
import logo from "../../assets/logo-ml.png";
import "./styles.css";

export default function VerifyToken() {
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
            <ButtonBlue title="autenticar" />
          </div>
        </div>
      </div>
    </>
  );
}
