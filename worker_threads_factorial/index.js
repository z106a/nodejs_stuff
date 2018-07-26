const os = require('os');
const path = require('path');
const { Worker, isMainThread, parentPort, workerData } = require("worker_threads");
const inquirer = require('inquirer');
const ora = require('ora');

const NS_PER_SEC = 1e9;
const userCPUCount  = os.cpus().length;
const workerPath = path.resolve('factorial-worker.js');

const doWork = (number) => {
  if (number === 0) {
    return 1;
  }
  return new Promise(async (parentResolve, parentReject) => {
    // const numbers = [... new Array(number)].map((_, i) => i + 1);
    const numbers = [];
    for(let i = 1n; i <= number; i++) {
      numbers.push(i);
    }

    const segmentSize = Math.ceil(numbers.length / userCPUCount);
    const segments = [];

    for (let segmentIndex = 0; segmentIndex < userCPUCount; segmentIndex++) {
      const start = segmentIndex * segmentSize;
      const end = start + segmentSize;
      const segment = numbers.slice(start, end);
      segments.push(segment);
    }
    console.log(segments);
    try {
      const results = await Promise.all(segments.map(
        segment =>
          new Promise((resolve, reject) => {
            const worker = new Worker(workerPath, {workerData: segment});
            worker.on("message", resolve);
            worker.on("error", reject);
            worker.on("exit", code => {
              if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
            });
          })));

      const finalResult = results.reduce((acc, val) => acc * val, 1n);
      parentResolve(finalResult);
    } catch (e) {
      parentReject(e);
    }
  });
};

const benchmarkFactorial = async (inputNumber, factFun, label) => {
  const spinner = ora(`Calculating with ${label}...`).start();
  const startTime = process.hrtime();
  const result = await factFun(BigInt(inputNumber));
  const diffTime = process.hrtime(startTime);
  spinner.succeed(`${label} result: ${result}, done in: ${(diffTime[0] * NS_PER_SEC + diffTime[1])/1000000}`);
};

const run = async () => {
  const {inputNumber} = await inquirer.prompt([{
    type: 'input',
    name: 'inputNumber',
    message: 'Calculate factorial for: ',
    default: 10
  }]);

  await benchmarkFactorial(inputNumber, doWork, 'Worker');
};

run();