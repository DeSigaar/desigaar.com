import React, { Component } from "react";

import { SplashContent } from "../components/common";

export default class Kiwi extends Component {
  render() {
    return (
      <>
        <SplashContent title="De Sigaar x Kiwi" image="DeSigaar-Kiwi" />
        <main>
          <div className="row">
            <p>
              De samenwerking tussen De Sigaar en Kiwi is tot stand gekomen nadat beide groepen hun wapens hebben
              neergelegd. Eerst waren de groepen argwanend naar elkaar en wisten ze niet wat ze aan elkaar hadden. Heden
              zijn ze naar elkaar toe gegroeid, hebben ze hun scheidingsmuur verwijderd en zijn ze voor onbepaalde tijd
              een samenwerkingsverband aangegaan om hun krachten te bundelen. Dit resulteert in een prettige werksfeer
              voor beide groepen, waar naast een serieuze uitdagende ambiance ook tijd is voor een grapje of grolletje
              tussendoor. Dit alles zorgt voor een fijne dynamiek en maakt dat deze groepen door dit
              samenwerkingsverband het beste uit henzelf en uit de samenwerking kunnen halen.
            </p>
            <img src="../assets/images/kiwi.jpg" alt="Kiwi logo" className="sideImage rounded" />
          </div>
        </main>
      </>
    );
  }
}
