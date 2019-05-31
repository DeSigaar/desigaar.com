import React, { Component } from "react";

import "../scss/App.scss";

import { Splash } from "../components/home";
import { SEO } from "../components/common";

export default class Home extends Component {
  render() {
    return (
      <div id="Home">
        <SEO />
        <Splash />
        <main>
          <section className="container">
            <h1>About</h1>
            <p>About De Sigaar</p>
          </section>
          <section className="container">
            <h1>Projects </h1>
            <p>list of projects</p>
          </section>
          <section className="container">
            <h1>Family</h1>
            <p>expanding our family with kiwi</p>
          </section>
          <section className="container">
            <h1>Contact</h1>
            <p>contact us at info@desigaar.com</p>
          </section>
        </main>
      </div>
    );
  }
}
