import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";
import api from "../../services/api";
import cep from "cep-promise";
import ButtonBlue from "../../components/ButtonBlue";
import { FiArrowLeft } from "react-icons/fi";
// import { validate, required, email } from "sm-form-validation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterCard(props) {
  const notify = (message) => toast.error(message);
  const history = useHistory();
  const [spinner, setSpinner] = useState(false);

  // const [addressCep, setAddressCep] = useState({
  //   street: "",
  //   district: "",
  //   city: "",
  //   state: ""
  // });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    document: "",
    type: "",
    phone: {
      areaCode: "",
      number: "",
    },
    address: {
      street: "",
      district: "",
      zipCode: "",
      city: "",
      state: "",
      number: "",
      complement: "",
    },
    car: {
      model: "Uno mile 2000 1.0",
      plate: "IVTX5420",
      measures: {
        height: "30",
        width: "40",
        length: "50",
      },
    },
  });

  const handleRegister = () => RequestRegister(formData);

  function RequestRegister(data) {
    console.log('finalData',formData)
    setSpinner(true);
    api
      .post("/api/register", data)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("userData", JSON.stringify(res.data.data.user));
        const userData = JSON.parse(localStorage.getItem("userData"));

        if (userData.type === "S") {
          return history.push("/dashboard");
        } else {
          return history.push("/dashboardDriver");
        }
      })
      .catch((err) => {
        notify(err.response.data.message);
        setSpinner(false);
      });
  }

  async function handleGetCep() {
    if (formData.address.zipCode.length === 8) {
      await cep(formData.address.zipCode)
        .then((response) => {
          let tempData = JSON.parse(JSON.stringify(formData))
          tempData.address = {
            street: response.street,
            district: response.neighborhood,
            city: response.city,
            state: response.state,
            zipCode:formData.address.zipCode
          }
          setFormData(tempData)
        }).catch((err) => {
          notify(err.errors[1].message);
        });
    }
  }

  return (
    <div className="div-register-card">
      <ToastContainer />
      <div className="div-title-card-register">
        <h2>Crie sua conta já!</h2>
      </div>
      <div className="div-input">
        <input
          className="input row-input"
          type="text"
          placeholder="Nome completo"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />
        <input
          className="input row-input"
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
        <input
          className="input row-input"
          type="text"
          placeholder="CPF"
          value={formData.document}
          onChange={(e) => {
            setFormData({ ...formData, document: e.target.value });
          }}
        />
      </div>
      <div className="div-input">
        
        <input
          className="input row-input-area-code"
          type="text"
          placeholder="DDD"
          value={formData.phone.ddd}
          onChange={(e) => {
            setFormData({
              ...formData,
              phone: {
                ...formData.phone,
                areaCode: e.target.value,
              },
            });
          }}
        />
        <input
          className="input row-input-phone"
          type="text"
          placeholder="Celular"
          value={formData.phone.number}
          onChange={(e) => {
            setFormData({
              ...formData,
              phone: {
                ...formData.phone,
                number: e.target.value,
              },
            });
          }}
        />
        <input
          className="input row-input"
          type="text"
          placeholder="CEP"
          onBlur={handleGetCep}
          onChange={(e) => {
            setFormData({
              ...formData,
              address: {
                ...formData.address,
                zipCode: e.target.value,
              },
            });
          }}
        />
        <input
          className="input row-input"
          type="text"
          placeholder="Logradouro"
          value={formData.address.street}
          onChange={(e) => {
            setFormData({
              ...formData,
              address: {
                ...formData.address,
                street: e.target.value,
              },
            });
          }}
        />
      </div>
      <div className="div-input">
        <input className="input row-input" type="text" placeholder="Número" />
        <input
          className="input row-input"
          type="text"
          placeholder="Bairro"
          value={formData.address.district}
          onChange={(e) => {
            setFormData({
              ...formData,
              address: {
                ...formData.address,
                district: e.target.value,
              },
            });
          }}
        />
        <input
          className="input row-input"
          type="text"
          placeholder="Cidade"
          value={formData.address.city}
          onChange={(e) => {
            setFormData({
              ...formData,
              address: {
                ...formData.address,
                city: e.target.value,
              },
            });
          }}
        />
      </div>
      <div className="div-input">
        <input
          className="input row-input"
          type="text"
          placeholder="Estado"
          value = {formData.address.state}
          onChange={(e) => {
            setFormData({
              ...formData,
              address: {
                ...formData.address,
                state: e.target.value,
              },
            });
          }}
        />
        <input
          className="input row-input"
          type="text"
          placeholder="Complemento"
          onChange={(e) => {
            setFormData({
              ...formData,
              address: {
                ...formData.address,
                complement: e.target.value,
              },
            });
          }}
        />
        <select
          name="type"
          className="input row-input"
          value={formData.type}
          onChange={(e) => {
            setFormData({
              ...formData,
              type: e.target.value,
            });
          }}
        >
          <option value="" >
            Selecione um tipo
          </option>
          <option value="S">Vendedor</option>
          <option value="D">Motorista</option>
        </select>
      </div>
      <div className="div-btn-terms">
        <h4>
          Ver o <b>contrato</b> do Mercado Livre Ao cadastrar-me, declaro que
          sou maior de idade e aceito os <b>Termos e condições</b> e as
          <b> Políticas de privacidade </b>
          do Mercado Livre e do Mercado Pago.
        </h4>

        <ButtonBlue
          title="Criar conta"
          loading={spinner}
          onClick={handleRegister}
        />
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
