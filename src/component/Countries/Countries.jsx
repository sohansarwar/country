import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, []);
  
  return (
    <div className='grid'>
      {
        countries.map(country => <Country country={country} key={country.cca2}></Country>)
      }
    </div>
  );
};

export default Countries;