import {deletefn, get,post} from "../utils/request";
export const getCompanyList = (data,token,pageSize,pageNum)=>post(`/jobseeker/position/classify?pageSize=${pageSize}&pageNum=${pageNum}&authorization=${token}`,data);
export const getCompanyById = (params,companyId) =>get("/companys/",params,companyId);
export const canelFavouriteComp= (params,token,id,type)=>deletefn(`/jobhunter/store/${type}/`,params,token,id);