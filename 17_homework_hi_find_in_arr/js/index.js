// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Знайти суму та кількість позитивних елементів.
// Знайти мінімальний елемент масиву та його порядковий номер.
// Знайти максимальний елемент масиву та його порядковий номер.
// Визначити кількість негативних елементів.
// Знайти кількість непарних позитивних елементів.
// Знайти кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
// Знайти суму непарних позитивних елементів.
// Знайти добуток позитивних елементів.
// Знайти найбільший серед елементів масиву, ост альні обнулити.


let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];


// Знайти суму та кількість позитивних елементів.
const sumPositiveElements = (array) => array.reduce((acc, element) => element > 0 ? acc += element : acc, 0);
const numPositiveElements = (array) => array.reduce((acc, element) => element > 0 ? acc += 1 : acc, 0);

console.log(sumPositiveElements(array));
console.log(numPositiveElements(array));


// Знайти мінімальний елемент масиву та його порядковий номер.
const minArrElement = (array) => array.slice(0).sort((a, b) => a - b)[0];

/**
 * @param {[]} array
 * @param {number} number
 * @returns {number}
 */
const ordinalNumArrElement = (array, number) => array.indexOf(number) + 1;

console.log(minArrElement(array));
console.log(ordinalNumArrElement(array, minArrElement(array)));
console.log(array);


// Знайти максимальний елемент масиву та його порядковий номер.
const maxArrElement = (array) => array.slice(0).sort((a, b) => b - a)[0];

console.log(maxArrElement(array));
console.log(ordinalNumArrElement(array, maxArrElement(array)));


// Визначити кількість негативних елементів.
const numNegativeElements = (array) => array.reduce((acc, element) => element < 0 ? acc += 1 : acc, 0);

console.log(numNegativeElements(array));


// Знайти кількість непарних позитивних елементів.
const numOddPositiveElements = (array) => array.reduce((acc, element) => element > 0 && element % 2 !== 0 ? acc += 1 : acc, 0);

console.log(numOddPositiveElements(array));


// Знайти кількість парних позитивних елементів.
const numEvenPositiveElements = (array) => array.reduce((acc, element) => element > 0 && element % 2 === 0 ? acc += 1 : acc, 0);

console.log(numEvenPositiveElements(array));


// Знайти суму парних позитивних елементів.
const sumEvenPositiveElements = (array) => array.reduce((acc, element) => element > 0 && element % 2 === 0 ? acc += element : acc, 0);

console.log(sumEvenPositiveElements(array));


// Знайти суму непарних позитивних елементів.
const sumOddPositiveElements = (array) => array.reduce((acc, element) => element > 0 && element % 2 !== 0 ? acc += element : acc, 0);

console.log(sumOddPositiveElements(array));


// Знайти добуток позитивних елементів.
const prodPositiveElements = (array) => array.reduce((acc, element) => acc <= 0 ? acc = element : element > 0 ? acc *= element : acc,);

console.log(prodPositiveElements(array));


// Знайти найбільший серед елементів масиву, остальні обнулити.
const largeElement = (array) => array.map((value) => {
    if (value !== maxArrElement(array)) {
        value = 0;
    }
    return value;
});

array = largeElement(array);

console.log(largeElement(array));
console.log(array);