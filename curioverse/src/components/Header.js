import React from "react";
import logo from "./logo.png"; 
import '../styles/App.css'

const Header = () => {
  return (
    <div
      className="fondo-pantalla d-flex justify-content-center align-items-center position-relative"
      style={{
        backgroundImage: "url('https://marketplace.canva.com/EAFIJGWz8q4/1/0/1600w/canva-red-black-white-anime-podcast-twitch-banner-UWLRt79y-g4.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "250px",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        className="position-absolute top-0 start-0 m-3"
        style={{ width: "100px", height: "100px" }}
      />
      <h1 className="tittle">CurioVerse</h1>
    </div>
  );
};

export default Header;
