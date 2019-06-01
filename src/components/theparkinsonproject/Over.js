import React, { Component } from "react";

import Swal from "sweetalert2";

export default class Over extends Component {
  render() {
    return (
      <div id="over" className="overContainer">
        <section className="left">
          <img
            src={require("../../assets/vectors/theparkinsonproject/Over1.svg")}
          />
          <div>
            <h1>Gemakkelijk overzicht</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua accusam justo.
            </p>
            <p>
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur.
            </p>
            <a
              onClick={() =>
                Swal.fire({
                  title: "Helaas!",
                  text: "Deze link gaat nergens naartoe.",
                  type: "warning",
                  showConfirmButton: false,
                  toast: true,
                  position: "top-right",
                  timer: 5000
                })
              }
            >
              Lees meer
            </a>
          </div>
        </section>
        <section className="right">
          <div>
            <h1>Hulp van anderen</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua accusam justo.
            </p>
            <p>
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur.
            </p>
            <a
              onClick={() =>
                Swal.fire({
                  title: "Helaas!",
                  text: "Deze link gaat nergens naartoe.",
                  type: "warning",
                  showConfirmButton: false,
                  toast: true,
                  position: "top-right",
                  timer: 5000
                })
              }
            >
              Lees meer
            </a>
          </div>
          <img
            src={require("../../assets/vectors/theparkinsonproject/Over2.svg")}
          />
        </section>
        <div className="colored" />
      </div>
    );
  }
}
