import axios from "axios";

export const ServerURL = 'http://localhost:3333'

export const OMDBapi = axios.create({
    baseURL: 'http://www.omdbapi.com'
})

export const LocalDBapi = axios.create({
    baseURL: ServerURL
})