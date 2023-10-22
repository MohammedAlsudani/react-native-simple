// api.js
import axios from 'axios';

// Define your Axios instance with default headers
const api = axios.create({
    baseURL: 'https://api.example.com' // Replace with your specific API URL
});

// Define a request function
const request = (options) => {
    return api.request(options)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};

export const get = (url, params = {}) => {
    const options = {
        method: 'GET',
        url: url,
        params: { ...params },
    };
    return request(options);
};

export const post = (url, data) => {
    const options = {
        method: 'POST',
        url: url,
        data,
    };
    return request(options);
};

export const put = (url, data) => {
    const options = {
        method: 'PUT',
        url: url,
        data,
    };
    return request(options);
};

export const remove = (url) => {
    const options = {
        method: 'DELETE',
        url: url,
    };
    return request(options);
};
