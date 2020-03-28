import React from 'react';

const FilterCountries = ({countryValue, onChangeCountry}) => {
    return (
        <div>
            <label htmlFor="countries">Find countries </label>
            <input
                placeholder="e.g italy"
                type="text"
                id="countries"
                value={countryValue}
                onChange={onChangeCountry} />
        </div>
    )
}

export default FilterCountries;