import React, { Component } from "react";
import PropTypes from "prop-types";

import { Divider1, Divider2, Divider3 } from "./";

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
      case 2:
        return <Divider2 />;
      case 3:
        return <Divider3 />;
    }
  }
}
