import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Splash } from "../components/common";

export default class Home extends Component {
  render() {
    return (
      <>
        {/* Add Helmet */}
        <Splash />
        <main>
          <section className="container">
            <h1>About</h1>
            <p>Who are these &apos;Sigaren&apos; and what do they do? You might as well continue reading</p>
          </section>
          <section className="container">
            <h1>Projects</h1>
            <p>What kind of projects did you guys do? They are down here!</p>
            <a href="https://github.com/de-sigaar/">
              <span>de-sigaar</span>
            </a>
          </section>
          <section className="container">
            <h1>Family</h1>
            <p>Seems we have expanded within 9 months? Check our family</p>
            <Link to="/kiwi/">
              <span>Kiwi</span>
            </Link>
          </section>
          <section className="container">
            <h1>Contact</h1>
            <p>Interested in contacting us? Go ahead!</p>
            <a href="mailto:info@desigaar.com">
              <span>info@desigaar.com</span>
            </a>
          </section>
        </main>
      </>
    );
  }
}
