import React, { useState } from "react";
import { Container } from "react-bootstrap";
import partyIcon from "../../assets/icons/7.png";
import Modal from "../Modal/Modal"; 
import "./FiestaUno.css";

const FiestaUno = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleAddToCalendar = () => {
    const title = "Fiesta de 15 años de Carolina 🎉";
    const location = "Guardería Náutica, Oliva 1190, Camino Negro, B2914 Ramallo, Buenos Aires";
    const details = "¡Te espero para festejar juntos este momento tan especial!";
    const startDate = "20240615T200000Z";
    const endDate = "20240616T020000Z";

    const calendarURL = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;

    window.open(calendarURL, "_blank");
  };

  const handleOpenMaps = () => {
    const mapsURL = "https://maps.app.goo.gl/3GKeYk5TY1YkYdbn6";
    window.open(mapsURL, "_blank");
  };

  return (
    <Container className="fiestaUnoContainer">
      {showModal && (
        <Modal
          onClose={closeModal}
          title="Introduce tu nombre para confirmar asistencia"
          placeholder="Escribe tu nombre..."
          getMessage={(name) => `Mi nombre es ${name} y confirmo mi asistencia a los 15 años de Carolina.`}
        />
      )}

      <Container className="partyIconBox">
        <img src={partyIcon} alt="Icono de fiesta" />
      </Container>

      <Container className="tittleFiestaUno">
        <h2>Fiesta</h2>
      </Container>

      <Container className="fiestaUnoItem">
        <h4>Día</h4>
        <p>Sábado 15 de junio - hs</p>
        <button onClick={handleAddToCalendar}>Agendar</button>
      </Container>

      <Container className="fiestaUnoItem">
        <h4>Lugar</h4>
        <p>Guardería Náutica</p>
        <button onClick={openModal}>Confirmar Asistencia</button>
      </Container>

      <Container className="fiestaUnoItem">
        <h4>Dirección</h4>
        <p>
          Oliva 1190, Camino Negro, B2914 Ramallo, Provincia de Buenos Aires
        </p>
        <button onClick={handleOpenMaps}>Cómo llegar?</button>
      </Container>
    </Container>
  );
};

export default FiestaUno;
