import {get} from '../utils/request';
export const getChatList = (param)=>get("/chat/listChat",param);