import React from "react";
import "./styles.css";
import NavBar from "../../components/NavBar";
import ButtonBlue from '../../components/ButtonBlue';

export default function DashboardDriver() {
  return (
    <>
      <div className="div-root-panel">
        <NavBar />
        <div className="buttonCard">
          <ButtonBlue title="Pesquisar" />
        </div>
        {/* <img alt="map" className="map-img" src="https://www.umhs-adolescenthealth.org/wp-content/uploads/2016/12/google-map-background.jpg"></img> */}
      </div>
    </>
  );
}
