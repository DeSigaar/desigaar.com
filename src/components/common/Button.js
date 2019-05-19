import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Button extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

  render() {
    const { to, title } = this.props;
    return (
      <Link to={to} className="coolButton">
        <span>{title}</span>
      </Link>
    );
  }
}
