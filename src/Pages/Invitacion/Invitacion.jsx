import { Container } from "react-bootstrap";
import imgHome from "../../assets/imgHome.png";
import comillas from "../../assets/comillas.png";
import comillas2 from "../../assets/comillas2.png";
import fotoChica from "../../assets/fotoChica.png";
import divider from "../../assets/divider.png";

import "./Invitacion.css";
import Counter from "../../Components/Counter/Counter";
import FiestaUno from "../../Components/FiestaUno/FiestaUno";
import Recordatorio from "../../Components/Recordatorio/Recordatorio";
import FiestaDos from "../../Components/FiestaDos/FiestaDos";
import Regalos from "../../Components/Regalos/Regalos";
import Footer from "../../Components/Footer/Footer";

const Invitacion = () => {
  return (
    <>
      <Container className="invitacionContainerFather">
        <div className="invitacionContent">
          <div className="imgBox">
            <img src={fotoChica} alt="" />
          </div>

          <div className="infoBox">
            <div className="imgIfoBox">
              <img src={imgHome} alt="" />
            </div>

            <div className="dateBox">
              <div className="borderDateBox"></div>
              <p>24-10-2025</p>
            </div>

            <div className="titlleBoxInv">
              <h2>Carolina</h2>
              <h4>Mis 15 años</h4>

              <p>
                <img src={comillas2} alt="" />
                <br />
                Te espero para compartir la alegría de esa noche que será para
                mi mágica, inolvidable y única.
                <br />
                <img src={comillas} alt="" />
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Counter />

      <FiestaUno />

      <Container>
        <img
          style={{ width: "100%", maxWidth: "1100px", padding: "35px" }}
          src={divider}
          alt=""
        />
      </Container>

      <Recordatorio />

      <Container>
        <img
          style={{ width: "100%", maxWidth: "1100px", padding: "10px 35px" }}
          src={divider}
          alt=""
        />
      </Container>

      <FiestaDos />

      <Container>
        <img
          style={{ width: "100%", maxWidth: "1100px", padding: "10px 35px" }}
          src={divider}
          alt=""
        />
      </Container>

      < Regalos />

      < Footer />
    </>
  );
};

export default Invitacion;
