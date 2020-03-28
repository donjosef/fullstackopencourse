import React from 'react';

const Filter = ({filterValue, onChangeFilter}) => {
    return (
        <label>
            Filter persons: <input value={filterValue} onChange={onChangeFilter} type="text" />
        </label>
    )
}

export default Filter;