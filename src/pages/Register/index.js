import React from "react";
import imageSvg from "../../assets/login-svg.svg";
import logo from "../../assets/logo-ml.png";
import RegisterCard from "../../components/Register";
import "./styles.css";

export default function Register() {
  return (
    <>
      <div className="div-content-register">
        <div className="div-background-yellow">
          <div>
            <img className="logo-ml" src={logo} alt="LogoMercadoEntrega" />
          </div>
          <div>
            <RegisterCard />
          </div>
        </div>
        <div className="div-image-svg">
          <div>
            <img src={imageSvg} alt="ImageSvg" />
          </div>
        </div>
      </div>
    </>
  );
}
