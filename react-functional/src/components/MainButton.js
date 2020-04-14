import React from 'react';

// css
import '../assets/css/components/MainButton.scss';

function MainButton(props) {
  return <button className="MainButton" onClick={ props.action }>{ props.text }</button>
}

export default MainButton;