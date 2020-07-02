import React from "react";
import imageSvg from "../../assets/login-svg.svg";
import logo from "../../assets/logo-ml.png";
import LoginCard from "../../components/Login";
import RegisterCard from "../../components/Register";
import "./styles.css";

export default function Login() {
  return (
    <>
      <div className="div-content-login">
        <div className="div-background-yellow">
          <div>
            <img className="logo-ml" src={logo} alt="Logo Mercado Livre" />
          </div>
          <div>
            <LoginCard />
          </div>
        </div>
        <div className="div-image-svg">
          <div>
            <img src={imageSvg} alt="Image Login Svg" />
          </div>
        </div>
      </div>
    </>
  );
}
