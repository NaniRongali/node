// require('./4.MindGrenade')
//OS MODULE
const os = require('os')
//INFO about current user

const user = os.userInfo()
// console.log(user)
//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()}seconds`)