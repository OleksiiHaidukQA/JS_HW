/* Умова №1
randomDelayPrint
Створіть функцію randomDelayPrint, яка прийматиме рядок message як аргумент і виводитиме кожну букву цього рядка з довільною затримкою від 0 до 1 секунди. 
Використовуйте setTimeout, щоб додати випадкову затримку перед виведенням кожної літери.

randomDelayPrint("Hello");
// Очікуваний результат (затримки між літерами будуть різними):
// H (невелика затримка)
// e (велика затримка)
// l (маленька затримка)
// l (маленька затримка)
// o (велика затримка)
*/
function randomDelayPrint(message) {
    for (let i = 0; i < message.length; i++) {
        const letter = message[i];
        const delay = Math.random() * 1000;

        (function (letter, delay) {
            setTimeout(() => {
                console.log(letter);
            }, delay);
        })(letter, delay);
    }
}

randomDelayPrint("Hello");

/*Умова №2 
debounce
Створіть функціюdebounce, яка приймає функцію зворотного виклику і затримку (в мілісекундах) як аргументи. Функціяdebounceповинна повертати нову функцію, яка викликає вихідну функцію тільки після того, як минула вказана кількість часу без викликів. Це дасть змогу ігнорувати часті виклики функції та виконувати її лише один раз через зазначену затримку після останнього виклику.

const expensiveOperation = () => console.log("Виконую складну операцію..."); constdebouncedExpensiveOperation = debounce(expensiveOperation, 1000);
debouncedExpensiveOperation();
debouncedExpensiveOperation();
debouncedExpensiveOperation();
// Через 1 секунду після останнього виклику "Виконую складну операцію..." має бути виведене в консоль тільки один раз.
*/
function debounce(func, delay) {
    let timeout;

    return function (...args) {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

const expensiveOperation = () => console.log("Виконую складну операцію...");
const debouncedExpensiveOperation = debounce(expensiveOperation, 1000);

debouncedExpensiveOperation();
debouncedExpensiveOperation();
debouncedExpensiveOperation();

/* Умова №3
intervalRace
Створіть функціюintervalRace, яка прийматиме масив функцій та інтервал часуtу мілісекундах. 
ФункціяintervalRaceмає викликати кожну функцію з масиву по черзі через заданий інтервал часуt. 
Коли всі функції виконано,intervalRaceмає повернути масив із результатами.
*/
function intervalRace(functions, interval) {
  const results = [];
  let index = 0;

  return new Promise((resolve) => {
    const executeFunction = async () => {
      if (index < functions.length) {
        results.push(await functions[index]());
        index++;
        setTimeout(executeFunction, interval);
      } else {
        resolve(results);
      }
    };

    executeFunction();
  });
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const functions = [
  async () => {
    await delay(1000);
    return "Function 1 done";
  },
  async () => {
    await delay(500);
    return "Function 2 done";
  },
  async () => {
    await delay(1500);
    return "Function 3 done";
  },
];

intervalRace(functions, 1000).then((results) => {
  console.log(results);
});
