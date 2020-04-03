import axios from 'axios'
// import {Message} from 'element-ui'


const severUrl = 'http://49.234.230.195:58080/';
const service = axios.create({
    baseURL: severUrl,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});


// 请求拦截器
service.interceptors.request.use(config => {
    return config;
});

//响应拦截器
service.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        return error;
    }
);

export function get(url, params) {
    return service({url, method: 'get', params})
}

export function post(url, data) {
    return service({url, method: 'post', data})
}

export default service