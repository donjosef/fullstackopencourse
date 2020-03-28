import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

export const getAll = () => {
    return axios
    .get(baseUrl)
    .then(res => res.data)
}

export const createPerson = (person) => {
    return axios
    .post(baseUrl, person)
    .then(res => res.data)
}

export const deletePerson = (id) => {
    return axios
    .delete(`${baseUrl}/${id}`)
    .then(res => res.data)
}

export const updatePerson = (id, person) => {
    return axios
        .put(`${baseUrl}/${id}`, person)
        .then(res => res.data)
}