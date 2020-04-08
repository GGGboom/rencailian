import {post,get} from '../utils/request';
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
// export const deleteWalletDetail = ()
// export const getDeliver = (params)=>get("/jobhunter/delivery",params,token);