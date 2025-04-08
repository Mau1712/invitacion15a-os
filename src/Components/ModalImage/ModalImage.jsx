

const ModalImage = ({ onClose, imageSrc, altText }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ padding: "0", backgroundColor: "transparent" }}>
        <img
          src={imageSrc}
          alt={altText}
          style={{ width: "100%", borderRadius: "8px" }}
        />
        <button onClick={onClose} style={{ marginTop: "1rem" }}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalImage;
