import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Form from './components/Form';
import Persons from './components/Persons';
import Notification from './components/Notification';
import { getAll, createPerson, deletePerson, updatePerson } from './services/persons';

import './App.css';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

  const handleSubmit = e => {
    e.preventDefault();
    const existingPerson = persons.find(person => person.name === newName);
    if (existingPerson) {
      const confirmUpdate = window.confirm(`${existingPerson.name} already exists. Do you want to change the old number?`);
      if (confirmUpdate) {
        const updatedPerson = {
          name: newName,
          number: newNumber
        };

        updatePerson(existingPerson.id, updatedPerson)
          .then(updatedPerson => {
            setPersons(persons.map(p => p.id === updatedPerson.id ? updatedPerson : p))
            setNotificationMessage(`Updated number of ${updatedPerson.name}`)
            setTimeout(() => {
              setNotificationMessage(null)
            }, 2000);
          })
          .catch(err => {
            setErrorMessage(`Cannot update ${updatedPerson.name}. Its information has already been deleted from the server`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 2000)
          })
      }

    } else {
      const person = {
        name: newName,
        number: newNumber
      };
      createPerson(person)
        .then(person => {
          setPersons(persons.concat(person))
          setNotificationMessage(`${person.name} added to the phonebook`)
          setTimeout(() => {
            setNotificationMessage(null)
          }, 2000);
        })
      setNewName('')
      setNewNumber('')
    }
  }

  const handleChangeName = e => {
    setNewName(e.target.value)
  }

  const handleChangeNumber = e => {
    setNewNumber(e.target.value)
  }

  const handleFilter = e => {
    setFilterValue(e.target.value)
  }

  const handleDeletePerson = (id) => {
    const person = persons.find(p => p.id === id);
    const confirmDeletion = window.confirm(`Delete ${person.name}?`);
    if (confirmDeletion) {
      deletePerson(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  let filteredPersons = persons;
  if (filterValue) {
    const regex = new RegExp(filterValue, 'i');
    filteredPersons = persons.filter(person => regex.test(person.name))
  }

  return (
    <div>
      <Notification notificationMessage={notificationMessage} errorMessage={errorMessage} />
      <h2>Phonebook</h2>
      <Filter filterValue={filterValue} onChangeFilter={handleFilter} />
      <h2>Add new person</h2>
      <Form
        onSubmit={handleSubmit}
        onChangeName={handleChangeName}
        onChangeNumber={handleChangeNumber}
        newName={newName}
        newNumber={newNumber} />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} onDeletePerson={handleDeletePerson} />
    </div>
  )
}

export default App