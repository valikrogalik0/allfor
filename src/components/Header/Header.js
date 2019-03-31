import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

// const displayDropDownList = event => {
//   const sibling = event.currentTarget.nextSibling;
//   const { top, right, bottom } = event.currentTarget.getBoundingClientRect();
//   sibling.style.top = bottom;
//   sibling.style.right = right;
//   sibling.classList.add("drop-down-list-active");
// };
// const hoverDropDownList = event => {
//   event.currentTarget.nextSibling.classList.remove("drop-down-list-active");
// };
// const hoverDropDownListUl = event => {
//   event.currentTarget.classList.remove("drop-down-list-active");
// };

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
            <a href="/about" className="nav-link">
              Про нас <span className="font">▼</span>
            </a>
            <ul className="drop-down-list">
              <li>
                <Link to="/">Хто ми і що ми робимо</Link>
              </li>
              <li>
                <Link to="/">Центр із середини</Link>
              </li>
              <li>
                <Link to="/">Наші послуги</Link>
              </li>
              <li>
                <Link to="/">Тендери</Link>
              </li>
              <li>
                <Link to="/">Звіти</Link>
              </li>
              <li>
                <Link to="/contacts">Контакти</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/news" className="nav-link">
              Новини центру
            </Link>
          </li>
          <li>
            <a href="/foryou" className="nav-link">
              Для тебе <span className="font">▼</span>
            </a>
            <ul className="drop-down-list">
              <li>
                <Link to="/">Чому волонтерство це круто?</Link>
              </li>
              <li>
                <Link to="/">Історії успіху</Link>
              </li>
              <li>
                <Link to="/">Як стати волонтером центру</Link>
              </li>
              <li>
                <Link to="/">Задати питання</Link>
              </li>
              <li>
                <Link to="/">Актуальні конкурси та програми</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/calendar" className="nav-link">
              Календар подій
            </Link>
          </li>
          <li>
            <a href="/media" className="nav-link">
              Медіа <span className="font">▼</span>
            </a>
            <ul className="drop-down-list">
              <li>
                <Link to="/">Фотогалерея</Link>
              </li>
              <li>
                <Link to="/">Відео</Link>
              </li>
              <li>
                <Link to="/">Бібліотека</Link>
              </li>
              <li>
                <Link to="/">Корисні посилання</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
