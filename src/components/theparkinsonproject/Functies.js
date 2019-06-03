import React, { Component } from "react";

export default class Functies extends Component {
  render() {
    return (
      <div id="functies">
        <div className="container">
          <div>
            <h1>App functionaliteiten</h1>
            <p>Een overzicht van alles wat de app te bieden heeft.</p>
          </div>
          <div className="functies">
            <div>
              <img
                src={require("../../assets/vectors/theparkinsonproject/Box-Medicijnen.svg")}
                alt="Medicijnen"
              />
              <div>
                <h2>Medicijnen bijhouden</h2>
                <p>
                  Houd bij welke medicatie je moet innemen en pas dit aan
                  wanneer nodig.
                </p>
              </div>
            </div>
            <div>
              <img
                src={require("../../assets/vectors/theparkinsonproject/Box-Community.svg")}
                alt="Community"
              />
              <div>
                <h2>Community</h2>
                <p>
                  Praat met andere Parkinsonpatiënten over je problemen of
                  oplossingen en help elkaar.
                </p>
              </div>
            </div>
            <div>
              <img
                src={require("../../assets/vectors/theparkinsonproject/Box-Oefeningen.svg")}
                alt="Oefeningen"
              />
              <div>
                <h2>Oefeningen inplannen</h2>
                <p>
                  Plan in wanneer je je oefeningen wilt doen en neem initiatief
                  om de oefening te doen.
                </p>
              </div>
            </div>
            <div>
              <img
                src={require("../../assets/vectors/theparkinsonproject/Box-TipsnTricks.svg")}
                alt="Tips & Tricks"
              />
              <div>
                <h2>Tips & Tricks</h2>
                <p>
                  Bekijk verschillende tips & tricks die je kunnen helpen met
                  Parkinson.
                </p>
              </div>
            </div>
            <div>
              <img
                src={require("../../assets/vectors/theparkinsonproject/Box-Activiteiten.svg")}
                alt="Activiteiten"
              />
              <div>
                <h2>Meedoen aan activiteiten</h2>
                <p>
                  Neem deel aan activiteiten met andere Parkinsonpatiënten zoals
                  bijvoorbeeld een Parkinson Café.
                </p>
              </div>
            </div>
            <div>
              <img
                src={require("../../assets/vectors/theparkinsonproject/Box-Overzicht.svg")}
                alt="Overzicht"
              />
              <div>
                <h2>Gemakkelijk overzicht</h2>
                <p>
                  Bekijk wat je allemaal te doen hebt door de dag heen en zorg
                  voor een goede planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
