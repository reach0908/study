const EventEmitter = require("events");

const myEvent = new EventEmitter();

myEvent.addListener("event1", () => {
  console.log("event1");
});

myEvent.on("event2", () => {
  console.log("event2");
});

myEvent.on("event2", () => {
  console.log("event2 추가");
});

myEvent.once("event3", () => {
  console.log("event3");
});

// 이벤트 호출
myEvent.emit("event1");
myEvent.emit("event2");

myEvent.emit("event3");
myEvent.emit("event3");

myEvent.on("event4", () => {
  console.log("event4");
});

myEvent.removeAllListeners("event4");
myEvent.emit("event4");

const listener = () => {
  console.log("이벤트 5");
};

myEvent.on("event5", listener);
myEvent.emit("event5");

myEvent.removeListener("event5", listener);
myEvent.emit("event5");

console.log(myEvent.listenerCount("event2"));
