import axios from 'axios';

export default {
    users: {
        read: () => requestAPI('GET', '/users'),
        readById: (id) => requestAPI('GET', `/users/${id}`),
        create: (data) => requestAPI('POST', '/users', data),
        update: (id, data) => requestAPI('PUT', `/users/${id}`, data),
        delete: (id) => requestAPI('DELETE', `/users/${id}`)
    },
    medicines: {
        read: () => requestAPI('GET', '/medicines'),
        readById: (id) => requestAPI('GET', `/medicines/${id}`),
        create: (data) => requestAPI('POST', '/medicines', data),
        update: (id, data) => requestAPI('PUT', `/medicines/${id}`, data),
        delete: (id) => requestAPI('DELETE', `/medicines/${id}`)
    },
    schedule: {
        read: () => requestAPI('GET', '/scheduling'),
        readById: (id) => requestAPI('GET', `/scheduling/${id}`),
        create: (data) => requestAPI('POST', '/scheduling', data),
        update: (id, data) => requestAPI('PUT', `/scheduling/${id}`, data),
        delete: (id) => requestAPI('DELETE', `/scheduling/${id}`)
    }
}


// const proxy = {
//     proxy: {
//         host: '127.0.0.1',
//         port: 8080,
//     }
// };

const apiLink = 'http://localhost:8080/api'

function requestAPI(method, path, data, options = {}) {

    let url = apiLink + path;

    const requestOptions = {
        headers: {},
        json: true,
        formdata: false,
        ...options,
        method
    }


    if (method.toUpperCase() === 'GET' && data) {
        const getParams = Object
            .entries(data)
            .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
            .join('&')
        url += '?' + getParams
    }
    return axios(url, requestOptions)
        .then((response) => {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
        })
        .catch((error) => console.log(error));
}
