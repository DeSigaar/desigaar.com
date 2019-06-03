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
              De app is zo gemaakt dat het duidelijk en overzichtelijk is voor
              iedereen. Dit is belangrijk zodat Parkinsonpatiënten makkelijk de
              app kunnen gebruiken maar ook de omgeving van de Parkinsonpatiënt
            </p>
            <p>
              We maken gebruik van een consistent design en gecategoriseerde
              kleuren. Het schema zorgt ervoor dat de gebruiker een duidelijk
              beeld hebt van alle activiteiten door de dag heen.
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
              Bij de community kun je hulp krijgen van verschillende andere
              Parkinsonpatiënten. Binnen deze community kan je vragen stellen of
              beantwoorden.
            </p>
            <p>
              Je kan hier samen met andere Parkinsonpatiënten samen discussiëren
              over problemen waar je tegenaan loopt, hulpmiddelen die je wilt
              delen, etc.
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
