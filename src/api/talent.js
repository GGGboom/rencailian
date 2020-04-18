import {post} from "../utils/request";
export const getTalentList = (data,token,pageSize,pageNum) =>post(`/hr/talent?pageSize=${pageSize}&pageNum=${pageNum}&authorization=${token}`,data);