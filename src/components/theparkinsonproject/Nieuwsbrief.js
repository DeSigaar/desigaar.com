import React, { Component } from "react";

import Swal from "sweetalert2";

export default class Nieuwsbrief extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };
  }

  render() {
    const { email } = this.state;

    return (
      <div id="nieuwsbrief">
        <div>
          <h1>Schrijf je in voor de nieuwsbrief</h1>
          <p>
            Blijf op de hoogte van de nieuwste ontwikkelingen, functionaliteiten
            en nieuwtjes!
          </p>
          <form
            onSubmit={e => {
              e.preventDefault();
              if (email)
                Swal.fire({
                  title: "Helaas!",
                  text: `We doen nog niks met je email (${email}) want we hebben nog geen nieuwsbrief!`,
                  type: "info",
                  showConfirmButton: false,
                  toast: true,
                  position: "top-right",
                  timer: 5000
                });
              else
                Swal.fire({
                  title: "Voer een email in!",
                  type: "error",
                  showConfirmButton: false,
                  toast: true,
                  position: "bottom",
                  timer: 2500
                });
            }}
          >
            <input
              type="email"
              placeholder="Email..."
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <input type="submit" value="Aanmelden" />
          </form>
        </div>
        <footer>
          <div className="container">
            <div>
              &#169; {new Date().getFullYear()}, Alle rechten voorbehouden The
              Parkinson Project
            </div>
            <div>
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
                <span>Algemene voorwaarden</span>
              </a>
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
                <span>Privacybeleid</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
