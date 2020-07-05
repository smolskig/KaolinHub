import React, { useEffect,useState } from "react";
import { useHistory } from "react-router-dom"

import {
  FiCheckCircle,
  FiSearch,
} from "react-icons/fi";
import "./styles.css";
import logo from "../../assets/logo-ml.png";
import imageUser from "../../assets/profile.jpg";
import ButtonBlue from "../../components/ButtonBlue";
import StatusDelivery from "../../components/StatusDelivery";
import api from '../../services/api'
import Loader from "react-loader-spinner";

export default function Dashboard() {
  const [sales, setSales] = useState([])
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  
  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem('userData'))
    if (userData.mlLogged === false) {
      history.push('/verify-token')
    }else{
      setLoading(true)
      api.get('ml/sales',{headers:{ "Authorization" : `Bearer ${localStorage.getItem('token')}` }})
        .then(res => {
          setSales(res.data.data)
          setLoading(false)
        }) 
    }
  },[history])
  
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

                {
                  loading 
                  ?
                  <Loader type="Oval" class="spinner-center" color="#00BFFF" height={70} width={70} />
                  :
                  sales.map((sale,key)=>{
                    return (
                      <div className="list-item" key={sale.mlProductId} >
                        <div>
                          <img
                            className="image-product"
                            src={sale.photo}
                            alt="ImageProduct"
                          />
                        </div>
                        <div className="table-title">{sale.title}</div>
                        <div>{sale.price}</div>
                        <div>{sale.quantity}</div>
                        <div>
                          {sale.status}
                          <FiCheckCircle className="check-success" />
                        </div>
                      </div>
                    )
                  })
                }
            <StatusDelivery />
          </div>
        </div>
      </div>
    </>
  );
}
