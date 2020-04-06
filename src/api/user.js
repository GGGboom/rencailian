import {post,get} from '../utils/request';
export const login = (data) => post('/users/login',data);
export const saveInfo = (data,token)=> post("/jobhunter/userCenter",data,token);
export const getInfo = (params)=> get("/jobhunter/userCenter",params);
export const getFavourite = (params,data)=>get("/jobhunter/favourite/",params,data);
// export const getDeliver = (params)=>get("/jobhunter/delivery",params,token);