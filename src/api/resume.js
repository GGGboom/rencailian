import {post,deletefn} from '../utils/request';
export const updateWorkExp = (data,token) => post("/resume/workexperience",data,token);
export const updateProjectExp = (data,token)=>post("/resume/projectexperience",data,token);
export const updateDegree = (data,token)=>post("/resume/degree",data,token);
export const updateWillings = (data,token)=>post("/resume/userWilling",data,token);
export const deleteWorkExp = (params,token,id) => deletefn("/resume/workexperience/",params,token,id);
export const deleteProjectExp = (params,token,id) => deletefn("/resume/projectexperience/",params,token,id);
export const deleteDegree = (params,token,id) => deletefn("/resume/degree/",params,token,id);