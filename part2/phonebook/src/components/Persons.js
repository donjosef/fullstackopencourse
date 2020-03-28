import React from 'react';

const Persons = ({ filteredPersons, onDeletePerson }) => {
    return (
        <ul>
            {filteredPersons.map(person => {
                return (
                    <li key={person.name}>
                        <span>{person.name}</span>
                        <span>{person.number}</span>
                        <button onClick={() => onDeletePerson(person.id)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default Persons;