import React from "react";
// import {
//   FiArrowUpCircle,
//   FiChevronDown,
//   FiChevronUp,
//   FiCheckCircle,
// } from "react-icons/fi";
import "./styles.css";
import NavBar from "../../components/NavBar";
// import logo from "../../assets/logo-ml.png";
// import imageUser from "../../assets/profile.jpg";

export default function DashboardDriver() {
  return (
    <>
      <div className="div-root-panel">
        <NavBar />
        <div className="buttonCard">
          <button className="button">Pesquisar</button>
        </div>
        {/* <img alt="map" className="map-img" src="https://www.umhs-adolescenthealth.org/wp-content/uploads/2016/12/google-map-background.jpg"></img> */}
      </div>
    </>
  );
}
