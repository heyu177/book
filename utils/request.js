const config=require("./config.js");
let token=wx.getStorageSync('token');
module.exports=(url,data,method="GET") => {
  return new Promise((resolve,reject) => {
    wx.request({
      url:config.host+url,
      data,
      header:{
        authorization:token
      },
      success(res){
        resolve(res.data);
      },
      fail(error){
        reject(error);
      }
    });
  });
}