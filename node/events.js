const events = require('events');
let emitterEvents = new events.EventEmitter();

emitterEvents.on('hello',()=>{
    console.log('The event emitted');
});

emitterEvents.emit('hello')