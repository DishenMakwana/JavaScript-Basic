const fs = require('fs');
const path = require('path');

// Create Folder
fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
	if (err) throw err;
	console.log('Folder Created');
});

// Create and Write in file
fs.writeFile(path.join(__dirname, '/test', 'hello.html'), 'Hwloo!', (err) => {
	if (err) throw err;
	console.log('File written to..');
});

// Append to file
fs.writeFile(path.join(__dirname, '/test', 'hello.html'), 'Hwloo!', (err) => {
	if (err) throw err;
	fs.appendFile(
		path.join(__dirname, '/test', 'hello.html'),
		'From Node Modules',
		(err) => {
			if (err) throw err;
			console.log('File reWritten...');
		}
	);
});

// Read file
fs.readFile(
	path.join(__dirname, '/test', 'hello.html'),
	'utf8',
	(err, data) => {
		if (err) throw err;
		console.log(data);
	}
);

// Rename file
fs.rename(
	path.join(__dirname, '/test', 'hello.html'),
	path.join(__dirname, '/test', 'hellonode.html'),
	(err) => {
		if (err) throw err;
		console.log('File Renamed...');
	}
);
