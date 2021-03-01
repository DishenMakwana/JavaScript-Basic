const url = require('url');
const myurl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// serial url
console.log(myurl.href);

// host
console.log(myurl.host);

// hostname
console.log(myurl.hostname);

// path name
console.log(myurl.pathname);

// serial query
console.log(myurl.search);

// params object
console.log(myurl.searchParams);

// add param
myurl.searchParams.append('abc', '123');
console.log(myurl.searchParams);
