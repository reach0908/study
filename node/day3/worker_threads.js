const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {
  // 부모일 때
  const worker = new Worker(__filename);
  worker.on("message", (message) => {
    console.log("워커 쓰레드에서 받은 메시지", message);
  });
  worker.on("exit", () => {
    console.log("워커 쓰레드 종료");
  });
  worker.postMessage("ping");
} else {
  // 워커일 때
  parentPort.on("message", (message) => {
    console.log("부모 쓰레드에서 받은 메시지", message);
    parentPort.postMessage("pong");
    parentPort.close();
  });
}
