// 暴露的 选择状态验证 逻辑
export function checkAgree(rule, value, callback){
    // 正则验证
    if (value === false) {
        // 错误提示
        return callback(new Error("必须勾选协议"));
    }
    // 正确提示
    callback();
}