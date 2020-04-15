import {getInfo} from "../api/user";
import {BasicData} from "./basicDatas";
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
        let localUser = this.getStore("user");
        if (localUser===undefined ){     //未登录
            alert("请先登录");
            return 0;
        }
        if(identityType===2){                       //如果为应聘者
            getInfo({authorization:this.getStore("token")}).then(res=>{
                console.log("run")
                if(res.code===0){
                    console.log("success");
                    console.log(res)
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
        let dateTime = new Date(mill);
        let year = dateTime.getFullYear();
        let month = dateTime.getMonth()+1;
        month = month<10?'0'+month:month;
        let day = dateTime.getDate();
        day = day<10?'0'+day:day;
        let hour = dateTime.getHours();
        hour = hour<10?'0'+hour:hour;
        let minute = dateTime.getMinutes();
        minute = minute<10?'0'+minute:minute;
        let second = dateTime.getSeconds();
        second = second<10?'0'+second:second;
        //yyyy-MM-dd HH:mm:ss
        return format.replace("yyyy",year).replace("MM",month).replace("dd",day).replace("HH",hour).replace("mm",minute).replace("ss",second);
    },

    /**
     * @description Get the meaning of the enumeration in Chinese
     */
    getKeyName:function(date_code,key_value){
        let commonBasicData = BasicData;
        let keyName = '';
        if(key_value!=null && commonBasicData && commonBasicData != null && typeof(commonBasicData)!="undefined"){
            for(let i=0;i<commonBasicData.length;i++){
                let currData = commonBasicData[i];
                if(currData.dateCode == date_code && currData.keyValue ==key_value ){
                    keyName = currData.keyName;
                }
            }
        }
        return keyName;
    },

    /**
     * @description Get the digital value of the enumeration
     */
    getKeyValue:function(date_code,key_name){
        let commonBasicData = BasicData;
        let keyValue = '';
        if(key_name!=null && commonBasicData && commonBasicData != null && typeof(commonBasicData)!="undefined"){
            for(let i=0;i<commonBasicData.length;i++){
                let currData = commonBasicData[i];
                if(currData.dateCode === date_code && currData.keyName === key_name ){
                    keyValue = currData.keyValue;
                    break;
                }
            }
        }
        return keyValue;
    },

    strToDate:(str)=>{
        return new Date((str).replace(/-/,"/"));
    },

    dateToString:(date)=>{
        try {
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
        }catch (e) {
            console.log(e);
        }

    },

    /**
     * @description Get the enumeration list by date_code
     */
    getEnumNameList:function(date_code,noEmpty){
        let commonBasicData = BasicData;
        let enumList = [];
        if(typeof(noEmpty)=='undefined'){
            enumList.push('');
        }
        if(commonBasicData && commonBasicData != null && typeof(commonBasicData)!="undefined"){
            for(let i=0;i<commonBasicData.length;i++){
                let currData = commonBasicData[i];
                let obj={};
                if(currData.dateCode === date_code){
                    obj.txt = currData.keyName;
                    obj.id = currData.keyValue;
                    enumList.push(obj);
                }
            }
        }
        return enumList;
    },

    /**
     * 行业类型
     */
    industryType:[
        {
            txt:"不限",
            id:0
        },
        {
            txt:"快销",
            id:1
        },
        {
            txt:"电子商务",
            id:2
        },
        {
            txt:"游戏",
            id:3
        },
        {
            txt:"媒体",
            id:4
        },
        {
            txt:"广告营销",
            id:5
        },
        {
            txt:"数据服务",
            id:6
        },
        {
            txt:"医疗健康",
            id:7
        },
        {
            txt:"O2O",
            id:8
        },
        {
            txt:"音乐/视频/阅读",
            id:9
        },
        {
            txt:"在线教育",
            id:10
        },
        {
            txt:"社交网络",
            id:11
        },
        {
            txt:"人力资源服务",
            id:12
        },
        {
            txt:"企业服务",
            id:13
        },
        {
            txt:"信息安全",
            id:14
        },
        {
            txt:"智能硬件",
            id:15
        },
        {
            txt:"移动互联网",
            id:16
        },
        {
            txt:"互联网",
            id:17
        },
        {
            txt:"计算机软件",
            id:18
        },
        {
            txt:"通信/网络设备",
            id:19
        },
        {
            txt:"广告/公关/会展",
            id:20
        },
        {
            txt:"互联网金融",
            id:21
        },
        {
            txt:"物流/仓储",
            id:22
        },
        {
            txt:"贸易/进出口",
            id:23
        },
        {
            txt:"汽车生产",
            id:24
        }

    ],

    /**
     * 薪资范围
     */
    salaryRange:[
        {
            txt:"2-5k",
            id:1
        },
        {
            txt:"6-10k",
            id:2
        },
        {
            txt:"11-15k",
            id:3
        },
        {
            txt:"16-20k",
            id:4
        },
        {
            txt:"21-25k",
            id:5
        },
        {
            txt:"26-30k",
            id:6
        },
        {
            txt:"31-35k",
            id:7
        },
        {
            txt:"36-40k",
            id:8
        },
        {
            txt:"41-45k",
            id:9
        },
        {
            txt:"46-50k",
            id:10
        },
        {
            txt:"50k以上",
            id:11
        },
    ],

    /**
     * 学历
     */
    education:[
        {
            txt:"小学",
            id:1
        },
        {
            txt:"初中",
            id:2
        },
        {
            txt:"高中",
            id:3
        },
        {
            txt:"大专",
            id:4
        },
        {
            txt:"本科",
            id:5
        },
        {
            txt:"硕士",
            id:6
        },
        {
            txt:"博士",
            id:7
        },
        {
            txt:"博士后",
            id:8
        },
    ],

    /**
     * 学历
     */
    cities:[
        {
            txt:"上海",
            id:1
        },
        {
            txt:"北京",
            id:2
        },
        {
            txt:"广州",
            id:3
        },
        {
            txt:"深圳",
            id:4
        },
        {
            txt:"杭州",
            id:5
        },
        {
            txt:"天津",
            id:6
        },
        {
            txt:"苏州",
            id:7
        },
        {
            txt:"武汉",
            id:8
        },
    ],
};