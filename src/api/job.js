import {post,get,deletefn} from '../utils/request';
export const getJobList = (data,token,pageSize,pageNum)=>post(`/jobseeker/position/classify?pageSize=${pageSize}&pageNum=${pageNum}&authorization=${token}`,data);
export const searchJob =  (params,data)=>get('/jobseeker/position/vague/',params,data);
export const getJobById = (params,positionId) =>get("/position/",params,positionId);
export const favourite = (data,token) =>post(`/jobhunter/store/2/${data}`,null,token);
export const canelFavourite= (params,token,id,type)=>deletefn(`/jobhunter/store/${type}/`,params,token,id);