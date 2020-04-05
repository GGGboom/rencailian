//是否身份证号
export function validateIdNo(rule, value,callback) {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if(value==''||value==undefined||value==null){
        callback();
    }else {
        if ((!reg.test(value)) && value != '') {
            callback(new Error('请输入正确的身份证号码'));
        } else {
            callback();
        }
    }
}

//是否手机号码
export function validatePhone(rule, value,callback) {
    const reg =/^[1][3-9][0-9]{9}$/;
    if(value==''||value==undefined||value==null){
        callback();
    }else {
        if ((!reg.test(value)) && value != '') {
            callback(new Error('请输入正确的电话号码'));
        } else {
            callback();
        }
    }
}