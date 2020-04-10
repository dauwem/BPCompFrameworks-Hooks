import React from 'react';

// css
import '../assets/css/components/MainDropdown.scss';

function MainDropdown(props) {
  return props.data && (
    <select className="MainDropdown" onChange={ (event) => props.onChange(event.target.value) }>
      {
        props.data.data.map(country => {
          return <option key={ country.ISO2 } value={ country.Slug }>{ country.Country }</option>;
        })
      }
    </select>
  )
}

export default MainDropdown;