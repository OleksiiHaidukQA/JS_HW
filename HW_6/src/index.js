//Умова №1
function doubleLetter(str) {
    const characters = str.split('');
    const doubledCharacters = characters.map(char => char.repeat(2)); 
    const result = doubledCharacters.join('');
    return result;
}    

const inputString = 'hello';
const doubledString = doubleLetter(inputString);
console.log(doubledString);

//Умова №2
function padString(str, lenght, symbol, toLeft = false) {
    if(toLeft) {
        while (str.lenght < lenght) {
            str = symbol + str;
        }
    } else {
        while (str.lenght < lenght) {
            str = str + symbol;
        }
    }
    return str;
}

const inputString = 'Ivan';
const paddedString = padString(inputString, 6, '*');
console.log(paddedString);

//Умова №3
function camelCase(str, separator) {
    const words = str.split(separator);
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join('');
}

const inputString = 'hello_valentyn_and_serhii';
const separator = '_';
const camelCasedString = camelCase(inputString, separator);
console.log(camelCasedString);