import "./Modal.css";
import { useState } from "react";

const Modal = ({ onClose, title, placeholder, getMessage }) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name.trim() === "") return;

    const message = getMessage(name);
    const phoneNumber = "5491155240616";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}> {/* 👈 click en el overlay */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* 👈 evita cierre si click en contenido */}
        <h2>{title}</h2>
        <input
          type="text"
          placeholder={placeholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSubmit}>Enviar</button>
      </div>
    </div>
  );
};

export default Modal;
