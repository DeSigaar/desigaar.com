import React, { Component } from "react";

import "../scss/App.scss";

import { SEO } from "../components/common";
import {
  Header,
  Over,
  Probeer,
  Functies,
  Nieuwsbrief
} from "../components/theparkinsonproject";

export default class TheParkinsonProject extends Component {
  render() {
    return (
      <div id="TheParkinsonProject">
        <SEO
          lang="nl"
          title="The Parkinson Project"
          description="The Parkinson Project verbetert het leven van mensen met Parkinson"
        />
        <Header />
        <div className="rest">
          <img
            src={require("../assets/vectors/theparkinsonproject/Mockup.svg")}
            className="mockup"
          />
          <Over />
          <Probeer />
          <Functies />
          <Nieuwsbrief />
        </div>
      </div>
    );
  }
}
