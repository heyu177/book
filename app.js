//app.js
const requet=require("./utils/request.js");
App({
  onLaunch: async function () {
    // 登录
    wx.login({
      success: async res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        let code=res.code;
        let token=await requet("/getOpenId",{code});
        wx.setStorageSync('token', token);
      }
    });
    // 发请求进行身份验证
    const result=await requet("/test");
    console.log(result);
  }
})