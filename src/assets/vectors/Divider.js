import React, { Component } from "react";
import PropTypes from "prop-types";

import { Divider1 } from "./";

export default class Divider extends Component {
  static propTypes = {
    divider: PropTypes.number
  };

  static defaultProps = {
    divider: 1
  };

  render() {
    const { divider } = this.props;

    switch (divider) {
      default:
      case 1:
        return <Divider1 />;
    }
  }
}
