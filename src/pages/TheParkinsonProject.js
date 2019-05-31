import React, { Component } from "react";

import "../scss/App.scss";

import { SEO } from "../components/common";

export default class TheParkinsonProject extends Component {
  render() {
    return (
      <div id="TheParkinsonProject">
        <SEO
          lang="nl"
          title="The Parkinson Project"
          description="The Parkinson Project verbetert het leven van mensen met Parkinson"
        />
        <img
          src={require("../assets/images/website.png")}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    );
  }
}
