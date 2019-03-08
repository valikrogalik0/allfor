import React from "react";

import "./style.css";

const Footer = props => {
  return (
    <div className="social-wrapper">
      <ul className="social-ul">
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
  );
};

export default Footer;
