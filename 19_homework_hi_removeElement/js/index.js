//Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array

console.log('______HW 19_______');


const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, number) {
    array.forEach((value, index) => {
        if (value === number) {
            array.splice(index, 1);
        }
    });
    return array;
}

removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]