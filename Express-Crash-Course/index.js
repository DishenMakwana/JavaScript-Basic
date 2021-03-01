const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');

// init middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Home page
app.get('/', (req, res) => {
	res.render('index', {
		title: 'Members App',
		members,
	});
});

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// member api routes
app.use('/api/members', require('./routes/api/members'));

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
