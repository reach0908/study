const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

if (isMainThread) {
  const threads = new Set();
  threads.add(
    new Worker(__filename, {
      workerData: { start: 1 },
    })
  );
  threads.add(
    new Worker(__filename, {
      workerData: { start: 2 },
    })
  );
  for (let worker of threads) {
    worker.on("message", (message) => {
      console.log("워커 쓰레드에서 받은 메시지", message);
    });
    worker.on("exit", () => {
      threads.delete(worker);
      if (threads.size === 0) {
        console.log("모든 워커 쓰레드 종료");
      }
    });
  }
} else {
  const data = workerData;
  parentPort.postMessage(data.start + 100);
}
