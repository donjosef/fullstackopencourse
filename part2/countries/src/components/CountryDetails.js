import React from 'react';
import SingleCountry from './SingleCountry';

const CountryDetails = ({ countryValue, countries, onShowCountry }) => {

    let output = null;
    const filteredCountries = countries.filter(country => country.name.match(new RegExp(countryValue, 'i')))

    if (filteredCountries.length > 10) {
        output = <p>Too many matches. Be more specific</p>
    }

    if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
        output = (
            <ul>
                {filteredCountries.map(country => (
                    <li key={country.name}>
                        <span>{country.name}</span>
                        <button onClick={() => onShowCountry(country.name)}>Show</button>
                    </li>
                ))}
            </ul>
        )
    }

    if (filteredCountries.length === 1) {
        const country = filteredCountries[0];
        output = <SingleCountry country ={country}/>
    }

    return output
}

export default CountryDetails;