import React, { Component } from 'react';

// css
import '../assets/css/components/Title03.scss';

export default class Title03 extends Component {
  render() {
    return <h3>{ this.props.title }</h3>;
  }
}