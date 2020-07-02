import React from "react";
import "./styles.css";
import ButtonBlue from "../../components/ButtonBlue";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function RegisterCard(props) {
  return (
    <div className="div-register-card">
      <div className="div-title-card-register">
        <h2>Crie sua conta já!</h2>
      </div>
      <div className="div-input">
        <input className="input" type="text" placeholder="Nome completo" />
        <input className="input" type="text" placeholder="CPF" />
      </div>
      <div className="div-input">
        <input className="input" type="text" placeholder="Email" />
        <input className="input" type="text" placeholder="Senha" />
      </div>
      <div className="div-input">
        <input className="input" type="text" placeholder="Confirmar Senha" />
        <input className="input" type="text" placeholder="Confirmar Senha" />
      </div>
      <div className="div-btn-terms">
        <h4>
          Ver o <b>contrato</b> do Mercado Livre Ao cadastrar-me, declaro que
          sou maior de idade e aceito os <b>Termos e condições</b> e as
          <b> Políticas de privacidade </b>
          do Mercado Livre e do Mercado Pago.
        </h4>
        <ButtonBlue title="Criar conta" />
      </div>
      <div className="div-go-create-account">
        <Link className="link-go-create-account" onClick={props.clickedLink}>
          <FiArrowLeft />
          Já tenho conta
        </Link>
      </div>
    </div>
  );
}
