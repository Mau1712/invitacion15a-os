import React, { useState, useEffect } from "react";
import "./Counter.css";
import { Container } from "react-bootstrap";
import marcoCounter from "../../assets/marcoCounter.png";
import cora from "../../assets/cora.png";
import flower2 from "../../assets/flower2.png";

const Counter = () => {
  // Establece una fecha objetivo específica (modifícala según tus necesidades)
  const [targetDate] = useState(new Date("2025-06-15T00:00:00"));

  // Función que calcula el tiempo restante en días, horas, minutos y segundos
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let days = 0,
      hours = 0,
      minutes = 0,
      seconds = 0;

    if (difference > 0) {
      days = Math.floor(difference / (1000 * 60 * 60 * 24));
      hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((difference % (1000 * 60)) / 1000);
    }

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <Container className="conterFather">
      <Container className="containerContent">
        <img src={flower2} alt="" />

        <Container className="timerContainer">
          <div>
            <h2 style={{ margin: "0px" }}>Falta</h2>
          </div>

          <div className="timerTimes">
            <div className="timeBox">
              <span className="timeValue">{timeLeft.days}</span>
              <span className="timeLabel">días</span>
            </div>
            <div className="timeBox">
              <span className="timeValue">{timeLeft.hours}</span>
              <span className="timeLabel">hs</span>
            </div>
            <div className="timeBox">
              <span className="timeValue">{timeLeft.minutes}</span>
              <span className="timeLabel">min</span>
            </div>
            <div style={{ border: "none" }} className="timeBox">
              <span className="timeValue">{timeLeft.seconds} </span>
              <span className="timeLabel">seg</span>
            </div>
          </div>

          <div>
            <img src={cora} alt="" />
          </div>
        </Container>
      </Container>
    </Container>
  );
};

export default Counter;

{
  /* <div className="timer">
<div>
  <h2 style={{margin: "0px"}}>Falta</h2>
</div>

<div className="timerTimes">
  <div className="timeBox">
    <span className="timeValue">{timeLeft.days}</span>
    <span className="timeLabel">días</span>
  </div>
  <div className="timeBox">
    <span className="timeValue">{timeLeft.hours}</span>
    <span className="timeLabel">hs</span>
  </div>
  <div className="timeBox">
    <span className="timeValue">{timeLeft.minutes}</span>
    <span className="timeLabel">min</span>
  </div>
  <div style={{ border: "none" }} className="timeBox">
    <span className="timeValue">{timeLeft.seconds} </span>
    <span className="timeLabel">seg</span>
  </div>
</div>

<img src={cora} alt="" />
</div> */
}
