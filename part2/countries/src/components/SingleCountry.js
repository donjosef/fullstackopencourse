import React, { useState, useEffect } from 'react';
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

const SingleCountry = ({ country }) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        fetch(`http://api.weatherstack.com/current?access_key=${REACT_APP_API_KEY}&query=${country.capital}`)
            .then(res => res.json())
            .then(weather => {
                setWeather(weather)
            })
    }, [])

    return (
        <div>
            <h2>{country.name}</h2>
            <p>Capital {country.capital}</p>
            <p>Population {country.population}</p>
            <h3>Languages</h3>
            <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
            <div style={{ width: '50%' }}>
                <img style={{ width: '100%' }} src={country.flag} alt={country.name + ' flag'} />
            </div>
            {weather ? (
                <div>
                    <h3>Weather in {weather.location.name}</h3>
                    <p>Temperature: {weather.current.temperature}</p>
                    <img src={weather.current.weather_icons[0]} alt="" />
                    <p>Wind: {weather.current.wind_dir} {weather.current.wind_speed + 'km/h'}</p>
                </div>
            ) : 'Loading weather...'}
        </div>
    )
}

export default SingleCountry;