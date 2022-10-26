// Створити об'єкт, та при його створенні відразу зробити декілька властивостей(свойств)
// Назовіть об'єкт з назвою store.
// При створенні зробіть відразу властивості name і запишіть у нього назву свого уявного магазину.
// Також створіть властивість address, який буде об'єктом і там запишіть властивості country, city, street, houseNumber з адресою вашого уявного магазину.
// Потім створіть окремо(тобто не при ініціалізації, а нижче(ініацілізація це процес сворення та коли ми відразу туди сетемо якісь властивості)) властивість clients, і значенням буде пустий об'єкт.
// Потім до clients зробіть 5 властивостей, які будуть називатися іменами і прізвищами 5 рандомних учасників нашого курсу(мене також можно) і у кожного має бути значення з кількіст'ю покупок(quantity) та кількість бонусів(bonuses). Ці значення будуть числами

const store = {
    name: 'Go for Coffee',
    address: {
        country: 'Ukraine',
        city: 'Dnipro',
        street: 'Sicheslavska Naberezhna',
        houseNumber: 1,
    },
}

store.clients = {};

const students = {
    'Bogdan Onackyi': 'Bogdan Onackyi',
    'Olena Demchyk': 'Olena Demchyk',
    'Irina Makarova': 'Irina Makarova',
    'Mikhail Hitko': 'Mikhail Hitko',
    'Oleksandra Horbenko': 'Oleksandra Horbenko',
    'Oleksii Yelanskiy': 'Oleksii Yelanskiy',
    'Olha Nevzghodova': 'Olha Nevzghodova',
    'Pavlo Fedorenko': 'Pavlo Fedorenko',
    'Viktoriia Chernyshova': 'Viktoriia Chernyshova',
    'Viktoriia Barankova': 'Viktoriia Barankova',
    'Yuriy Duchev': 'Yuriy Duchev',
}

let randomKey;
const keysStudents = Object.keys(students);

for (let i = 0; i < 5; i += 1) {
    do {
        randomKey = Math.floor(Math.random() * Object.keys(students).length);
    }
    while (store.clients[keysStudents[randomKey]] !== undefined);
    store.clients[keysStudents[randomKey]] = {
        quantity: Math.floor(Math.random() * 100 + 1),
        bonuses: Math.floor(Math.random() * 500 + 1),
    };
}

console.log(store);
