/* Умова №1 
Вам необхідно написати функцію, яка приймає на вхід масив чисел і повертає новий масив, що містить тільки ті числа, які є простими числами.
*/
function isPrime(number) {
    if (number <= 1) {
        return false;
}
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
        return false;
    }
}
    return true;
}
function filterPrimes(numbers) {
        return numbers.filter(isPrime);
}    

const inputNumbers = [2,3,4,5,6,7,8,9,10];
const primeNumbers = filterPrimes(inputNumbers);
console.log(primeNumbers);

/* Умова №2
Вам необхідно написати функцію, яка приймає на вхід масив об'єктів, 
де кожен об'єкт описує сповіщення та має поляsource/text/date. 
Вам необхідно перетворити цей масив на об'єкт, де ключем буде джерело сповіщення,
а значенням - масив сповіщень із цього джерела.
*/
function groupNotifications(notifications) {
    const groupedNotifications = {};
    for (const notification of notifications) {
        const source = notification.source;
        if (groupedNotifications[source]) {
            groupedNotifications[source].push(notification);
        } else {
            groupedNotifications[source] = [notification];
        }
    }
    return groupedNotifications;
}

const notifications = [
    { source: 'Email', Text: 'Ви отримали нового листа на електронну пошту.', Date: '11.10.2023' },
    { source: 'SMS', Text: 'Нове смс повідомлення', Date: '11.10.2023' },
    { source: 'Telegram', Text: 'Нове повідомлення в Телеграм', Date: '11.10.2023' },
    { source: 'Viber', Text: 'Вам надійшло повідомлення у Viber', Date: '11.10.2023' },
];

const grouped = groupNotifications(notifications);
console.log(grouped);

/* Умова №3
Вам необхідно написати функцію, яка приймає на вхід масив і повністю повторює поведінку методу масиву group (якби він був).
*/
function groupBy(arr, keyFn) {
    return arr.reduce((result, item) => {
        const key = keyFn(item);
            if (!result[key]) {
                result[key] = [];
            }
            result[key].push(item);
            return result;
    }, {});
}

const data = [
    {name: 'Oleksii', age: 32},
    {name: 'Gena', age: 27},
    {name: 'Vasyl', age: 41},
];

const groupedData = groupBy(data, (item) => item.age);
console.log(groupedData);