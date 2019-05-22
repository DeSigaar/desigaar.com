import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Button } from "../common";

export default class NavBar extends Component {
  static propTypes = {
    image: PropTypes.string,
    name: PropTypes.string
  };

  static defaultProps = {
    image: "DeSigaar-Sigaar",
    name: "De Sigaar"
  };

  render() {
    const { image, name } = this.props;

    return (
      <div className="navbar">
        <div className="container">
          <nav>
            <Link to="/" className="logo">
              <img
                src={require(`../../assets/vectors/${image}.svg`)}
                onError={() => (this.src = `../../assets/images/${image}.png`)}
                alt={image}
              />
              <div>{name}</div>
            </Link>
            <div>
              <Link to="/#about" className="menuLink">
                <span>About</span>
              </Link>
              <Link to="/#projects" className="menuLink">
                <span>Projects</span>
              </Link>
              <Link to="/#family" className="menuLink marginRight">
                <span>Family</span>
              </Link>
              <Button to="/#contact" title="Contact" />
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
