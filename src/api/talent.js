import {post,get} from "../utils/request";
export const getTalentList = (data,token,pageSize,pageNum) =>post(`/hr/talent?pageSize=${pageSize}&pageNum=${pageNum}&authorization=${token}`,data);
export const getExpectPost =(params) =>get("/position/mine",params);
export const searchTalent = (params,data)=>get(`/hr/talent/`,params,data);