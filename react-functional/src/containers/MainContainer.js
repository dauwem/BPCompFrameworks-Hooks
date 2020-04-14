import React from 'react';

// css
import '../assets/css/containers/MainContainer.scss';

function MainContainer(props) {
  return (
    <div className="MainContainer">
      { props.children }
    </div>
  );
}

export default MainContainer;