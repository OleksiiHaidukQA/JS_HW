//Перша умова//
function reverseString(str) {
 return str.split('').reverse().join('');
    
}

console.log(reverseString('Hello Valentyn')); 

//Друга умова (паліндром)//
function isPalindrome(str) {

const cleanedStr = str.replace(/\s/g, '').toLowerCase();
const reversedStr = cleanedStr.split('').reverse().join('');
return cleanedStr === reversedStr;
    
}

console.log(isPalindrome('вирив'));

