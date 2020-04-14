import React, { Component } from 'react';

// css
import '../assets/css/components/Title02.scss';

export default class Title02 extends Component {
  render() {
    return <h2>{ this.props.title }</h2>;
  }
}