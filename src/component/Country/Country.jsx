import React from 'react';
import './Country.css'

const Country = props => {
  const { name, capital, cca2 } = props.country;
  // console.log(props);
  
  const eventListener = props => {
    console.log(props);
    setLS(props);
  }
  const setLS = id => {
  }

  return (
    <div>
      {/* <h1>Name: {name.common}</h1>
      <h2>Capital: {capital}</h2> */}
      <p>{cca2}</p>
      <button className='button' onClick={() => eventListener(cca2)}>SetToLS</button>
    </div>
  );
};

export default Country;