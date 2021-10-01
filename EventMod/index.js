// Event Module

// Node.js has a built-in module, called "Event",
// Where you can creat-, fire-, and listen for - your own event

// Example 1 - Registering for the event to be fired only one time using oncuechange.

// Example 2 - Create an event emitter instance and ragister a couple of callbacks.

// Example 3 - Registering for the event with callback parameters.


const EventEmitter = require('events');
const { listeners } = require('process');

const event = new EventEmitter();

// event.on('sayMyName', () => {
//     console.log('Your name is Abhishek');
// })

// event.on('sayMyName', () => {
//     console.log('Your Last name is Abhishek');
// })

// event.on('sayMyName', () => {
//     console.log('Your Age is 27');
// })

// event.emit('sayMyName')

event.on('checkPage', (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
})

event.emit('checkPage', 200, 'ok')

// the concept is quite simple: emitter objects emit named events thet cause previously registered listeners to be called. so an emitter object basically has two main features:

// Emitting name events.
// Registering and unregistering listener functions. 

