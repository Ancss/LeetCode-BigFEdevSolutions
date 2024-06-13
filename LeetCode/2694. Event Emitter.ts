type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

// use Math.random() to generate a unique field for each event
// class EventEmitter {
//   public events: { [key in string]: Callback[] } = {};
//   subscribe(eventName: string, callback: Callback): Subscription {
//     const field = eventName + Math.random();
//     this.events[field] = this.events[field] || [];
//     this.events[field].push(callback);
//     return {
//       unsubscribe: () => {
//         this.events[field] = [];
//       },
//     };
//   }

//   emit(eventName: string, args: any[] = []): any[] {
//     const result: any[] = [];
//     Object.keys(this.events).forEach((key) => {
//       if (key.startsWith(eventName)) {
//         this.events[key].forEach((callback) => {
//           result.push(callback(...args));
//         });
//       }
//     });
//     return result;
//   }
// }

// easy way from leetCode
class EventEmitter {
  subscriptions: { [key: string]: Callback[] } = {};

  subscribe(eventName: string, callback: Callback): Subscription {
    if (!this.subscriptions.hasOwnProperty(eventName)) {
      this.subscriptions[eventName] = [];
    }
    this.subscriptions[eventName].push(callback);

    const subscriptions = this.subscriptions;

    return {
      unsubscribe: () => {
        // find the index of the callback in the subscriptions[eventName] array
        const callbackIdx = subscriptions[eventName].findIndex(
          (_callback: Callback, idx) => {
            return callback === _callback;
          }
        );
        subscriptions[eventName].splice(callbackIdx, 1);
        return undefined;
      },
    };
  }

  emit(eventName: string, args: any[] = []): any[] {
    if (this.subscriptions.hasOwnProperty(eventName)) {
      return this.subscriptions[eventName].map((callback: Callback) =>
        callback(...args)
      );
    }
    return [];
  }
}

// const emitter = new EventEmitter();
// // Subscribe to the onClick event with onClickCallback
// function onClickCallback() { return 99 }
// const sub = emitter.subscribe('onClick', onClickCallback);
// emitter.emit('onClick'); // [99]
// sub.unsubscribe(); // undefined
// emitter.emit('onClick'); // []

const emitter = new EventEmitter();

// Subscribe to the firstEvent event with callback1
const callback1 = (x: number) => x + 1;
const sub1 = emitter.subscribe("firstEvent", callback1);

// Subscribe to the firstEvent event with callback2
const callback2 = (x: number) => x + 2;
const sub2 = emitter.subscribe("firstEvent", callback2);

// Unsubscribe from the firstEvent event
sub1.unsubscribe();

// Emit the firstEvent event with argument 5
const result = emitter.emit("firstEvent", [5]);

console.log(result); // [7]

export {};
