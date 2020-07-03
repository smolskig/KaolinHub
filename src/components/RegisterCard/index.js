import React from "react";
import "./styles.css";
import ButtonBlue from "../../components/ButtonBlue";
import { FiArrowLeft } from "react-icons/fi";

export default function RegisterCard(props) {
  return (
    <div className="div-register-card">
      <div className="div-title-card-register">
        <h2>Crie sua conta já!</h2>
      </div>
      <div className="div-input">
        <input
          className="input row-input"
          type="text"
          placeholder="Nome completo"
        />
        <input className="input row-input" type="text" placeholder="Email" />
      </div>
      <div className="div-input">
        <input className="input row-input" type="text" placeholder="CPF" />
        <input
          className="input row-input-area-code"
          type="text"
          placeholder="DDD"
        />
        <input
          className="input row-input-phone"
          type="text"
          placeholder="Celular"
        />
      </div>
      <div className="div-input">
        <input className="input row-input" type="text" placeholder="CEP" />
        <input
          className="input row-input"
          type="text"
          placeholder="Logradouro"
        />
      </div>
      <div className="div-input">
        <input className="input row-input" type="text" placeholder="Número" />
        <input className="input row-input" type="text" placeholder="Bairro" />
      </div>
      <div className="div-input">
        <input className="input row-input" type="text" placeholder="Cidade" />
        <input
          className="input row-input"
          type="text"
          placeholder="Complemento"
        />
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
        <span className="link-go-create-account" onClick={props.clickedLink}>
          <FiArrowLeft />
          Já tenho conta
        </span>
      </div>
    </div>
  );
}
