import React, { Component } from 'react';

// css
import '../assets/css/components/MainButton.scss';

export default class MainButton extends Component {
  render() {
    return <button className="MainButton" onClick={ this.props.action }>{ this.props.text }</button>;
  }
}