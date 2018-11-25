import {EventEmitter} from "events";

class Resource extends EventEmitter {
  constructor(m) {
    super();
    this.maxEvents = m;
    this.main();
  }

  main() {
    process.nextTick(() => {
      let count = 0;
      self.emit('start');
      let t = setInterval(() => {
        self.emit('data', ++count);
        if (count === this.maxEvents) {
          self.emit('end');
          clearInterval(t);
        }
      }, 10)
    })
  }
}

let r = new Resource(5);

r.on('start', () => console.log('I\'have started'));
r.on('data', d => console.log(`  I'have received ${d}`));
r.on('end', () => console.log('Finished'));
