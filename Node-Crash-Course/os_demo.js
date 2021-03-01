const { memory, dir } = require('console');
const os = require('os');

// plateform
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU core info
console.log(os.cpus());

// Free memory
console.log(os.freemem());
console.log(os.totalmem());

// home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());
