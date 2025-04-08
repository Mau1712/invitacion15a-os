import { FaRegCopy } from "react-icons/fa"; // 👈 Importamos el ícono de copiar

const ModalCBU = ({ onClose, alias, cbu }) => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("Copiado al portapapeles ✅");
      })
      .catch((err) => {
        console.error("Error al copiar: ", err);
      });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Datos bancarios</h2>

        <div style={{ marginBottom: "1rem" }}>
          <p><strong>Alias:</strong></p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
            <span>{alias}</span>
            <FaRegCopy
              style={{ cursor: "pointer" }}
              onClick={() => handleCopy(alias)}
            />
          </div>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <p><strong>CBU:</strong></p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
            <span>{cbu}</span>
            <FaRegCopy
              style={{ cursor: "pointer" }}
              onClick={() => handleCopy(cbu)}
            />
          </div>
        </div>

        <button onClick={onClose} style={{ marginTop: "1rem" }}>Cerrar</button>
      </div>
    </div>
  );
};

export default ModalCBU;
