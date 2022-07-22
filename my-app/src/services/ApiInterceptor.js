import axios from "axios";
import AuthServices from "./AuthServices";

import apiConfig from '../config.json'


const instance = axios.create({
    // baseURL: "https://app12759.herokuapp.com",
    baseURL: apiConfig.SERVER_URL,
    headers: {
        "Content-Type": "application/json",
    }
});

instance.interceptors.request.use((config) => {

    const token = AuthServices.getLoggedUser()
    if (token) {
        config.headers["auth"] = token
    }
    return config;

}, (error) => {
    return Promise.reject(error);
}
);


export default instance;