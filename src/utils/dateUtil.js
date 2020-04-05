function getDate(str) {
    let n = str.search("/");
    return str.substring(0,n);
}
//将字符串转化为时间
export function strToDate(str) {
    let date = new Date(getDate(str).replace(/-/,"/"));
    return date;
}