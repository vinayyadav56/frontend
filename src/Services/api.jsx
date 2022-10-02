import axios from 'axios';
import config from '../config.json';
import {useAuth} from "./auth";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = config.API_BASE_URL;

axiosClient.defaults.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
};

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;

axiosClient.defaults.withCredentials = false;

export function getRequest(URL) {
    return axiosClient.get(`/${URL}`).then(response => response.data);
}

export function postRequest(URL, payload) {
    return axiosClient.post(`/${URL}`, payload).then(response => response.data);
}

export function patchRequest(URL, payload) {
    return axiosClient.patch(`/${URL}`, payload).then(response => response.data);
}

export function deleteRequest(URL) {
    return axiosClient.delete(`/${URL}`).then(response => response.data);
}

export function makeRequest(method, URL, payload){
    switch (method){
        case 'GET':
            return getRequest(URL);
            break;
        case 'POST':
            return postRequest(URL, payload);
            break;
        case 'PATCH':
            return patchRequest(URL, payload);
            break;
        case 'DELETE':
            return deleteRequest(URL, payload);
            break;
        default:
            throw "Invalid method passed";
    }
}
