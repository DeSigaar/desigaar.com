import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SplashContent extends Component {
  static propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    image: PropTypes.string
  };

  render() {
    const { title, subTitle, image } = this.props;
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
          {subTitle && <h4>{subTitle}</h4>}
        </div>
      </div>
    );
  }
}
