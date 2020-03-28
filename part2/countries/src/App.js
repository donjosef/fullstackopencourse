import React, {useState, useEffect}  from 'react';
import FilterCountries from './components/FilterCountries';
import CountryDetails from './components/CountryDetails';

import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [countryValue, setCountryValue] = useState('');

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(countries => {
        setCountries(countries)
      })
  }, [])

  return (
    <div className="App">
      <FilterCountries countryValue={countryValue} onChangeCountry={(e) => setCountryValue(e.target.value)}/>
      <CountryDetails 
        countries={countries} 
        countryValue={countryValue} 
        onShowCountry={(country) => setCountryValue(country)} />
    </div>
  );
}

export default App;
