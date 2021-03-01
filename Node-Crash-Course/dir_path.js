const path = require('path');

//  Base Path
console.log(path.basename(__filename));

//  Dir Path
console.log(path.dirname(__filename));

// File Extension
console.log(path.extname(__filename));

// Creat path Object
console.log(path.parse(__filename));

// Concatenate paths
console.log(path.join());
