import {post} from '../utils/request';
export const login = (data) => post('/users/login',data);