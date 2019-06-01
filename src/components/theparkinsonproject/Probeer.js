import React, { Component } from "react";

import Swal from "sweetalert2";

export default class Probeer extends Component {
  render() {
    return (
      <div id="probeer">
        <h1>Probeer de gratis app</h1>
        <p>Na het proberen blijft hij ook gewoon gratis!</p>
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
    );
  }
}
