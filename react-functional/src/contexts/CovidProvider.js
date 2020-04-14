import React, { useState } from 'react';

export const CovidContext = React.createContext();

export function CovidProvider(props) {
  const [countries, setCountries] = useState(null);

  return (
    <CovidContext.Provider value={{
      countries,
      setCountries:(value) => setCountries(value)
    }}>
      { props.children }
    </CovidContext.Provider>
  );
}