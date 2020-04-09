import {getInfo} from "../api/user";


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



export const CommonUtils = {
    domainNamePrefix :'http://49.234.230.195:58080/',  //prefix of api address
    // domainNamePrefix :'http://localhost:8080/talent_war_exploded/',  //prefix of api address
    socketDomainNamePrefix : '49.234.230.195:58080',
    staticPathPrefix : 'https://baastalent.oss-cn-hangzhou.aliyuncs.com/',
    defaultHeaderImgPath : '../../static/img/icon/ali.png',
    defaultLogoImgPath : '../../static/img/icon/logo.png',
    //socketDomainNamePrefix : '127.0.0.1:8080/SSM',
    //staticPathPrefix : 'http://127.0.0.1:8080/SSM/image/',
    //domainNamePrefix : 'http://127.0.0.1:8080/SSM/',
    //loginUrl:'/talent/TalentFront/view/shared_page/login_password.html',//本地前端链接
    payUrl : 'http://49.234.230.195:58080/ali/toPay?amount=',
    loginUrl:'/TalentFront/view/shared_page/login_password.html',           //服务器前端链接

    /**
     *
     * @param identityType
     * @description 更新localstorage的数据
     * @returns {number}  0为更新成功，1为更新失败
     */
    updateLocalUser(identityType){
        let localUser = JSON.parse(localStorage.getItem("user"));
        if (localUser===undefined ){     //未登录
            alert("请先登录");
            return 0;
        }
        if(identityType===2){                       //如果为应聘者
            getInfo({authorization:this.$getStore("token")}).then(res=>{
                if(res.code===0){
                    console.log(res);
                    localStorage.setItem('user', JSON.stringify(res.user));
                    return 0;
                }else{
                    console.log("请求数据失败");
                    return 1;
                }
            }).catch(err=>{
                console.log(err);
                return 1;
            });
        }
    },


    /**
     * @param keyword
     * @description  设置localStorage
     * @returns {any}
     */
     setStore:(keyword,content)=>{
        if(!keyword) return;
        localStorage.setItem(keyword,JSON.stringify(content));
    },

    /**
     * @param keyword
     * @description  获取localStorage
     * @returns {any}
     */
     getStore:(keyword)=>{
        if(!keyword) return;
        return JSON.parse(localStorage.getItem(keyword));
    },


    /**
     * @param keyword
     * @description  删除localStorage
     */
    removeStore:(keyword)=>{
        if(!keyword) return;
        localStorage.removeItem(keyword);
    },

    /**
     * @description Get the date format by format
     * format eg. yyyy-MM-dd HH:mm:ss  yyyy-MM-dd  HH:mm:ss   yyyy/MM/dd HH:mm
     * must have yyyy or MM or dd or HH or mm or ss
     */
    getFormatDateTime:( mill,format)=> {
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
};