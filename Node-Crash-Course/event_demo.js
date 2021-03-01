const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myemitter = new MyEmitter();

// event listener
myemitter.on('event', () => console.log('Event Fired..'));

// init event
myemitter.emit('event');
