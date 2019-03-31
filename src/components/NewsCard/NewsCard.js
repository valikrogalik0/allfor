import React from "react";
import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { compose } from 'recompose';
import { news } from '../../actions'

import "./style.css";

const NewsCard = props => {
  const { date, title, photoURL, id, text, dispatch } = props;
  return (
    <div className="news-card-wrap">
      <div className="news-card-img">
        <img src={photoURL} alt="Зображення" />
      </div>
      <div className="news-card-info">
        <div className='news-card-date'>{date}</div>
        <Link 
          onClick={() => dispatch(news({
              title,
              photoURL,
              text,
              id,
            }))}
          to={`/news/${id}`}
          className="news-card-title">
            <h3>{title}</h3>
        </Link>
        <p className='news-card-text'>{text.substr(0, 500)}...</p>
        <Link
          onClick={() => dispatch(news({title, photoURL, text, id}))}
          to={`/news/${id}`}
          className="news-card-more">
            Детальніше
          </Link>
      </div>
    </div>
  );
};

export default compose(connect((state, ownProps) => state))(NewsCard);