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


// 添加请求拦截器，在请求头中加token
service.interceptors.request.use(
    config => {
        return config;
    }
);

//响应拦截器
service.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        return error;
    }
);

export function get(url, params,data) {
    if(data){
        url = `${url}${data}`;
        service({url, method: 'get',params});
    }
    return service({url, method: 'get', params})
}

export function post(url, data,token) {
    if(token) {
        url = `${url}?authorization=${token}`;
        return service({url, method: 'post', data});
    }
    return service({url, method: 'post', data});
}

//用于post请求中url带参数
export const $post =  (url, data = {}) => {
    // data.group_id=group_id;
    return  service.post(url,data)
}


export default service