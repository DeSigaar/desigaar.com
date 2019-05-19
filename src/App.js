import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./scss/App.css";

import Home from "./pages/Home";
import Kiwi from "./pages/Kiwi";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/kiwi/" component={Kiwi} />
            <Route exact path="/" component={Home} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
