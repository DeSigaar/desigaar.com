import React, { Component } from "react";
import PropTypes from "prop-types";

import { NavBar, SplashContent } from "../common";

import { Divider } from "../../assets/vectors";

export default class Splash extends Component {
  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    divider: PropTypes.number
  };

  static defaultProps = {
    title: "De Sigaar",
    image: "DeSigaar-Sigaar",
    divider: 1
  };

  render() {
    const { title, image, divider } = this.props;
    return (
      <div className="splash">
        <NavBar image={image} />
        <SplashContent title={title} />
        <Divider type={divider} />
      </div>
    );
  }
}
