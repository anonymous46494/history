// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db=cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  var user_id=event.user_id
  return await db.collection("userData").doc(user_id).get()
}