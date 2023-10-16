/* Умова №1
Вам необхідно використовувати масив нотифікацій з минулих занять. 
До отриманого під час групування об'єктаnotifications, вам необхідно додати ітератор, щоб під час перебору в цикліfor ofми отримували кожен елемент із вкладених списків об'єктаnotificationsтаким чином, немов працюємо з "плоским" масивом.
*/
function groupNotifications(notifications) {
    const groupedNotifications = {
        [Symbol.iterator]: function() {
            const sources = Object.keys(groupedNotifications);
            let sourceIndex = 0;
            let notificationIndex = 0;

            return {
                next: function() {
                    if (sourceIndex < sources.length) {
                        const source = sources[sourceIndex];
                        const notificationsForSource = groupedNotifications[source];

                        if (notificationIndex < notificationsForSource.length) {
                            const result = {
                                value: notificationsForSource[notificationIndex],
                                done: false
                            };
                            notificationIndex++;
                            return result;
                        } else {
                            sourceIndex++;
                            notificationIndex = 0;
                            return this.next();
                        }
                    } else {
                        return { done: true };
                    }
                }
            };
        }
    };

    for (const notification of notifications) {
        const source = notification.source;
        const text = notification.Text;
        const date = notification.Date;

        if (!groupedNotifications[source]) {
            groupedNotifications[source] = [];
        }

        groupedNotifications[source].push({ Text: text, Date: date });
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
for (const notification of grouped) {
    console.log(notification);
}

/* Умова №2
Вам необхідно реалізувати функціюmemoize(fn), яка приймає вхід функцію і додає їй можливість кешування результатів виконання, щоб уникнути повторних обчислень.
Це означає, що в разі, коли функція викликається з однаковими параметрами, то результат необхідно брати з кешу. (Тільки примітиви у параметрах та використовуйтеMap)
*/
function memoize(fn) {
    const cache = new Map();
        return function (...args) {
    const key = JSON.stringify(args);
        if (cache.has(key)) {
        return cache.get(key);
        } else {
    const result = fn(...args);
    cache.set(key, result);
        return result;        
            
        }        
    };
}
function expensiveFunction(a, b) {
    console.log("Викликаємо кеш");
        return a + b; 
}
    const memoizedExpensiveFunction = memoize(expensiveFunction);
console.log(memoizedExpensiveFunction(2, 3));
console.log(memoizedExpensiveFunction(2, 3));    
