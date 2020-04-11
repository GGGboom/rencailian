import {post, get, deletefn,put} from '../utils/request';
export const login = (data) => post('/users/login',data);
export const saveInfo = (data,token)=> post("/jobhunter/userCenter",data,token);
export const getInfo = (params)=> get("/jobhunter/userCenter",params);
export const getFavourite = (params,data)=>get("/jobhunter/favourite/",params,data);
export const getDeliveryHistory = (params)=>get("/jobhunter/delivery",params);
export const getContract = (params,data)=>get("/contract/",params,data);
export const getContractDetail = (params,data)=>get("/contract/single/",params,data);
export const applyArbitration = (data,token)=> post("/contract/arbitration",data,token);
export const getWalletDetail = (params,data)=>get("/users/bst/info/",params,data);
export const addWallet = (data,token)=>post("/jobhunter/bst/import",data,token);
export const deleteWallet = (params,token,id)=>deletefn("/users/bst/",params,token,id);
export const getResumeAtt = (params)=>get("/resume",params);
export const deleteResume = (params,token,id)=>deletefn("/resume/resume/",params,token,id);
export const uploadResumeAttach=(data,token)=> post("/resume/resume/upload",data,token);
export const getBlackList = (params)=>get("/blacklist",params);
export const addBlack = (data,token,companyId)=>post("/blacklist/"+companyId,data,token);
export const getInterViewDate = (params)=>get("/jobhunter/delivery/interview",params);
export const changePasswd = (data,token)=>put("/users",data,token);
// export const getDeliver = (params)=>get("/jobhunter/delivery",params,token);