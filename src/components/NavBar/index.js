import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./styles.css";
import logo from "../../assets/logo-ml.png";
import imageUser from "../../assets/profile.jpg";

export default function DashboardDriver() {
  const [customClass, setCustomClass] = useState("sideNav");
  return (
    <>
      <div className="mainNavBar">
        <div className="sideMenuButton menu-item">
          <FiMenu
            className="icon-menu"
            onClick={() => {
              setCustomClass("sideNav sideNav-open");
            }}
          ></FiMenu>
        </div>
        <div className="balance menu-item">
          <h4>Seu saldo</h4>
          <h2>R$ 2.321,02</h2>
        </div>
        <div className="profile menu-item">
          <div className="div-photo-user">
            <img className="image-user" src={imageUser} alt="ImageUser" />
          </div>
        </div>
      </div>

      <div className={customClass}>
        <div className="profile-area">
          <span
            className="close-button"
            onClick={() => {
              setCustomClass("sideNav");
            }}
          >
            <FiX />
          </span>
          <div className="profile-photo">
            <img className="image-profile" src={imageUser} alt="ImageProfile" />
          </div>
        </div>
        <div className="content-area">
          <ul>
            <li>
              BLABLA
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
