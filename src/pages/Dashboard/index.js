import React, {useEffect} from "react";
import {useHistory} from "react-router-dom"

import {
  FiChevronDown,
  FiChevronUp,
  FiCheckCircle,
  FiSearch,
} from "react-icons/fi";
import "./styles.css";
import logo from "../../assets/logo-ml.png";
import imageUser from "../../assets/profile.jpg";
import ButtonBlue from "../../components/ButtonBlue";
import StatusDelivery from "../../components/StatusDelivery";

export default function Dashboard() {
  const history = useHistory()
  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem('userData'))
    console.log('entrou no if n era pra ter entrado',userData)
    if(userData.mlLogged === false){
      history.push('/verify-token')
    }
  })
  return (
    <>
      <div className="dashboard-main">
        <div className="div-header-yellow">
          <div className="div-header-nav">
            <div>
              <img
                className="logo-ml-dashboard"
                src={logo}
                alt="LogoMercadoEntrega"
              />
            </div>
            <div className="div-dashboard-user">
              <div className="div-photo-user">
                <img className="image-user" src={imageUser} alt="ImageUser" />
              </div>
            </div>
          </div>
        </div>
        <div className="div-content-card">
          <div className="div-card-info">
            <div className="div-header-card-info">
              <h2>Verificação de Produtos</h2>
              <h3>Produtos Adicionados</h3>
            </div>
            <div className="div-card-selected-items">
              <div className="div-selected-item">
                <span>
                  Psp 3000 Original Playstation Na Caixa S/ Bateria Otimo Estado
                </span>
                <span>1x</span>
              </div>
            </div>
            <div className="checkout-area">
              <div className="label-checkout">
                <span>Total de produtos: 1</span>
                <span>Peso total: 3gr</span>
              </div>
              <div>
                <ButtonBlue title="Chamar entregador"></ButtonBlue>
              </div>
            </div>
          </div>
        </div>
        <div className="div-input-search">
          <input
            type="text"
            className="input"
            placeholder="Pesquisar produtos"
          />
          <div className="div-icon-search">
            <FiSearch className="icon-search" />
          </div>
        </div>
        <div className="div-list-products">
          <div className="div-card-list">
            <h3>Lista de Produtos:</h3>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>
                    Titulo <FiChevronUp color="#F17400" />
                  </th>
                  <th>
                    Preço <FiChevronDown />
                  </th>
                  <th>
                    Quantidade <FiChevronDown />
                  </th>
                  <th>Situação</th>
                </tr>
              </thead>
              <tbody className="list-body">
                <tr>
                  <td>
                    <img
                      className="image-product"
                      src="https://http2.mlstatic.com/D_NQ_NP_2X_854957-MLA41827614180_052020-F.webp%202x"
                      alt="ImageProduct"
                    />
                  </td>
                  <td className="table-title">LG K50S Dual SIM 32 GB</td>
                  <td>R$ 1.299</td>
                  <td>1</td>
                  <td>
                    Vendido
                    <FiCheckCircle className="check-success" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="image-product"
                      src="https://http2.mlstatic.com/D_NQ_NP_2X_854957-MLA41827614180_052020-F.webp%202x"
                      alt="ImageProduct"
                    />
                  </td>
                  <td className="table-title">LG K50S Dual SIM 32 GB</td>
                  <td>R$ 1.299</td>
                  <td>1</td>
                  <td>
                    Vendido
                    <FiCheckCircle className="check-success" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="image-product"
                      src="https://http2.mlstatic.com/D_NQ_NP_2X_854957-MLA41827614180_052020-F.webp%202x"
                      alt="ImageProduct"
                    />
                  </td>
                  <td className="table-title">LG K50S Dual SIM 32 GB</td>
                  <td>R$ 1.299</td>
                  <td>1</td>
                  <td>
                    Vendido
                    <FiCheckCircle className="check-success" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="image-product"
                      src="https://http2.mlstatic.com/D_NQ_NP_2X_854957-MLA41827614180_052020-F.webp%202x"
                      alt="ImageProduct"
                    />
                  </td>
                  <td className="table-title">LG K50S Dual SIM 32 GB</td>
                  <td>R$ 1.299</td>
                  <td>1</td>
                  <td>
                    Vendido
                    <FiCheckCircle className="check-success" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="image-product"
                      src="https://http2.mlstatic.com/D_NQ_NP_2X_854957-MLA41827614180_052020-F.webp%202x"
                      alt="ImageProduct"
                    />
                  </td>
                  <td className="table-title">LG K50S Dual SIM 32 GB</td>
                  <td>R$ 1.299</td>
                  <td>1</td>
                  <td>
                    Vendido
                    <FiCheckCircle className="check-success" />
                  </td>
                </tr>
              </tbody>
            </table>
            <StatusDelivery />
          </div>
        </div>
      </div>
    </>
  );
}
