import React, { Component } from "react";
import PropTypes from "prop-types";

import { NavBar, SplashContent } from "./";

import { Divider } from "../../assets/vectors";

export default class Splash extends Component {
  static propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    divider: PropTypes.number
  };

  static defaultProps = {
    title: "De Sigaar",
    subTitle: "Welcome to our place on the internet",
    image: "DeSigaar-Sigaar",
    name: "De Sigaar",
    divider: 1
  };

  render() {
    const { title, subTitle, image, name, divider } = this.props;

    return (
      <div className="splash">
        <NavBar image={image} name={name} />
        <SplashContent title={title} subTitle={subTitle} />
        <Divider divider={divider} />
      </div>
    );
  }
}
