/* Умова №1 
sumArrayPromise
Напишіть функцію, яка приймає масив чисел як аргумент і повертає Promise.
Promise має бути виконаний через 3 секунди і повернути суму всіх чисел із масиву.

sumArrayPromise([1,2,3,4,5]).then(console.log)
// 15;
*/
function sumArrayPromise(numbers) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sum = numbers.reduce((acc, current) => acc + current, 0);
      resolve(sum);
    }, 3000);
    });
}

sumArrayPromise([1, 2, 3, 4, 5])
  .then(console.log)
  .catch(console.error);

  /* Умова №2
  concurrentPromises
Створіть функцію concurrentPromises, яка приймає масив промісів і максимальну кількість промісів, що виконуються одночасно. 
Функція має виконати проміси паралельно, але не більше зазначеної максимальної кількості. Результатом функції має бути масив результатів промісів.

concurrentPromises([
	newPromise(resolve=>setTimeout(() =>resolve('Promise 1'),1000)),
	newPromise(resolve=>setTimeout(() =>resolve('Promise 2'),500)),
	newPromise(resolve=>setTimeout(() =>resolve('Promise 3'),800))
],2).then(console.log);
// Через 1000мс виводить: ["Promise 1", "Promise 2"]
// Через 1300мс виводить: "Promise 3"
*/
function concurrentPromises(promises, maxConcurrency) {
  return new Promise((resolve, reject) => {
    const results = [];
    let currentIndex = 0;

    function runNextPromise() {
      if (currentIndex >= promises.length) {
        resolve(results);
        return;
      }

      const currentPromise = promises[currentIndex];
      currentIndex++;

      currentPromise()
        .then((result) => {
          results.push(result);
        })
        .catch(reject)
        .finally(() => {
          runNextPromise();
        });
    }

    for (let i = 0; i < maxConcurrency && i < promises.length; i++) {
      runNextPromise();
    }
  });
}

function newPromise(fn) {
  return () => new Promise(fn);
}

const promises = [
  newPromise((resolve) => setTimeout(() => resolve('Promise 1'), 1000)),
  newPromise((resolve) => setTimeout(() => resolve('Promise 2'), 500)),
  newPromise((resolve) => setTimeout(() => resolve('Promise 3'), 800)),
];

concurrentPromises(promises, 2)
  .then(console.log)
  .catch(console.error);

/* Умова №3
sequenceAsync
Реалізуйте функціюsequenceAsync, яка приймає масив функцій-промісів asyncFunctions.
Кожна функція-проміс приймає попередній результат як аргумент і повертає новий результат. Функція sequenceAsync має виконати проміси послідовно, передаючи результат попереднього промісу в наступний.
Зверніть увагу, що вам потрібно надати реалізацію функції sequenceAsync, яка дозволяє виконувати довільну кількість функцій-промісів у правильному порядку.  
*/
function sequenceAsync(asyncFunctions) {
  return asyncFunctions.reduce((promiseChain, currentFunction) => {
    return promiseChain.then((chainResults) => {
      return currentFunction(chainResults).then((currentResult) => {
        chainResults.push(currentResult);
        return chainResults;
      });
    });
  }, Promise.resolve([]));
}

const asyncFunction1 = (prevResult) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async Function 1");
      resolve(prevResult + 1);
    }, 1000);
  });
};

const asyncFunction2 = (prevResult) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async Function 2");
      resolve(prevResult * 2);
    }, 500);
  });
};

const asyncFunction3 = (prevResult) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async Function 3");
      resolve(prevResult - 3);
    }, 800);
  });
};

sequenceAsync([asyncFunction1, asyncFunction2, asyncFunction3])
  .then((results) => {
    console.log("Final Result:", results[results.length - 1]);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
