import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const NewsCard = props => {
  const { title, photo, id, text } = props;
  console.log(id)
  return (
    <div className="news-card-wrap">
      <div className="news-card-img">
        <img src={photo} alt="Зображення" />
      </div>
      <div className="news-card-info">
        <Link to={`/news/:${id}`} className="news-card-title">
          <h3>{title}</h3>
        </Link>
        <p>{text.substr(0, 500)}...</p>
        <Link to={`/news/:${id}`} className="news-card-more">Детальніше</Link>
      </div>
    </div>
  );
};

export default NewsCard;
