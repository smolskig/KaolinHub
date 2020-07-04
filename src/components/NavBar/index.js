import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./styles.css";
// import logo from "../../assets/logo-ml.png";
// import imageUser from "../../assets/profile.jpg";

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
        <div className="logo menu-item">Logo</div>
        <div className="profile menu-item">Profile</div>
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
          <div className="profile-photo"></div>
        </div>
        <div className="content-area">
          <ul>
            <li>Gabriel</li>
          </ul>
        </div>
      </div>
    </>
  );
}
