import React from "react";
import {
  FiArrowUpCircle,
  FiChevronDown,
  FiChevronUp,
  FiCheckCircle,
} from "react-icons/fi";
import "./styles.css";
import logo from "../../assets/logo-ml.png";
import imageUser from "../../assets/profile.jpg";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard-main">
        <div className="div-header-yellow">
          <div className="div-header-nav">
            <div>
              <img
                className="logo-ml-dashboard"
                src={logo}
                alt="Logo Mercado Entregue"
              />
            </div>
            <div className="div-dashboard-user">
              <div className="div-photo-user">
                <img className="image-user" src={imageUser} alt="Image User" />
              </div>
            </div>
          </div>
        </div>
        <div className="div-content-card">
          <div className="div-card-info">
            <div className="div-header-card-info">
              <h2>Ganhos</h2>
              <FiArrowUpCircle className="arrow-up-circle-icon" />
            </div>
            <div className="div-card-money">
              <h1>R$ 2.367,25</h1>
            </div>
          </div>
        </div>
        <div className="div-list-products">
          <div className="div-card-list">
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

              <tbody>
                <tr>
                  <td>
                    <img
                      className="image-product"
                      src="https://http2.mlstatic.com/D_NQ_NP_2X_854957-MLA41827614180_052020-F.webp%202x"
                      alt="Image Product"
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
                      alt="Image Product"
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
                      alt="Image Product"
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
          </div>
        </div>
      </div>
    </>
  );
}
