//获取公司规模
export function getCompanySize(n){
    switch (n) {
        case 0:{
            return "未设置";
        }
        case 1:{
            return "0-20人";
        }
        case 2:{
            return "20-100人";
        }
        case 3:{
            return "100-500人";
        }
        case 4:{
            return "500-1000人";
        }
        case 5:{
            return "1000-10000人";
        }
        case 6:{
            return "10000人以上";
        }
    }
}

//获取公司验证状态
export function getVerifiedStatus(n) {
    switch (n) {
        case 0:{
            return "未认证";
        }
        case 1:{
            return "认证通过";
        }
        case 2:{
            return "认证中";
        }
        case 3:{
            return "认证不通过";
        }
    }
}

//获取公司融资状态
export function getFinancingRound(n) {
    switch (n) {
        case 0:{
            return "初始值";
        }
        case 1:{
            return "未融资";
        }
        case 2:{
            return "天使轮";
        }
        case 3:{
            return "A轮";
        }
        case 4:{
            return "B轮";
        }
        case 5:{
            return "C轮";
        }
        case 6:{
            return "D轮及以上";
        }
        case 7:{
            return "已上市";
        }
        case 8:{
            return "不需要融资";
        }
    }
}

/**
 * @description Get the date format by format
 * format eg. yyyy-MM-dd HH:mm:ss  yyyy-MM-dd  HH:mm:ss   yyyy/MM/dd HH:mm
 * must have yyyy or MM or dd or HH or mm or ss
 */
export function getFormatDateTime( mill,format) {
    if(!mill || mill == null || typeof(mill)=='undefined'){
        return ''
    }
    var dateTime = new Date(mill);
    var year = dateTime.getFullYear();
    var month = dateTime.getMonth()+1;
    month = month<10?'0'+month:month;
    var day = dateTime.getDate();
    day = day<10?'0'+day:day;
    var hour = dateTime.getHours();
    hour = hour<10?'0'+hour:hour;
    var minute = dateTime.getMinutes();
    minute = minute<10?'0'+minute:minute;
    var second = dateTime.getSeconds();
    second = second<10?'0'+second:second;
    //yyyy-MM-dd HH:mm:ss
    return format.replace("yyyy",year).replace("MM",month).replace("dd",day).replace("HH",hour).replace("mm",minute).replace("ss",second);
}