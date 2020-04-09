/**
 * @param keyword
 * @description  设置localStorage
 * @returns {any}
 */
export const setStore = (keyword,content)=>{
    if(!keyword) return;
    localStorage.setItem(keyword,JSON.stringify(content));
}

/**
 * @param keyword
 * @description  获取localStorage
 * @returns {any}
 */
export const getStore = (keyword)=>{
    if(!keyword) return;
    return JSON.parse(localStorage.getItem(keyword));
}


/**
 * @param keyword
 * @description  删除localStorage
 */
export const removeStore = (keyword)=>{
    if(!keyword) return;
    localStorage.removeItem(keyword);
}