import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";

import { Carousel } from "react-bootstrap";

import "./style.css";

class Slider extends Component {
  render() {
    const { photo } = this.props.photo;
    return (
      <div className="slider-wrapper">
        <Carousel
          className="slider-element"
          controls={false}
          interval="3500"
          pauseOnHover={false}
        >
          {photo.map((photo, index) => {
            return (
              <Carousel.Item key={index}>
                <img className="slider-image" src={photo} alt="Зображення" />
                <Carousel.Caption>
                  <h3>Capture</h3>
                  <p>Some text</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default compose(connect((state, ownProps) => state))(Slider);
