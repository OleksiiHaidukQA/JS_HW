//Завдання №1
const originalArray = [1, 2, 3, 4, 5];
function reverse (originalArray) {
    return originalArray.reverse()
}
const reverted = reverse(originalArray);

console.log(reverted)

//Завдання №2
function uniqueValues(arr1, arr2) {
    const combinedArray = arr1.concat(arr2);
    const uniqueSet = new Set(combinedArray);
    const uniqueArray = Array.from(uniqueSet);
    return uniqueArray;     
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueValuesArray = uniqueValues(array1, array2);
console.log(uniqueValuesArray);

//Завдання №3
function calculateAverageGrade(students) {
    if (students.length === 0) {
        return 0;
    }

    let totalGrade = 0;    
    for (const student of students) {
        totalGrade += student.grade;
    }
    
    const averageGrade = totalGrade / students.length;
    return averageGrade;
}

const students = [
    { name: "Alice", age: 20, grade: 4.5 },
    { name: "Bob", age: 21, grade: 3.9 },
    { name: "Charlie", age: 19, grade: 4.8 }
  ];
  
  console.log(calculateAverageGrade(students)); 