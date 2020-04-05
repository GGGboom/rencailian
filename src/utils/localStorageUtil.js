//存储localStorage
export const setStore = (keyword,content)=>{
    if(!keyword) return;
    localStorage.setItem(keyword,JSON.stringify(content));
}
//存储localStorage
export const getStore = (keyword)=>{
    if(!keyword) return;
    return JSON.parse(localStorage.getItem(keyword));
}
//删除localstorage
export const removeStore = (keyword)=>{
    if(!keyword) return;
    localStorage.removeItem(keyword);
}