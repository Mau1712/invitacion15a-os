import React, { useState } from "react";
import { Container } from "react-bootstrap";

import musicIcon from "../../assets/icons/4.png";
import moño from "../../assets/icons/3.png";
import notes from "../../assets/icons/5.png";
import dresscodeImage from "../../assets/dressCodeImg.jpg"; // 👈 tu imagen

import "./FiestaDos.css";
import Modal from "../Modal/Modal";
import ModalImage from "../ModalImage/ModalImage";

const FiestaDos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageOpen, setModalImageOpen] = useState(false); // 👈 control para el modal de imagen
  const [modalConfig, setModalConfig] = useState({ title: "", placeholder: "", getMessage: () => "" });

  const openMusicModal = () => {
    setModalConfig({
      title: "¿Qué canción quieres sugerir?",
      placeholder: "Canción favorita o link de Spotify...",
      getMessage: (text) => `Sugerencia de canción: ${text}` // 👈
    });
    setModalOpen(true);
  };
  
  const openTipsModal = () => {
    setModalConfig({
      title: "¿Quieres dejar un mensaje o tip?",
      placeholder: "Soy vegano...",
      getMessage: (text) => `Nota o tip para el evento: ${text}` // 👈
    });
    setModalOpen(true);
  };
  
  const openDressCodeImage = () => {
    setModalImageOpen(true);
  };

  return (
    <Container>
      <Container className="FiestaDosTittle">
        <h2>Fiesta</h2>
        <p>Hagamos juntos una fiesta épica.</p>
        <p>Aquí algunos detalles a tener en cuenta.</p>
      </Container>

      <Container className="cardsContainer">
        <Container className="cardItem">
          <h2>Música</h2>
          <img src={musicIcon} alt="" />
          <p>¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?</p>
          <button onClick={openMusicModal}>Sugerir</button>
        </Container>

        <Container className="cardItem">
          <h2>Dress Code</h2>
          <img src={moño} alt="" />
          <p>Una orientación para tu vestuario</p>
          <button onClick={openDressCodeImage}>Ver más</button> {/* 👈 botón para abrir la imagen */}
        </Container>

        <Container className="cardItem">
          <h2>Tips y notas</h2>
          <img src={notes} alt="" />
          <p>Información adicional para tener en cuenta</p>
          <button onClick={openTipsModal}>+ Info</button>
        </Container>
      </Container>

      {modalOpen && (
        <Modal
          onClose={() => setModalOpen(false)}
          title={modalConfig.title}
          placeholder={modalConfig.placeholder}
          getMessage={modalConfig.getMessage}
        />
      )}

      {modalImageOpen && (
        <ModalImage
          onClose={() => setModalImageOpen(false)}
          imageSrc={dresscodeImage}
          altText="Dress Code"
        />
      )}
    </Container>
  );
};

export default FiestaDos;
