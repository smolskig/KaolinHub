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
    const userData = JSON.parse(localStorage.getItem('userData'))
    return userData.mlLogged ? true : history.push('/verify-token')
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
              <h2>Verificação de Saída</h2>
              <h3>Produtos adicionados:</h3>
            </div>
            <div className="div-card-product">
              <div className="card-product">
                <h4>
                  Psp 3000 Original Playstation Na Caixa S/ Bateria Otimo Estado
                </h4>
                <h4>1x</h4>
              </div>
            </div>
            <div className="div-card-info-success">
              <div className="info-product">
                <h4>Total de produtos: 3</h4>
                <h4>Peso total: 300gr </h4>
              </div>
              <div className="div-btn-confirm-driver">
                <ButtonBlue title="Chamar o entregador" />
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
