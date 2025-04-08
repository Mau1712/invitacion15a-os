import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MusicContext } from "../../MusicContext"; // 👈 Importa el contexto
import imgHome from "../../assets/imgHome.png";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const { playMusic, stopMusic } = useContext(MusicContext); // 👈 usamos el contexto

  const handleNavigation = (withMusic) => {
    if (withMusic) {
      playMusic();
    } else {
      stopMusic();
    }
    navigate("/invitacion");
  };

  return (
    <Container className="homeContainer">
      <div className="imgHome">
        <img src={imgHome} alt="" />
      </div>

      <div className="homeTittle">
        <h3>Bienvenidos a la invitación de</h3>
        <h2>Carolina</h2>
      </div>

      <div className="homeMusic">
        <div className="homeMusicText">
          <p>La música de fondo es parte de la experiencia </p>
        </div>
        <div className="homeMusicButtons">
          <button onClick={() => handleNavigation(true)}>Con música</button> {/* true */}
          <button onClick={() => handleNavigation(false)}>Sin música</button> {/* false */}
        </div>
      </div>
    </Container>
  );
};

export default Home;
