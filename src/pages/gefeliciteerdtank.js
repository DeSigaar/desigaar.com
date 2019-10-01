import React, { Component } from "react";

import P5Wrapper from "react-p5-wrapper";
import sketch from "../assets/p5/tank";

import "../scss/App.scss";
import "../scss/gefeliciteerdtank.css";

import { SEO } from "../components/common";

export default class GefeliciteerdTank extends Component {
  render() {
    return (
      <>
        <SEO title="Evert & Marjolein gefeliciteerd!" />
        <P5Wrapper sketch={sketch} />
        <header>
          <h1>Evert & Marjolein gefeliciteerd!</h1>
          <div className="logo">
            <span>Groetjes, De Sigaar</span>
            <img
              src={require("../assets/images/DeSigaar-Sigaar.png")}
              alt="De Sigaar logo"
              className="vectorLogo"
            />
          </div>
        </header>
      </>
    );
  }
}
