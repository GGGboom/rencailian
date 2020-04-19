import {post,get,deletefn,put} from '../utils/request';
export const getJobList = (data,token,pageSize,pageNum)=>post(`/jobseeker/position/classify?pageSize=${pageSize}&pageNum=${pageNum}&authorization=${token}`,data);
export const searchJob =  (params,data)=>get('/jobseeker/position/vague/',params,data);
export const getJobById = (params,positionId) =>get("/position/",params,positionId);
export const favourite = (data,token) =>post(`/jobhunter/store/2/${data}`,null,token);
export const canelFavourite= (params,token,id,type)=>deletefn(`/jobhunter/store/${type}/`,params,token,id);


// hr的api
export const getMinePosition = (params)=>get("/position/mine",params);
export const operatePostion = (positionId,positionStatus,data,token)=> put(`/hr/talent/${positionId}/${positionStatus}/`,data,token);
export const getPosition = (params,data) =>get("/companys/",params,data);
export const editPosition = (data,token)=>post("/hr/talent/position",data,token);