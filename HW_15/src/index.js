/* Умова №1
Попрацюємо з числовим паліндромом) Числовий паліндром - це натуральне число, яке читається зліва направо і справа наліво однаково. Інакше кажучи, відрізняється симетрією запису (розташування цифр), причому число знаків може бути як парним, так і непарним.

Але

Паліндром можна отримати як результат операцій над іншими числами. Візьмемо будь-яке натуральне число і складемо його зі зворотним числом, тобто записаним тими самими цифрами, але у зворотному порядку. Проробимо ту саму дію з сумою, що вийшла, і будемо повторювати її доти, доки не утвориться паліндром. Іноді достатньо зробити всього один крок (наприклад, 312 + 213 = 525), але, як правило, потрібно не менше двох. Скажімо, число 96 породжує паліндром 4884 тільки на четвертому кроці....

У результаті я хочу, щоб ви написали функцію, яка повертатиме об'єкт, де буде властивість result - і це буде паліндром, і властивість steps - це число викликів до знаходження паліндрома.

Для того, щоб перевірити себе використовуйте число 196. Це так зване Lychrel number - число яке немає поліндрому.
*/
function isPalindrome(num) {
    const numStr = num.toString();
    const reversedNumStr = numStr.split('').reverse().join();
    return numStr === reversedNumStr;
}

function reverseAndAdd(num) {
    const reversedNum = parseInt(num.toString().split('').reverse().join(''), 10);
    return num + reversedNum;
}

function findLychrelNumber(startNum, maxSteps) {
    let num = startNum;
    let steps = 0;
        while (steps < maxSteps) {
            num = reverseAndAdd(num);
            steps++;
        if(isPalindrome(num)) {
            return {result: num, steps: steps };
            }    
        }

        return null;
}

const result = findLychrelNumber(196, 1000);
console.log(result);