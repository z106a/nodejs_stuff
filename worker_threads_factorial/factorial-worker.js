const {Worker, parentPort, workerData} = require('worker_threads');

const numbers = workerData;

const calcFactorial = numArray => numArray.reduce((acc, val) => acc * val, 1n);
const result = calcFactorial(numbers);

parentPort.postMessage(result);