import React, { Component } from 'react';

// css
import '../assets/css/components/MainDropdown.scss';

export default class MainDropdown extends Component {
  render() {
    return this.props.data && (
      <select className="MainDropdown" onChange={ (event) => this.props.onChange(event.target.value) }>
        <option value="default">Select a country</option>
        {
          this.props.data.data.map(country => {
            return <option key={ country.ISO2 } value={ `${ country.Slug },${ country.ISO2 }` }>{ country.Country }</option>;
          })
        }
      </select>
    );
  }
}