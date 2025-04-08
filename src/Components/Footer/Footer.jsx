import { useState } from "react";
import Modal from "../Modal/Modal";
import { Container } from "react-bootstrap";
import "./Footer.css"

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({ title: "", placeholder: "", getMessage: () => "" });

  const handleConfirmarAsistencia = () => {
    setModalConfig({
      title: "Introduce tu nombre para confirmar asistencia",
      placeholder: "Escribe tu nombre...",
      getMessage: (name) => `Mi nombre es ${name} y confirmo mi asistencia a los 15 años de Carolina.`
    });
    setModalOpen(true);
  };

  const handleSugerirCancion = () => {
    setModalConfig({
      title: "¿Qué canción quieres sugerir?",
      placeholder: "Canción favorita o link de Spotify...",
      getMessage: (text) => `Sugerencia de canción: ${text}`
    });
    setModalOpen(true);
  };

  const handleAgendarFiesta = () => {
    const title = "Fiesta de 15 años de Carolina 🎉";
    const location = "Guardería Náutica, Oliva 1190, Camino Negro, B2914 Ramallo, Buenos Aires";
    const details = "¡Te espero para festejar juntos este momento tan especial!";
    const startDate = "20240615T200000Z"; // 15 de junio 2024, 20:00 (UTC)
    const endDate = "20240616T020000Z";   // 16 de junio 2024, 02:00 (UTC)

    const calendarURL = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;

    window.open(calendarURL, "_blank");
  };

  return (
    <Container className='footerContainer'>
      <footer>
        <div className='tittleFooter'>
          <h2>Carlota</h2>
          <p>Mis 15 años</p>
        </div>

        <div className='funciones'>
          <button onClick={handleConfirmarAsistencia}>Confirmar asistencia</button>
          <button onClick={handleSugerirCancion}>Sugerir canción</button>
          <button onClick={handleAgendarFiesta}>Agendar fiesta</button>
        </div>
      </footer>

      {modalOpen && (
        <Modal
          onClose={() => setModalOpen(false)}
          title={modalConfig.title}
          placeholder={modalConfig.placeholder}
          getMessage={modalConfig.getMessage}
        />
      )}
    </Container>
  );
};

export default Footer;
