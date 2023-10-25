/* Умова №1 
Вам необхідно написати функцію summarize(num), яка приймає на вхід число і повертає функцію, яка під час виклику додає це число до аргументу і повертає результат.
Якщо аргумент не передано, то додається одиниця. Наприклад, якщо функція викликається з аргументом 5, то функція, що повертається, повинна при виклику з аргументом3повернути8(тому що3 + 5 = 8) або6, якщо аргумент не буде передано.
*/
function summarize(num) {
    if (typeof num !== 'number') {
        num = 0
    }
    return function (arg) {
        if (typeof arg !== 'number') {
            arg = 1;
        }
    return num + arg;    
    };
}
    const addFive = summarize(5);
console.log(addFive(3));    
console.log(addFive(6));
console.log(addFive());

/* Умова №2
Вам необхідно написати функцію counter(startValue, step), яка приймає на вхід два параметри - стартове значення лічильника і його крок.
Функція повертає нову функцію, яка при кожному виклику збільшує лічильник на значення і повертає його поточне значення.
Лічильник повинен мати методи increment,decrement і reset, які збільшують або зменшують значення на stepі скидають значення до стартового, відповідно.  
*/
function counter(startValue, step) {
    let count = startValue;
    return {
        increment: function() {
            count += step;
            return count;
        },
        decrement: function() {
            count -= step;
            return count;
        },
        reset: function() {
            count = startValue;
            return count;
        },
        getCurrentValue: function() {
            return count;
        },
    };
}
const myCounter = counter(0, 2);
console.log(myCounter.increment()); 
console.log(myCounter.increment()); 
console.log(myCounter.decrement()); 
console.log(myCounter.reset()); 
console.log(myCounter.getCurrentValue());