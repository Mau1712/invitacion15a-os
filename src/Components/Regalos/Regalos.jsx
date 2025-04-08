import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import regalosIcon from "../../assets/icons/6.png";
import "./Regalos.css";
import ModalCBU from '../ModalCBU/ModalCBU';

const Regalos = () => {
  const [showModal, setShowModal] = useState(false);

  const alias = "mi.alias.banco"; // 👈 tu alias real
  const cbu = "0123456789012345678901"; // 👈 tu cbu real

  return (
    <Container className="regalosContainr">
      <h2>Regalos</h2>
      <p>Si deseas regalarme algo más que tu hermosa presencia...</p>
      <img src={regalosIcon} alt="" />
      <button onClick={() => setShowModal(true)}>CBU/ALIAS</button>

      {showModal && (
        <ModalCBU
          onClose={() => setShowModal(false)}
          alias={alias}
          cbu={cbu}
        />
      )}
    </Container>
  );
};

export default Regalos;
