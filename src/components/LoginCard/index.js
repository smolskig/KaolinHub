import React from "react";
import "./styles.css";
import ButtonBlue from "../../components/ButtonBlue";
import { FiArrowRight } from "react-icons/fi";

export default function LoginCard(props) {
  return (
    <div className="div-login-card">
      <div className="div-title-card-login">
        <h2>Faça seu logon</h2>
      </div>
      <div className="div-input-login">
        <input className="input" type="text" placeholder="Email" />
        <input className="input" type="text" placeholder="Senha" />
        <a className="link-forgot-password" href="https://google.com">
          esqueci minha senha
        </a>
      </div>
      <div>
        <ButtonBlue title="entrar" />
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
