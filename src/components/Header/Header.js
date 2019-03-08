import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Header = props => {
  return (
    <header>
      <div className="social-header">
        <div>
          <i className="fas fa-phone-volume" />
          <p className="contact-header">+38 (000) 000-00-00</p>
        </div>
        <div>
          <i className="fas fa-envelope" />
          <p className="contact-header">mail@mail.com</p>
        </div>
        <ul>
          <li>
            <a href="https://www.facebook.com/all4youth.cn">
              <img
                className="social-icons"
                src="./icons/facebook.svg"
                alt="facebook"
              />
            </a>
          </li>
          <li>
            <a href="">
              <img
                className="social-icons"
                src="./icons/instagram.svg"
                alt="instagram"
              />
            </a>
          </li>
          <li>
            <a href="">
              <img
                className="social-icons"
                src="./icons/telegram.svg"
                alt="telegram"
              />
            </a>
          </li>
          <li>
            <a href="">
              <img
                className="social-icons"
                src="./icons/google.svg"
                alt="google"
              />
            </a>
          </li>
        </ul>
      </div>
      <nav>
        <Link to="/">
          <img
            src="./images/logo.svg"
            alt="На головну"
            className="logo-header"
          />
        </Link>
        <ul className="nav-link-wrapper">
          <li>
            <Link to="/about" className="nav-link">
              Про нас
            </Link>
          </li>
          <li>
            <Link to="/news" className="nav-link">
              Новини центру
            </Link>
          </li>
          <li>
            <Link to="/foryou" className="nav-link">
              Для тебе
            </Link>
          </li>
          <li>
            <Link to="/calendar" className="nav-link">
              Календар подій
            </Link>
          </li>
          <li>
            <Link to="/media" className="nav-link">
              Медіа
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
