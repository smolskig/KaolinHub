import React from "react";
import "./styles.css";
import ButtonBlue from "../../components/ButtonBlue";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function LoginCard() {
  return (
    <div className="div-login-card">
      <div className="div-title-card-login">
        <h2>Faça seu logon</h2>
      </div>
      <div className="div-input">
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
        <Link className="link-go-create-account" to="/register">
          Criar nova conta
          <FiArrowRight />
        </Link>
      </div>
    </div>
  );
}
