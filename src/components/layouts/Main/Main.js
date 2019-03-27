import React from "react";
import SliderMain from "../../Slider";
import Footer from "../../Footer";
import Slider from "react-slick";

import "./style.css";

const Main = props => {
  const settingsPartners = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 500,
    pauseOnHover: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0
  };
  const settingsNews = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0
  };

  return (
    <div>
      <SliderMain photo />
      <div className="static-info-about">
        <div className="static-info-about-item">
          <i className="fas fa-tasks" />
          <h2>Розвиток</h2>
          <p>
            лекторії, тренінги, майстер-класи, профорієнтація, підприємництво,
            стажування, неформальна освіта
          </p>
        </div>
        <div className="static-info-about-item">
          <i className="fas fa-users" />
          <h2>Менторство</h2>
          <p>
            підтримка та супровід ваших проектів, допомога з менеджментом,
            фандрайзинг, створенням бюджету, комунікація
          </p>
        </div>
        <div className="static-info-about-item">
          <i className="fas fa-laptop" />
          <h2>Ресурси</h2>
          <p>організаційна, матеріально-технічна та інформаційна підтримка</p>
        </div>
        <div className="static-info-about-item">
          <i className="fas fa-check-double" />
          <h2>Адвокація</h2>
          <p>
            представництво та захист інтересів, просування ідей, допомога у
            подоланні бюрократичних перешкод
          </p>
        </div>
      </div>
      <div className="news-content">
        <h2 className="content-section-title">Новини молодіжного центру</h2>
        <Slider {...settingsNews} className="slider-news">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((el, index) => {
            return (
              <div key={index} className="slider-news-item">
                <a href="/">
                  <img
                    src="./images/city.jpg"
                    className="slider-news-image"
                    alt="Партнери"
                  />
                </a>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="statistic-wrap">
        <div className="statistic-info">
          <img src="./images/people.jpg" alt="Люди" />
          <p className="statistic-info-text">
            <span className="black-color">Розвиваємо нове покоління </span>
            ініціативної молоді, небайдужої до життя міста та країни
            <br />
            <i>
              Підтримуємо молодіжні ініціативи та пропонуємо можливості
              неформальної освіти
            </i>
          </p>
        </div>
        <div className="statistic-about">
          <h2 className="content-section-title">ПРО МОЛОДІЖНИЙ ЦЕНТР</h2>
          <p>
            Чернігівський молодіжний центр комунальна установа виконавчого
            органу Чернігівської міської державної адміністрації.
          </p>
          <div className="statistic-about-numbers">
            <div className="statistic-about-numbers-item">
              <h3 className="dark-blue-color">25</h3>
              <p>РОКІВ ДОСВІДУ</p>
            </div>
            <div className="statistic-about-numbers-item">
              <h3 className="dark-blue-color">259</h3>
              <p>ПОСТІЙНИХ ПАРТНЕРІВ</p>
            </div>
            <div className="statistic-about-numbers-item">
              <h3 className="dark-blue-color">300</h3>
              <p>ПРОЕКТІВ ЩОРІЧНО</p>
            </div>
            <div className="statistic-about-numbers-item">
              <h3 className="dark-blue-color">30 000</h3>
              <p>УЧАСНИКІВ</p>
            </div>
          </div>
        </div>
      </div>
      <div className="news">
        <h2 className="content-section-title">Анонси</h2>
        <Slider {...settingsNews} className="slider-news">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((el, index) => {
            return (
              <div key={index} className="slider-news-item">
                <a href="/">
                  <img
                    src="./images/city.jpg"
                    className="slider-news-image"
                    alt="Партнери"
                  />
                </a>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="partners">
        <h2 className="content-section-title">Наші партнери</h2>
        <Slider {...settingsPartners} className="slider-partners">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((el, index) => {
            return (
              <div key={index} className="slider-partners-item">
                <a href="/">
                  <img
                    src="./images/boul.jpg"
                    className="slider-partners-image"
                    alt="Партнери"
                  />
                </a>
              </div>
            );
          })}
        </Slider>
      </div>
      {/* <div className="wrap" /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
