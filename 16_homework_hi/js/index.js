// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.

const dataArr = [];

const questionLengthArray = 'How many positions do you want to enter? Enter a number';
const messageEnterData = 'Enter your data';
const messageDontEnterData = 'Sorry, you don\'t want to enter a data.';
let lengthDataArray;

/**
 * receives from "prompt" a number from zero or more
 * @param {string} message
 * @returns {number} {string}
 */
function getData(message) {  // чи коректно зробити таку функцію?
    let data;
    do {
        data = prompt(message);
    } while (isNaN(+data) || data === '' || +data < 0); // як додати перевірку на 0 при цьому щоб вікно не закривалось коли натиснути кансел? бо +data <= 0 некоректно спрацьовує, кансел зациклюється

    return data;
}

lengthDataArray = getData(questionLengthArray);

if (lengthDataArray === null) {
    alert(messageDontEnterData);
}

for (let index = 0; index < lengthDataArray; index += 1) {
    dataArr.push(getData(messageEnterData));
}


/**
 * displays information in the "alert" and on the page "html"
 * @param {string} id
 * @param displayData
 */
function displayDataHtml(id, displayData) {
    alert(displayData);
    document.getElementById(id).innerHTML = displayData;
}

displayDataHtml('hw_16_01', dataArr);
// alert(dataArr);
// document.getElementById('hw_16_01').innerHTML = dataArr; // чомусь підкреслює dataArr?



// Відсортувати масив за зростанням.
const sortDataArr = dataArr.sort(function (a, b) {
    return a - b;
});

displayDataHtml('hw_16_02', sortDataArr);


// Видалити елементи з масиву з 2 по 4 (включно!).
const from = 2;
const to = 3;

if (dataArr.length >= 4) {
    dataArr.splice(from, to);
    displayDataHtml('hw_16_03', dataArr);
} else {
    displayDataHtml('hw_16_03', 'Length < 4');
}