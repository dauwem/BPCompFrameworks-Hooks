import React, { Component } from 'react';

// css
import '../assets/css/containers/MainContainer.scss';

export default class MainContainer extends Component {
  render() {
    return (
      <div className="MainContainer">
        { this.props.children }
      </div>
    );
  }
}