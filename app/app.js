'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const applicationEvents = require('./applications/events.js')

$(() => {
  // setup event listeners, when an event occurs, one of our
  // event handler functions will be run
  authEvents.addHandlers()
  applicationEvents.addHandlers()
})
