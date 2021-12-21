import axios from "axios";

export const OMDBapi = axios.create({
    baseURL: 'http://www.omdbapi.com'
})