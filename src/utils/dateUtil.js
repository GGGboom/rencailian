//将字符串转化为时间
export function strToDate(str) {
    return  new Date((str).replace(/-/,"/"));
}

//将时间转化为字符串
export function dateToString(date){
    let year = date.getFullYear();
    let month =(date.getMonth() + 1).toString();
    let day = (date.getDate()).toString();
    if (month.length === 1) {
        month = "0" + month;
    }
    if (day.length === 1) {
        day = "0" + day;
    }
    return year + "-" + month + "-" + day;
}