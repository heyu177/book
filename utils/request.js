const config=require("./config.js");
module.exports=(url,data,method="GET") => {
  return new Promise((resolve,reject) => {
    wx.request({
      url:config.host+url,
      data,
      success(res){
        resolve(res.data);
      },
      fail(error){
        reject(error);
      }
    });
  });
}