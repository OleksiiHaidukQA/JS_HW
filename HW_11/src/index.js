/* Умова №1
logArguments
Вам необхідно написати функцію-декораторlogArguments(fn), яка приймає на вхід функцію і додає можливість логувати всі аргументи, передані у функцію-аргумент.
*/
function logArguments(fn) {
    return function (...args) {
        console.log('Arguments:', args);
    const result = fn(...args);
    return result;    
    };
}
function add(foo, foo2) {
    return foo + foo2;
}

const decoratedAdd = logArguments(add);
const result = decoratedAdd(2, 3);
console.log('Результат', result);

/* Умова №2
validate
Вам необхідно написати функцію-декораторvalidate(fn, validator), яка приймає на вхід функцію і додає можливість перевіряти аргументи, передані у функціюfn, на відповідність заданому validator.
Якщо аргументи не проходять перевірку, то декоратор має викидати виняток.
*/
function isNumber(value) {
    return typeof value === 'number';
}

function validate(fn, validator) {
    return function (...args) {
        for (let i = 0; i < args.length; i++) {
            if (!validator(args[i])) {
                throw new Error('Аргумент не пройшов валідацію');
            }
        }
        return fn(...args);
    };
}

function add(a, b) {
    return a + b;
}

const safeAdd = validate(add, isNumber);

console.log(safeAdd(1, 2));
console.log(safeAdd('1', 2));
