const os = require("os");

//common things irrespective of modules (globals)
console.log(__dirname);

console.log(__filename);

//os module
console.log(os.type());

console.log(os.version());

console.log(os.homedir());

console.log(os.uptime());

console.log(os.machine());
