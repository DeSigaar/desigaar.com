import React, { Component } from "react";

import Swal from "sweetalert2";

export default class Header extends Component {
  render() {
    return (
      <header id="#thuis">
        <nav>
          <div className="left">
            <a href="#thuis">
              <img
                src={require("../../assets/vectors/theparkinsonproject/Logo.svg")}
                className="logo"
              />
            </a>
          </div>
          <div className="right">
            <a href="#over">
              <span>Over</span>
            </a>
            <a href="#probeer">
              <span>Probeer</span>
            </a>
            <a href="#functies">
              <span>Functies</span>
            </a>
            <a href="#nieuwsbrief" className="specialButton">
              Nieuwsbrief
            </a>
          </div>
        </nav>
        <img
          src={require("../../assets/vectors/theparkinsonproject/Block1.svg")}
          className="blocks topLeftBlock"
        />
        <img
          src={require("../../assets/vectors/theparkinsonproject/Block2.svg")}
          className="blocks topRightBlock"
        />
        <div className="container">
          <h1>Parkinson is al moeilijk genoeg</h1>
          <p>
            Door het gebruik van The Parkinson Project app ga je jezelf helpen
            om het makkelijker te maken!
          </p>
          <div className="getOn">
            <img
              src={require("../../assets/images/theparkinsonproject/google-play-badge.png")}
              alt="Get it on Google Play"
              className="getApp android"
              onClick={() =>
                Swal.fire({
                  title: "Helaas!",
                  text:
                    "We zijn nog bezig met het innoveren en hebben nog geen Google Play store app.",
                  type: "info",
                  showConfirmButton: false,
                  toast: true,
                  position: "top-right",
                  timer: 5000
                })
              }
            />
            <img
              src={require("../../assets/vectors/theparkinsonproject/AppStore.svg")}
              alt="Download on the App Store"
              className="getApp"
              onClick={() =>
                Swal.fire({
                  title: "Helaas!",
                  text:
                    "We zijn nog bezig met het innoveren en hebben nog geen App Store app.",
                  type: "info",
                  showConfirmButton: false,
                  toast: true,
                  position: "top-right",
                  timer: 5000
                })
              }
            />
          </div>
        </div>
      </header>
    );
  }
}
