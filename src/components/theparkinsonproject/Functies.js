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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
