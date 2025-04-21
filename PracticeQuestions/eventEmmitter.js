console.log('EventEmitter');
class MyEventEmitter {
    constructor() {
        //array of listeners
        this.__event_listeners = {
            
        };
        // mapping of event name to listner subscriber 
        //[event] : Subscriber[]
        // this.__event_listeners = new Map();
        // this.__event_listeners.set('event', []);
        // this.__event_listeners.set('event2', []);
    }
    on(event, listner) {
        //Register the [listner] for [event]
        if(!this.__event_listeners[event]) {
            this.__event_listeners[event] = [];
        }
        this.__event_listeners[event].push(listner);
        return true;
    }
    emit(event, ...args) { 
        if(!this.__event_listeners[event]) {
            return false;
        }
        //Iterate over the list of subscribers and call them with the args
        const listers = this.__event_listeners[event];
        listers.forEach((listner) => {
            listner(...args);
        });
        return true;
    }
    off(event, listner) { 
        if(!this.__event_listeners[event]) {
            return false;
        }

        const index = this.__event_listeners[event].indexOf(listner);

        if(index === -1) {
            return false;
        }
        this.__event_listeners[event].splice(index, 1);
        return true; 
    }
    once(event, listner) { 
        if(!this.__event_listeners[event]) {
            this.__event_listeners[event] = [];
        }
        const onceWrapper = (...args) => {
            listner(...args);
            this.off(event, onceWrapper);
        }
        // this.__event_listeners[event].push(onceWrapper);
        this.on(event, onceWrapper);
        return true;
    }
}

const sendWhatsApp = (user) => {
    console.log('WhatsApp sent to:', user);
}
const sendEmail = (user) => {
    console.log('Email sent to:', user);
}

const e = new MyEventEmitter();
e.on('user:signup', (user) => { console.log('User signed up:'); });
e.on('user:signup', (user) => { console.log('Email sent to user:', user); });
e.off('user:signup', (user) => { console.log(sendWhatsApp); });
e.on('user:logout', (user) => { console.log('logout:', user); });

e.emit('user:signup', '@JohnDoe');
e.emit('user:logout', '@JohnDoe-2');
e.once('user:signup', sendWhatsApp);
e.emit('user:signup', '@JohnDoe-2');
e.emit('user:logout', '@JohnDoe');


/*
class MyEventEmitter {
  constructor() {
    this.__event_listeners = new Map();
  }

  on(event, listener) {
    if (typeof listener !== 'function') {
      throw new Error('Listener must be a function');
    }
    if (!this.__event_listeners.has(event)) {
      this.__event_listeners.set(event, new Set());
    }
    const listeners = this.__event_listeners.get(event);
    listeners.add(listener);
    return { remove: () => listeners.delete(listener) };
  }

  emit(event, ...args) {
    const listeners = this.__event_listeners.get(event);
    if (!listeners) return false;
    [...listeners].forEach((listener) => {
      try { listener(...args); }
      catch (err) { console.error('Error in listener:', err); }
    });
    return true;
  }

  off(event, listener) {
    const listeners = this.__event_listeners.get(event);
    if (!listeners) return false;
    return listeners.delete(listener);
  }

  once(event, listener) {
    const onceWrapper = (...args) => {
      listener(...args);
      this.off(event, onceWrapper);
    };
    return this.on(event, onceWrapper);
  }

  removeAllListeners(event) {
    this.__event_listeners.delete(event);
  }
}
*/