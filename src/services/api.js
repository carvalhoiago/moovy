import axios from "axios";

export const OMDBapi = axios.create({
    baseURL: 'http://www.omdbapi.com'
})

export const LocalDBapi = axios.create({
    baseURL: 'http://localhost:3333'
})