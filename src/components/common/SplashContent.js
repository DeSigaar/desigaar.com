import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SplashContent extends Component {
  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.string
  };

  render() {
    const { title, image } = this.props;
    return (
      <div className="content container">
        <div>
          {image && (
            <img
              src={require(`../../assets/vectors/${image}.svg`)}
              onError={() => (this.src = `../../assets/images/${image}.png`)}
              alt={image}
            />
          )}
          {title && <h1>{title}</h1>}
        </div>
      </div>
    );
  }
}
