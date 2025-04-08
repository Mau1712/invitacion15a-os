import React from "react";
import { Container } from "react-bootstrap";
import camera from "../../assets/icons/1.png";
import imgTest from "../../assets/carousel/imgTest.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import "./recordatorio.css";

const Recordatorio = () => {
  return (
    <Container>
      <Container className="recordatorioTittle">
        <h2>Un recorrido de estos 15 años</h2>
        <p>Junto a personas que son muy importantes en mi vida</p>
        <img src={camera} alt="" />
      </Container>

      <Container className="swiperContainer">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}

          breakpoints={{
            0: {
              slidesPerView: 1, // 1 slide para móviles pequeños
            },
            768: {
              slidesPerView: 2, // 2 slides para tablets
            },
            992: {
              slidesPerView: 3, // 3 slides para desktops
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={imgTest} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgTest} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgTest} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgTest} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgTest} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgTest} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgTest} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgTest} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgTest} alt="" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Container>
  );
};

export default Recordatorio;
