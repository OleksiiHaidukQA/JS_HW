/* Умова №1
capitalizeStrings
Напишіть функціюcapitalizeStrings, яка приймає на вхід масив рядків і повертає новий масив, у якому кожен рядок має першу літеру у верхньому регістрі, а решту літер - у нижньому регістрі.

constwords = ["apple","banaNA","kiWi","ORANGE"];

console.log(capitalizeStrings(words));// ["Apple", "Banana", "Kiwi", "Orange"]

*/
function capitalizeStrings (words) {
    const capitalizedWords = [];
    for (const word of words) {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    capitalizedWords.push(capitalizedWord);     
    }
return capitalizedWords;    
} 

    const words = ["apple", "banaNA", "kiWi", "ORANGE"];
    console.log(capitalizeStrings(words));

/* Умова №2 
findCommonElements
Напишіть функціюfindCommonElements, яка приймає на вхід два масиви і повертає новий масив, що містить елементи, які є в обох вихідних масивах.

constarray1 = [1,2,3,4,5];
constarray2 = [3,4,5,6,7];

console.log(findCommonElements(array1, array2));// [3, 4, 5]
*/
function findCommonElements (array1, array2) {
    const commonElements = [];
    for (const element of array1) {
        if (array2.includes(element)) {
            commonElements.push(element);
        }
    }
    return commonElements;    
}
const array1 = [1,2,3,4,5];
const array2 = [3,4,5,6,7];
const commonElementsArray = findCommonElements(array1, array2);
console.log(commonElementsArray);

/* Умова №3 
analyzeArray
Напишіть функціюanalyzeArray, яка приймає на вхід масив чисел і повертає об'єкт з такими властивостями:

sum- сума всіх елементів масиву
average- середнє значення елементів масиву
min- мінімальне значення в масиві
max- максимальне значення в масиві
const numbers = [1, 2, 3, 4, 5];

console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }
*/
function analyzeArray(numbers) {
    if (numbers === 0) {
        return {
            sum: 0,
            average: 0,
            min: undefined,
            max: undefined,
        };
    }
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return {
    sum,
    average,
    min,
    max,
    };    
}
const numbers = [1,2,3,4,5];
console.log(analyzeArray(numbers));