"use strict";



class Custom {
  constructor(options) {
    this.emitter=options.emitter;
  }

  go() {
    console.log('Emitting event1');
    this.emitter.emit('event1','custom.js');
  }
}

module.exports = Custom;
