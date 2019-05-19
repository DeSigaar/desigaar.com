import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Splash } from "../components/common";

export default class Home extends Component {
  render() {
    return (
      <>
        <Splash />
        <main className="centered desigaar">
          <div className="row">
            <div>
              <h2>De Sigaar Family</h2>
              <ul>
                <li>
                  <Link to="/kiwi/">
                    <span>Kiwi</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2>GitHub</h2>
              <ul>
                <li>
                  <a href="https://github.com/de-sigaar/">
                    <span>de-sigaar</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2>Email</h2>
              <ul>
                <li>
                  <a href="mailto:info@desigaar.com">
                    <span>info@desigaar.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </>
    );
  }
}
